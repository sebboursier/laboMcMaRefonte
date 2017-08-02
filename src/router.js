import Vue from 'vue'
import Router from 'vue-router'

import Modules from '@/components/Modules'
import Home from '@/components/Home'
import Grid from '@/components/Grid'
import Chart from '@/components/Chart'
import Pivot from '@/components/Pivot'
import Calendar from '@/components/Calendar'
import Graph from '@/components/Graph'
import GraphCustom from '@/components/GraphCustom'

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
      path: '/grid',
      name: 'Grid',
      component: Grid
    },{
      path: '/chart',
      name: 'Chart',
      component: Chart
    },{
      path: '/pivot',
      name: 'Pivot',
      component: Pivot
    },{
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },{
      path: '/graph',
      name: 'Graph',
      component: Graph
    },{
      path: '/graphcustom',
      name: 'GraphCustom',
      component: GraphCustom
    }
  ]
})
