import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@js/hotcss'
import '@css/reset.css'
import '@css/iconfont.css'
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
