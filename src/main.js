import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vuetify from './plugins/vuetify';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faMinus, faTrash, faCheck
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus, faTrash, faCheck);

Vue.prototype.$liff = window.liff;
Vue.config.productionTip = false;
// console.log(process.env.VUE_APP_URL)
axios.defaults.baseURL = process.env.VUE_APP_URL;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
