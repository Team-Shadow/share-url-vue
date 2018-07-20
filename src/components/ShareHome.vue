<template>
    <div>
        <div>
            <div v-if="!user">
                <button @click="githubLogin">github登入</button>
            </div>
            <div v-else>
                {{user.name}}
                <button @click="logoutBtn">退出登入</button>
                <router-link :to="{name: 'ShareUrl'}">分享链接</router-link>
            </div>
        </div>
        <div>
            <h2>列表</h2>
            <ul>
                <li v-for="item in itemList" :key="item._id">
                    <router-link to="/">
                        {{item.title}}
                    </router-link>
                    -- {{item.author.name}}
                </li>
            </ul>
            <button v-if="page != 1" @click="prevPage">上一页</button>
            页码：{{page}}
            <button v-if="itemList.length == pageSize" @click="nextPage">下一页</button>
        </div>
    </div>
</template>
<script>
const CLIENT_ID = '274df6a3dc60b0dd834c' // github 登入所需要的客户端id
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
        })
        this.initData()
    },
    methods: {
        // 初始化数据
        initData () {
            this.$API.searchUrl({
                page: this.page,
                pageSize: this.pageSize
            }).then(res => {
                console.log(res)
                let temp = res.data || []
                this.itemList = temp
            })
        },
        // 下一页
        nextPage () {
            this.page++
            this.initData()
        },
        // 上一页
        prevPage () {
            this.page--
            this.initData()
        },
        // github 第三方登入
        githubLogin () {
            location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        },
        // 退出登入
        logoutBtn () {
            this.$API.logout().then(() => {
                this.user = null
            })
        }
    }
}
</script>

