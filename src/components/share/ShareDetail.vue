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
    </div>
</template>
<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            detail: null
        }
    },
    created () {
        this.initData()
    },
    methods: {
        initData () {
            this.$API.urlDetail(this.id).then(res => {
                this.detail = res.data
            })
        }
    }
}
</script>
