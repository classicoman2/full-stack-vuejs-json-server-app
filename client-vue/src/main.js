import Vue from 'vue'
import App from './App.vue'


//xtoni bootstrap BÀSIC
/*
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
*/

import "./scss/custom.scss"
//import "bootstrap/scss/bootstrap.scss";

import "bootstrap-icons/font/bootstrap-icons.css"

import router from './router'

//vuex
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,  //vuex
  render: h => h(App)
}).$mount('#app')
