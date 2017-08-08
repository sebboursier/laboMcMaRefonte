import Vue from 'vue'

import Grid from '@/components/Grid'
Vue.component(Grid.name, Grid)
import Chart from '@/components/Chart'
Vue.component(Chart.name, Chart)
import Pivot from '@/components/Pivot'
Vue.component(Pivot.name, Pivot)
import Calendar from '@/components/Calendar'
Vue.component(Calendar.name, Calendar)
import Graph from '@/components/Graph'
Vue.component(Graph.name, Graph)
import GraphCustom from '@/components/GraphCustom'
Vue.component(GraphCustom.name, GraphCustom)
import ReseauDetails from '@/components/reseauDetails'
Vue.component(ReseauDetails.name, ReseauDetails)
import ImplantationDetails from '@/components/implantationDetails/ImplantationDetails'
Vue.component(ImplantationDetails.name, ImplantationDetails)

export default [
  {
    router: {
      path: '/chart',
      name: Chart.name,
      component: Chart
    },
    name: 'Chart',
    description: "Test des Charts.",
    tags: ['hightChart', 'hightStock', 'ChartJs'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/grid',
      name: Grid.name,
      component: Grid
    },
    name: 'Grid',
    description: "Test des Grid.",
    tags: ['vue-tables-2'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/pivot',
      name: Pivot.name,
      component: Pivot
    },
    name: 'Pivot',
    description: "Test des Pivots.",
    tags: ['PivotTableJS'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/calendar',
      name: Calendar.name,
      component: Calendar
    },
    name: 'Calendar',
    description: "Test des Calendar.",
    tags: ['VisJs'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/graph',
      name: Graph.name,
      component: Graph
    },
    name: 'Graph',
    description: "Test des Graph.",
    tags: ['D3Js'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/graphcustom',
      name: GraphCustom.name,
      component: GraphCustom
    },
    name: 'GraphCustom',
    description: "Tentative de création d'un Graph SVG maison.",
    tags: ['SVG', 'custom'],
    categories: {
      metier: ['dev']
    }
  }, {
    router: {
      path: '/reseaudetails',
      name: ReseauDetails.name,
      component: ReseauDetails,
    },
    name: 'Reseau Details',
    description: "Detail d'un réseau.",
    categories: {
      metier: ['user'],
      entryPoint: ['reseau']
    }
  }, {
    router: {
      path: '/implantationdetails',
      name: ImplantationDetails.name,
      component: ImplantationDetails,
    },
    name: 'Implantation Details',
    description: "Detail d'une implantation.",
    categories: {
      metier: ['user'],
      entryPoint: ['implantation']
    }
  }
]
