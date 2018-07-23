<template>
    <div>
        我分享的
        <div>
            <h2>列表</h2>
            <ul>
                <li v-for="item in itemList" :key="item._id">
                    <router-link :to="{name: 'ShareDetail', params: {id: item._id}}">
                        {{item.title}}
                    </router-link>
                    -- {{item.author.name}}
                </li>
            </ul>
            <button v-if="page != 1" @click="page--;initData()">上一页</button>
            页码：{{page}}
            <button v-if="itemList.length == pageSize" @click="page++;initData()">下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: null,
            page: 1,
            pageSize: 20,
            itemList: []
        }
    },
    created () {
        this.$API.user().then(({ data: user }) => {
            this.user = user
            if (!user) {
                this.$router.push('/')
            } else {
                this.initData()
            }
        })
    },
    methods: {
        // 初始化数据
        initData () {
            this.$API.searchUrl({
                page: this.page,
                pageSize: this.pageSize,
                criteria: {
                    author: this.user._id
                }
            }).then(res => {
                let temp = res.data || []
                this.itemList = temp
            })
        },
    }
}
</script>

