<template>
    <div>
        <div>
            <div>
                <button @click="githubLogin">github登入</button>
            </div>
            <div>
                {{user.name}}
            </div>
        </div>
    </div>
</template>
<script>
const CLIENT_ID = '274df6a3dc60b0dd834c' // github 登入所需要的客户端id
export default {
    data () {
        return {
            user: {}
        }
    },
    created () {
        let user = this.$API.user()
        this.user = user || {}
    },
    methods: {
        githubLogin () {
            location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        }
    }
}
</script>

