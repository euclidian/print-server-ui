import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router/"
import store from "./store"
import axios from "axios"
import "./registerServiceWorker"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "font-awesome/css/font-awesome.css"
import VueSweetalert2 from 'vue-sweetalert2';
import TokenHelper from './helpers/TokenHelper'
import BaseUrlHelper from './helpers/BaseUrlHelper';

Vue.mixin(TokenHelper);
Vue.mixin(BaseUrlHelper);
Vue.use('vuetify');
Vue.use(axios)
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app")
