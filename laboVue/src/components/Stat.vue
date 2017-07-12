<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-default">
        <div class="panel-heading">
          Chart 1
        </div>
        <div class="panel-body">
          <div id="chart1"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-default">
        <div class="panel-heading">
          Chart 2
        </div>
        <div class="panel-body">
          <div id="chart2"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-default">
        <div class="panel-heading">
          Chart 3
        </div>
        <div class="panel-body">
          <div id="chart3"></div>
        </div>
      </article>
    </div>

    <div class="col-md-6">
      <article class="panel panel-default">
        <div class="panel-heading">
          Chart 4
        </div>
        <div class="panel-body">
          <div id="chart4"></div>
        </div>
      </article>
    </div>

  </section>
</template>

<script>
import Axios from 'axios'
import Highcharts from 'highcharts'
import Highstock from 'highcharts/highstock'

export default {
  name: 'stat',
  data () {
    return {
      chart1: null,
      options1: {
        chart: {
          type: 'spline'
        },
        credits: {
          enabled: false
        },
        series: [{
          data : [1,2,3,4,5,6,7,8,9,10]
        }]
      },
      chart2: null,
      options2: {
        credits: {
          enabled: false
        },
        series: []
      },
      chart3: null,
      chart4: null
    }
  },
  mounted() {
    // const self = this
    // Axios({
    //   method: 'get',
    //   url: 'https://www.highcharts.com/samples/data/jsonp.php?filename=MSFT-c.json&callback=?'
    // })
    // .then(response => {
    //   self.options2.series.push({
    //     data: response.data
    //   })
    // })

    this.chart1 = Highcharts.chart('chart1',this.options1)
    this.chart2 = Highcharts.chart('chart2',this.options1)
    this.chart3 = Highcharts.chart('chart3',this.options1)
    this.chart4 = Highcharts.chart('chart4',this.options1)
  }
}
</script>

<style scoped>

</style>
