<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Chart <a href="https://www.highcharts.com/demo">"highcharts"</a>
        </div>
        <div class="panel-body">
          <div id="highcharts"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Chart <a href="https://www.highcharts.com/stock/demo">"highstock"</a>
        </div>
        <div class="panel-body">
          <div id="highstock"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Chart <a href="http://www.chartjs.org/">"ChartJs"</a>
        </div>
        <div class="panel-body">
          <chart-js :chartData="datas" />
        </div>
      </article>
    </div>

  </section>
</template>

<script>
import Highcharts from 'highcharts'
import Highstock from 'highcharts/highstock'

import 'chart.js'
import { Scatter, mixins } from 'vue-chartjs'

const chartJsComponent = Scatter.extend({
  props: ['chartData'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      datasets: [
        {
          data: this.chartData
        }
      ]
    },)
  }
})

export default {
  name: 'chart',
  components: {
    'chart-js': chartJsComponent
  },
  data () {
    return {
      highcharts: null,
      highstock: null,
      datas: this.getDatas()
    }
  },
  methods: {
    getDatas() {
      const datas = []
      var date = moment()
      for (var i = 0; i < 1000; i++) {
        datas.push({x: date.valueOf(), y: randPoint()})
        date = date.clone().add(1, 'day')
      }
      return datas;
    }
  },
  mounted() {

    this.highcharts = Highcharts.chart('highcharts', {
      chart: {
        type: 'spline'
      },
      credits: {
        enabled: false
      },
      series: [{
        data : this.datas
      }]
    })

    this.highstock = Highstock.stockChart('highstock', {
      rangeSelector: {
        selected: 1
      },
      credits: {
        enabled: false
      },
      series: [{
        data : this.datas
      }]
    })
  }
}

function randPoint() {
  return Math.floor((Math.random() * 100) + 1);
}
</script>

<style scoped>
a {
  color: white;
}
</style>
