<template>
    <div>
        <form @submit="formSubmit">
            <label>
                链接地址
                <input type="url" required v-model="link">
            </label>
            <br>
            <label>
                标题
                <input type="text" required v-model="title">
            </label>
            <br>
            <label>
                描述
                <textarea id="" cols="30" rows="10" v-model="describe"></textarea>
            </label>
            <br>
            <button type="submit">提交</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: 'a:/1',
            title: Math.random() + '',
            describe: ''
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            this.$API.sendUrl({
                link: this.link,
                title: this.title,
                describe: this.describe
            }).then(res => {
                alert('分享成功')
                this.link = ''
                this.title = ''
                this.describe = ''
            })
        }
    }
}
</script>

