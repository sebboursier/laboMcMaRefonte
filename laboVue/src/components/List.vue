<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          List grace à "vue-tables-2"
        </div>
        <div class="panel-body">
          <v-client-table :data="datas" :columns="[ 'text', 'date', 'delete' ]" :options="options">
            <template slot="delete" scope="props">
                <button class="btn btn-danger" @click="remove(props.row)"><span class="glyphicon glyphicon-remove"></span></button>
            </template>
          </v-client-table>
        </div>
      </article>
    </div>

  </section>
</template>

<script>

export default {
  name: 'list',
  data () {
    return {
      selected: {},
      options: {
        filterByColumn: true,
        datepickerOptions: {
            showDropdowns: true
        },
        dateColumns: ['date'],
        headings: {
         text: 'Format Texte',
         date: 'Format Date',
         delete: 'Supprimer'
       },
       filterable: [
         'text',
         'date'
       ]
      },
      datas: [
        {
          id: 1,
          text: 'item 1',
          date: randomDate()
        },{
          id: 2,
          text: 'item 2',
          date: randomDate()
        },{
          id: 3,
          text: 'item 3',
          date: randomDate()
        },{
          id: 4,
          text: 'item 4',
          date: randomDate()
        },{
          id: 5,
          text: 'item 5',
          date: randomDate()
        }
      ]
    }
  },
  methods: {
    remove(row) {
      let index = this.datas.indexOf(row)
      this.datas.splice(index, 1)
    },
    edit(row) {
      this.selected = row
    }
  }
}

function randomDate() {
  const start = new Date(1925, 0, 1)
  const end =  new Date(2012, 0, 1)
  return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
</script>

<style scoped>

</style>
