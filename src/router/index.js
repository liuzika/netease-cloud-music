import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/m'
  },
  {
    path: '/m',
    component: () => import('@/views/FindMusic/Home.vue'),
    children: [
      {
        path: '',
        redirect: 'discover'
      },
      {
        path: 'discover',
        component: () => import('@/views/FindMusic/Discover.vue'),
      },
      {
        path: 'toplist',
        component: () => import('@/views/FindMusic/TopList.vue'),
      },
      {
        path: 'playlist',
        component: () => import('@/views/FindMusic/PlayList.vue'),
      },
      {
        path: 'djradio',
        component: () => import('@/views/FindMusic/AnchorStation.vue'),
      },
      {
        path: 'artist',
        component: () => import('@/views/FindMusic/Singer.vue'),
      },
      {
        path: 'album',
        component: () => import('@/views/FindMusic/NewDisc.vue'),
      },
    ]
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
    component: () => import('@/views/DownloadPage/DownloadPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
