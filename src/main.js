import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.prototype.$liff = window.liff
Vue.config.productionTip = false
// console.log(process.env.VUE_APP_URL)
axios.defaults.baseURL = process.env.VUE_APP_URL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
