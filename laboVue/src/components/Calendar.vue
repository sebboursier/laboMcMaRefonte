<template>
    <section class="container-fluid">

        <article class="panel panel-primary">
          <div class="panel-heading">
            Timeline "Vis.js"
          </div>
          <div class="panel-body">
            <div class="well">
              cliquez et CTRL cliquez sur des items.
            </div>
            <div ref="timeline"></div>
          </div>
        </article>

        <div v-for="select in selected" class="col-md-4">
          <article class="panel panel-success">
            <div class="panel-heading">
              {{select.content}}
            </div>
            <div class="panel-body">
              <input type="text" v-model="select.content">
              <button type="button" @click="update(select)">SAVE</button>
            </div>
          </article>
        </div>

    </section>
</template>

<script>

import Vis from 'vis'

import 'vis/dist/vis.css'

export default {
  name: 'calendar',
  data () {
    return {
      items: new Vis.DataSet([
      	{
      		content: 'REF_01',
      		start: '2016-01-01',
      		end: '2016-02-01'
      	},{
      		content: 'REF_02',
      		start: '2016-02-01',
      		end: '2016-03-01'
      	},{
      		content: 'REF_03',
      		start: '2016-03-01',
      		end: '2016-04-01'
      	},{
      		content: 'REF_04',
      		start: '2016-04-01',
      		end: '2016-05-01'
      	},{
      		content: 'REF_05',
      		start: '2016-05-01',
      		end: '2016-06-01'
      	},{
      		content: 'REF_06',
      		start: '2016-06-01',
      		end: '2016-07-01'
      	},{
      		content: 'REF_07',
      		start: '2016-07-01',
      		end: '2016-08-01'
      	},{
      		content: 'REF_08',
      		start: '2016-08-01',
      		end: '2016-09-01'
      	},{
      		content: 'REF_09',
      		start: '2016-09-01',
      		end: '2016-10-01'
      	},{
      		content: 'REF_10',
      		start: '2016-10-01',
      		end: '2016-11-01'
      	},{
      		content: 'REF_11',
      		start: '2016-11-01',
      		end: '2016-12-01'
      	},{
      		content: 'REF_12',
      		start: '2016-12-01',
      		end: '2017-01-01'
      	}
      ]),
      selected: []
    }
  },
  methods: {
    update(select) {
      this.items.update(select)
    }
  },
  mounted() {
    const self = this;
		new Vis.Timeline(this.$refs.timeline, this.items, {
      horizontalScroll: true,
			multiselect: true,
			locale: 'fr',
      zoomMin: 3600000 * 24,
			zoomMax: 3600000 * 24 * 365 * 100,
			tooltip: {
				followMouse: true,
				overflowMethod: 'cap'
			},
    }).on('select', properties => {
      self.selected = self.items.get(properties.items);
		})
  }
}
</script>

<style scoped>

</style>
