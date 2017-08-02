<template>
  <section class="container-fluid">

    <article class="panel panel-primary">
      <div class="panel-heading">
        Graph <a href="https://d3js.org/">"D3.js"</a>
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
      treeData: {
        "name": "REF_1",
        "children": [
          {
            "name": "REF_1_2",
            "children": [
              { "name": "REF_1_2_1" },
              { "name": "REF_1_2_2" }
            ]
          },
          { "name": "REF_1_1" },
          { "name": "REF_1_3" }
        ]
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
    this.dndTree = DndTree(this.$refs.dndTree,this.treeData)
  }
}

</script>

<style>
.node {
    cursor: pointer;
  }

  .overlay{
      background-color:#EEE;
  }

  .node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 1.5px;
  }

  .node text {
    font-size:10px;
    font-family:sans-serif;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1.5px;
  }

  .templink {
    fill: none;
    stroke: red;
    stroke-width: 3px;
  }

  .ghostCircle.show{
      display:block;
  }

  .ghostCircle, .activeDrag .ghostCircle{
       display: none;
  }
</style>
