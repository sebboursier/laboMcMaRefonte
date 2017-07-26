<template>
  <section class="container-fluid">

    <article class="panel panel-primary">
      <div class="panel-heading">
        Grpah "D3.js"
      </div>
      <div class="panel-body">
        <div ref="dndTree"></div>
      </div>
    </article>

  </section>
</template>

<script>

import DndTree from '@/common/DndTree.js'

export default {
  name: 'graph',
  data () {
    return {
      dndTree: null,
      nodes: {
        name: "ROOT",
        children: [{
          name: "CHILD_1"
        },{
          name: "CHILD_2"
        }]
      }
    }
  },
  methods: {
    add() {
      console.log("ADD");
    },
    edit() {
      console.log("EDIT");
    },
    remove() {
      console.log("REMOVE");
    },
    sendMessage() {
      console.log("SEND_MESSAGE");
    }
  },
  mounted() {
    this.dndTree = DndTree(this.$refs.dndTree,this.nodes)
  }
}

</script>

<style scoped>
.dndTree {
  width: 100%;
  height: 200px;
}
</style>
