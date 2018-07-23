<template>
    <div>
        <div>
            <div v-if="!user">
                <router-link :to="{name: 'LoginHome'}">登入</router-link>
            </div>
            <div v-else>
                {{user.name}}
                <button @click="logoutBtn">退出登入</button>
                <router-link :to="{name: 'ShareUrl'}">分享链接</router-link>
                <router-link :to="{name: 'MyCollection'}">我收藏的</router-link>
                <router-link :to="{name: 'MyShare'}">我分享的</router-link>
            </div>
        </div>
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
                let temp = res.data || []
                this.itemList = temp
            })
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

