import Vue from 'vue'
import App from '@/App'
import router from '@/router'

import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
