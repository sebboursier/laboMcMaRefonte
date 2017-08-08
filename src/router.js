import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

import Modules from '@/properties/modules'

import Home from '@/layout/home/Home'

const routes = Modules.map(module => {
  return module.router
})

routes.push({
    path: '/home',
    name: Home.name,
    component: Home,
    alias: '/',
})

export default new Router({
  routes: routes
})
