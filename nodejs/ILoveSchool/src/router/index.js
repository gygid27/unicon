import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const sessionStorage = window.sessionStorage

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signUp',

      component: () => import('../views/SignUp.vue')
    },
    {
      // path: '/logout',
      // name: 'home',
      // component: HomeView,
      // beforeEnter: (to, from, next) => {
      //   if (sessionStorage.getItem('user_id') !== null) {
      //     sessionStorage.removeItem('user_id')
      //   }
      //   return next()
      // }
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/celebrationMsg.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('user_id') !== null) return next()
        alert('로그인해라')
      }
    }
  ]
})

//로그인이 성공했을 때 축하메세지를 보내고
//로그아웃 일때 축하메세지가 보이지 않음 라우터부분에서 해결가능
//로그인을 했을 때 축하메세지에 접근할 수 있도록  beforeEnter:이걸로 로그인
//component: () => import('../views/celebrationMsg.vue'),
//beforeEnter: (to, from, next) => { 처리하기 전에
export default router
