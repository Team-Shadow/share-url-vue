<template>
    <div>
        <form @submit="formSubmit">
            <label>
                链接地址
                <input type="url" required v-model="url">
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
            url: '',
            title: '',
            describe: ''
        }
    },
    methods: {
        formSubmit() {
            return false
        }
    }
}
</script>

