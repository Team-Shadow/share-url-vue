// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import store from './store'

Vue.config.productionTip = false
Vue.use(router)

router.beforeEach((to, from, next) => {
  // 根据配置在router.meta 中 title值 配置标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

let app = new Vue({
  el: '#app',
  router,
  store,
  created() {
    Vue.prototype.$API = api.call(this)
  },
  components: { App },
  template: '<App/>'
})


/* eslint-disable no-new */
