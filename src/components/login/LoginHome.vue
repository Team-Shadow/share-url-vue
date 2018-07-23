<template>
    <div>
        <h2>登入页面</h2>
        <button @click="githubLogin">github登入</button>
        <form>
            <label>
                用户名
                <input type="text" required v-model="username">
            </label>
            <br>
            <label>
                密码
                <input type="password" required v-model="password">
            </label>
            <br>
            <button type="button" @click="registerBtn">注册</button>
            <button type="button" @click="loginBtn">登入</button>
        </form>
    </div>
</template>
<script>
const CLIENT_ID = '274df6a3dc60b0dd834c' // github 登入所需要的客户端id

export default {
    data () {
        return {
            username: '', // 用户名
            password: '' // 密码
        }
    },
    methods: {
        // 注册
        registerBtn () {
            if (!this.username || !this.password) return alert('请输入用户名、密码')
            this.$API.register({
                username: this.username,
                password: this.password
            }).then(res => {
                if (res.data) {
                    this.$router.push('/')
                }
            })
        },
        // 登入
        loginBtn () {
            if (!this.username || !this.password) return alert('请输入用户名、密码')
            this.$API.login({
                username: this.username,
                password: this.password
            }).then(res => {
                if (res.data) {
                    sessionStorage.setItem('id', res.data._id)
                    this.$router.push('/')
                }
            })
        },
        // github 第三方登入
        githubLogin () {
            location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        },
    }
}
</script>

