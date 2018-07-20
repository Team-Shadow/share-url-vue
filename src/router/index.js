import Vue from 'vue'
import Router from 'vue-router'
import ShareHome from '@/components/ShareHome'
import ShareUrl from '@/components/share/ShareUrl'
import ShareDetail from '@/components/share/ShareDetail'

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
    },
    {
      path: '/detail/:id',
      name: 'ShareDetail',
      component: ShareDetail
    }
  ]
})
