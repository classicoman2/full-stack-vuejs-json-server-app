import Vue from 'vue'
import App from './App.vue'


//xtoni bootstrap BÀSIC
/*
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
*/

import "bootstrap/scss/bootstrap.scss";

import "bootstrap-icons/font/bootstrap-icons.css"

import router from './router'

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
