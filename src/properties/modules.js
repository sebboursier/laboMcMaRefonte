import Vue from 'vue'

import Grid from '@/components/Grid'
Vue.component(Grid.name,Grid)
import Chart from '@/components/Chart'
Vue.component(Chart.name,Chart)
import Pivot from '@/components/Pivot'
Vue.component(Pivot.name,Pivot)
import Calendar from '@/components/Calendar'
Vue.component(Calendar.name,Calendar)
import Graph from '@/components/Graph'
Vue.component(Graph.name,Graph)
import GraphCustom from '@/components/GraphCustom'
Vue.component(GraphCustom.name,GraphCustom)
import ReseauDetails from '@/components/reseauDetails/ReseauDetails'
Vue.component(ReseauDetails.name,ReseauDetails)

export default [
  {
    router: {
      path: '/chart',
      name: Chart.name,
      component: Chart
    },
    name: 'Chart',
    description: "Test des Charts.",
  },{
    router: {
      path: '/grid',
      name: Grid.name,
      component: Grid
    },
    name: 'Grid',
    description: "Test des Grid.",
  }, {
    router: {
      path: '/pivot',
      name: Pivot.name,
      component: Pivot
    },
    name: 'Pivot',
    description: "Test des Pivots.",
  }, {
    router: {
      path: '/calendar',
      name: Calendar.name,
      component: Calendar
    },
    name: 'Calendar',
    description: "Test des Calendar.",
  }, {
    router: {
      path: '/graph',
      name: Graph.name,
      component: Graph
    },
    name: 'Graph',
    description: "Test des Graph.",
  }, {
    router: {
      path: '/graphcustom',
      name: GraphCustom.name,
      component: GraphCustom
    },
    name: 'GraphCustom',
    description: "Tentative de création d'un Graph SVG maison.",
  }, {
    router: {
      path: '/reseaudetails/:id',
      name: ReseauDetails.name,
      component: ReseauDetails
    },
    name: 'ReseauDetails',
    description: "Detail d'un réseau.",
  }
]
