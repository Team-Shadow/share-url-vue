// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'

Vue.config.productionTip = false
Vue.use(router)

let app = new Vue({
  el: '#app',
  router,
  created() {
    Vue.prototype.$API = api.call(this)
  },
  components: { App },
  template: '<App/>'
})


/* eslint-disable no-new */
