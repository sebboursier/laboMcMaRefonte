<template lang="html">
  <section class="container-fluid">

    <div :class="{ 'col-md-12' : !selected, 'col-md-8' : selected}">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Graph Custom SVG + VueJs
        </div>
        <div class="panel-body">
          <active-tree v-model="treeData" :handleSelect="select"></active-tree>
        </div>
      </article>
    </div>

    <div class="col-md-4"  v-if="selected">
      <article class="panel panel-success">
        <div class="panel-heading">
          {{selected.name}}
        </div>
        <div class="panel-body">

          <div class="input-group">
            <label class="input-group-addon" for="name">Nom</label>
            <input id="name" type="text" class="form-control" v-model="selected.name">
          </div>

          <v-client-table v-if="selected.children" :data="selected.children" :columns="[ 'name' ]" :options="{ filterByColumn: true, headings: { name: 'Enfants',}}">
          </v-client-table>

          <button v-if="selectedParent" @click="remove" class="btn btn-danger">Supprimer</button>

        </div>
      </article>
    </div>

  </section>
</template>

<script>

import ActiveTree from '@/common/ActiveTree'

export default {
  name: 'graph-custom',
  components: {
    ActiveTree
  },
  data () {
    return {
      treeData: {
        "name": "REF_1",
        "children": [
          { "name": "REF_1_1" },
          {
            "name": "REF_1_2",
            "children": [
              { "name": "REF_1_2_1" },
              {
                "name": "REF_1_2_2",
                children: [
                  { "name": "REF_1_2_2_1" },
                  { "name": "REF_1_2_2_2" },
                  { "name": "REF_1_2_2_3" }
                ]
              },
              { "name": "REF_1_2_3" }
            ]
          },
          {
            "name": "REF_1_3",
            children: [
              {
                name: 'REF_1_3_1',
                children: [
                  { "name": "REF_1_3_1_1" },
                  { "name": "REF_1_3_1_2" },
                  { "name": "REF_1_3_1_3" }
                ]
              }
            ]
          }
        ]
      },
      selected: null,
      selectedParent: null
    }
  }, methods : {
    select(node, parent) {
      this.selected = node
      this.selectedParent = parent
    }, remove() {
      this.selectedParent.children.splice(this.selectedParent.children.indexOf(this.selected), 1)
      this.selected = null;
      this.selectedParent = null;
    }
  }
}
</script>

<style lang="css">
</style>
