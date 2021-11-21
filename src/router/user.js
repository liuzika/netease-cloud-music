// 用户路由
export default [
  {
    path: '/user/home',
    component: () => import('@/views/User/MyHome/MyHome.vue')
  },
  {
    path: '/user/msg',
    component: () => import('@/views/User/MyMsgs/MyMsg.vue'),
    children: [
      {
        path: '',
        redirect: 'private'
      },
      {
        path: 'at',
        component: () => import('@/views/User/MyMsgs/MsgAt.vue')
      },
      {
        path: 'private',
        component: () => import('@/views/User/MyMsgs/MsgPrivate.vue')
      },
      {
        path: 'comment',
        component: () => import('@/views/User/MyMsgs/MsgComment.vue')
      },
      {
        path: 'notify',
        component: () => import('@/views/User/MyMsgs/MsgNotify.vue')
      },
    ]
  },
  {
    path: '/user/level',
    component: () => import('@/views/User/MyLevel/MyLevel.vue')
  },
  {
    path: '/user/member',
    component: () => import('@/views/User/VipMember/VipMember.vue')
  },
  {
    path: '/user/update',
    component: () => import('@/views/User/UserSetting/UserSetting.vue')
  }
]