import Vue from 'vue'
import Router from 'vue-router'
import ShareHome from '@/components/ShareHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShareHome',
      component: ShareHome
    }
  ]
})
