<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Chart "highcharts"
        </div>
        <div class="panel-body">
          <div id="highcharts"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Chart "highstock"
        </div>
        <div class="panel-body">
          <div id="highstock"></div>
        </div>
      </article>
    </div>

  </section>
</template>

<script>
import Highcharts from 'highcharts'
import Highstock from 'highcharts/highstock'

export default {
  name: 'chart',
  data () {
    return {
      highcharts: null,
      highstock: null
    }
  },
  methods: {
    getDatas() {
      const datas = []
      for (var i = 0; i < 1000; i++) {
        datas.push(randPoint())
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
        data : this.getDatas()
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
        data : this.getDatas()
      }]
    })
  }
}

function randPoint() {
  return Math.floor((Math.random() * 100) + 1);
}
</script>

<style scoped>

</style>
