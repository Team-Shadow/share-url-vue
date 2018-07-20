<template>
    <div>
        <div>
            <div v-if="!user">
                <button @click="githubLogin">github登入</button>
            </div>
            <div v-else>
                {{user.name}}
                <button @click="logoutBtn">退出登入</button>
            </div>
        </div>
    </div>
</template>
<script>
const CLIENT_ID = '274df6a3dc60b0dd834c' // github 登入所需要的客户端id
export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        this.$API.user().then(({ data: user }) => {
            // console.log(aa)
            this.user = user
        })
    },
    methods: {
        // github 第三方登入
        githubLogin() {
            location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        },
        // 退出登入
        logoutBtn() {
            this.$API.logout().then(() => {
                this.user = null
            })
        }
    }
}
</script>

