import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import BottomNav from '@/components/BottomNav'
import comments from '@/components/comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
     {
      path: '/register',
      name: 'register',
      component: register
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sb',
      name: 'BottomNav',
      component: BottomNav
    },
    {
      path: '/comm',
      name: 'comments',
      component: comments
    }
  ]
})