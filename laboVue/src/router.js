import Vue from 'vue'
import Router from 'vue-router'

import Modules from '@/components/Modules'
import Home from '@/components/Home'
import List from '@/components/List'
import Stat from '@/components/Stat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      alias: '/'
    },{
      path: '/modules',
      name: 'Modules',
      component: Modules
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/stat',
      name: 'Stat',
      component: Stat
    }
  ]
})
