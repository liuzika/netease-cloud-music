import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 初始化样式
import '@/assets/css/reset.css'
// 公用类名
import '@/assets/css/communal.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
