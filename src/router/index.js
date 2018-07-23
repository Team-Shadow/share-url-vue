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
      component: ShareHome,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'LoginHome',
      component: LoginHome,
      meta: {
        title: '登入'
      }
    },
    {
      path: '/share',
      name: 'ShareUrl',
      component: ShareUrl,
      meta: {
        title: '分享'
      }
    },
    {
      path: '/detail/:id',
      name: 'ShareDetail',
      component: ShareDetail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/center',
      component: CenterHome,
      children: [
        {
          path: 'share',
          name: 'MyShare',
          component: MyShare,
          meta: {
            title: '我分享的'
          }
        },
        {
          path: 'collection',
          name: 'MyCollection',
          component: MyCollection,
          meta: {
            title: '我收藏的'
          }
        }
      ]
    }
  ]
})
