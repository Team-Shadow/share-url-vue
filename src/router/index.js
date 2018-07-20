import Vue from 'vue'
import Router from 'vue-router'
import ShareHome from '@/components/ShareHome'
import ShareUrl from '@/components/share/ShareUrl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShareHome',
      component: ShareHome
    },
    {
      path: '/share',
      name: 'ShareUrl',
      component: ShareUrl
    }
  ]
})
