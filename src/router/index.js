import Vue from 'vue'
import Router from 'vue-router'
import ShareHome from '@/components/ShareHome'
import ShareUrl from '@/components/share/ShareUrl'
import ShareDetail from '@/components/share/ShareDetail'
import CenterHome from '@/components/center/CenterHome'
import MyShare from '@/components/center/MyShare'
import MyCollection from '@/components/center/MyCollection'
import LoginHome from '@/components/login/LoginHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShareHome',
      component: ShareHome
    },
    {
      path: '/login',
      name: 'LoginHome',
      component: LoginHome
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
    },
    {
      path: '/center',
      component: CenterHome,
      children: [
        {
          path: 'share',
          name: 'MyShare',
          component: MyShare
        },
        {
          path: 'collection',
          name: 'MyCollection',
          component: MyCollection
        }
      ]
    }
  ]
})
