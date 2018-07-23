<template>
    <div>
        我收藏的
        <ul v-if="collection">
            <li v-for="item in collection.collection_url" :key="item._id">
                <router-link :to="{name: 'ShareDetail', params: {id: item._id}}">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
        <div v-if="collection && collection.collection_url.length == 0" class="text-secondary">
            暂无收藏的链接
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            collection: null
        }
    },
    created () {
        this.initData()
    },
    methods: {
        initData () {
            this.$API.collection().then(res => {
                console.log(res)
                this.collection = res.data
            })
        }
    }
}
</script>
