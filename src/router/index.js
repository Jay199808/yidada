import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexBro from '@/components/IndexBro'
import AdvMan from '@/components/AdvMan'
import DataCen from '@/components/DataCen'
import WorkBox from '@/components/WorkBox'
import NewAdv from '@/views/newadv/NewAdv'
import Logins from '@/views/Login'

import AdvPro from '@/components/Advs/AdvPro'
import AdvCre from '@/components/Advs/AdvCre'
import AdvUni from '@/components/Advs/AdvUni'

import AccMan from '@/components/Mans/AccMan'
import CusMan from '@/components/Mans/CusMan'

import Info from '@/views/newadv/info/info'
import Plan from '@/views/newadv/plan/Plan'
import Choose from '@/views/newadv/plan/Choose'
import Upload from '@/views/newadv/upload/upload'
import Originality from '@/views/newadv/upload/Originality'

import store from '../store/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: to => '/indexbro',
      children: [
        {
          path: '/indexbro',
          name: 'IndexBro',
          component: IndexBro
        },
        {
          path: '/advman',
          name: 'AdvMan',
          component: AdvMan,
          children: [
            {
              path: '/advman/advpro',
              name: 'AdvPro',
              component: AdvPro
            },
            {
              path: '/advman/advcre',
              name: 'AdvCre',
              component: AdvCre
            },
            {
              path: '/advman/advuni',
              name: 'AdvUni',
              component: AdvUni
            }
          ]
        },
        {
          path: '/datacen',
          name: 'DataCen',
          component: DataCen
        },
        {
          path: '/workbox',
          name: 'WorkBox',
          component: WorkBox,
          children: [
            {
              path: '/accman',
              name: 'AccMan',
              component: AccMan
            },
            {
              path: '/cusman',
              name: 'CusMan',
              component: CusMan
            }
          ]
        },
        {
          path: '/login',
          name: 'Login',
          component: Logins
        },
        {
          path: '/newadv',
          name: 'NewAdv',
          component: NewAdv,
          children: [
            {
              path: 'info',
              name: 'Info',
              component: Info
            },
            {
              path: 'plan',
              name: 'Plan',
              component: Plan
            },
            {
              path: 'choose',
              name: 'Choose',
              component: Choose
            },
            {
              path: 'upload',
              name: 'Upload',
              component: Upload
            },
            {
              path: 'originality',
              name: 'Originality',
              component: Originality
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let isLogin = checkLoginStatus()
  if (to.name === 'Login') {
    next()
  } else {
    if (!isLogin) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  }
})

function checkLoginStatus () {
  let tk = localStorage.getItem('token')
  if (tk) {
    store.commit('saveUser', localStorage.getItem('username'))
  }
  return !!tk
}
export default router
