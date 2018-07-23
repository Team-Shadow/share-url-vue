<template>
    <div>
        <ul v-if="detail">
            <li>
                链接地址：
                <a :href="detail.link" target="black">{{detail.link}}</a>
            </li>
            <li>
                标题： {{detail.title}}
            </li>
            <li>
                {{detail.describe || '无描述'}}
            </li>
            <li>
                作者：{{detail.author.name}}
            </li>
        </ul>
        <div v-if="collectionHas!== null">
            <div v-if="!collectionHas && detail && detail.author._id != userId">
                <button type="button" @click="addCollection">收藏链接</button>
            </div>
            <div v-else-if="collectionHas">
                已收藏
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userId: sessionStorage.getItem('id'),
            id: this.$route.params.id,
            detail: null,
            collectionHas: null
        }
    },
    created () {
        this.initData()
        this.getCollectionHas()
    },
    methods: {
        initData () {
            this.$API.urlDetail(this.id).then(res => {
                this.detail = res.data
            })
        },
        // 获取是否已收藏
        getCollectionHas () {
            if (!this.userId) return
            this.$API.collectionHas({ urlId: this.id }).then(res => {
                this.collectionHas = res.collection
            })

        },
        // 收藏
        addCollection () {
            this.$API.addCollection({ urlId: this.id }).then(res => {
                if (!res.err)
                    this.collectionHas = true
            })
        }
    }
}
</script>
