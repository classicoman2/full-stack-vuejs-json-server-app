import Vue from 'vue'
import App from './App.vue'

//xtoni bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
