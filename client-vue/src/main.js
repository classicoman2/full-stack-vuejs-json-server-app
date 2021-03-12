import Vue from 'vue'
import App from './App.vue'


//xtoni bootstrap bàsic  +  Jquery + Popper

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



// xtoni Bootstrap Theming
import "./scss/custom.scss"
import "bootstrap/scss/bootstrap.scss";
// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css"

// vue router
import router from './router'
//vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,  //vuex
  render: h => h(App)
}).$mount('#app')
