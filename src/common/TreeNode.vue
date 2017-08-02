<template lang="html">
  <g>

    <path :d="line" v-if="parent"/>

    <template v-if="node.children && !this.contract">
      <tree-node v-for="child in node.children" :node="child" :parent="node" :handleSelect="handleSelect" :key="child.name"></tree-node>
    </template>

    <circle :cx="node.x" :cy="node.y" r="10" @contextmenu.prevent="toggle" @click="handleSelect(node, parent)" @mousedown.stop :class="{ contracted: contract }"/>
    <text :x="node.x" :y="node.y - 15">{{node.name}}</text>

  </g>
</template>

<script>
export default {
  name: 'tree-node',
  props: ['node', 'parent', 'handleSelect'],
  data() {
    return {
      line: null,
      contract: false,
    }
  }, created() {
    if (this.parent) {
      this.line = 'M '+this.parent.x+','+this.parent.y+' L '+this.node.x+','+this.node.y
    }
  }, methods: {
    toggle() {
      if(this.node.children) {
        this.contract = !this.contract
      }
    }
  }
}
</script>

<style lang="css" scoped>
text {
  text-anchor: middle;
}
circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 1.5px;
  float: left;
}
circle.contracted {
  fill: lightsteelblue;
}
path {
  fill: none;
  stroke: #ccc;
  stroke-width: 1.5px;
}
</style>
