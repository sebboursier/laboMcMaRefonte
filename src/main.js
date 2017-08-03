import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// Import des libraires tierces

import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable)

// Initialisation de VueJs

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
