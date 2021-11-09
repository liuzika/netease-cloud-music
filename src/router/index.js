import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/FindMusic/FindMusic.vue')
  },
  {
    path: '/my',
    component: () => import('@/views/MyMusic/MyMusic.vue')
  },
  {
    path: '/friend',
    component: () => import('@/views/MyFriend/MyFriend.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/ShopMall/ShopMall.vue')
  },
  {
    path: '/musician',
    component: () => import('@/views/Musician/Musician.vue')
  },
  {
    path: '/download',
    component: () => import('@/views/DlSw/DlSw.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
