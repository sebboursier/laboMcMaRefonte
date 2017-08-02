<template lang="html">
  <svg v-if="nodes" @mousedown.prevent="startMove" @mousemove.prevent="move" @mouseup.prevent="endMove" @mousewheel.prevent="zoom" :viewBox="viewBox">
      <tree-node :node="nodes" :handleSelect="handleSelect" ></tree-node>
  </svg>
</template>

<script>

import TreeNode from '@/common/TreeNode'

export default {
  name: 'active-tree',
  components: {
    TreeNode
  }, model: {
    prop: 'nodes',
    event: 'change'
  }, props: ['nodes', 'handleSelect'],
  data() {
    return {
      startX: 0,
      startY: 0,
      size: 500,
      dragged: false,
      mouseX: null,
      mouseY: null
    }
  }, computed: {
    viewBox() {
      return this.startX + " " + this.startY + " " + this.size + " " + this.size
    }
  }, methods: {
    startMove(event) {
      this.dragged = true
      this.mouseX = event.x
      this.mouseY = event.y
    }, move(event) {
      if(this.dragged) {
        this.startX += this.mouseX - event.x
        this.startY += this.mouseY - event.y
        this.mouseX = event.x
        this.mouseY = event.y
      }
    }, endMove(event) {
      if(this.dragged) {
        this.dragged = false
      }
    }, zoom(event) {
      if(event.wheelDelta < 0 && this.size < 2000) {
        this.size += 50
      } else if(event.wheelDelta >= 0 && this.size > 200){
        this.size -= 50
      }
    }
  }, created() {
    computePositions(this.nodes, 0, {})
  }
}

function computePositions(node, depth, params) {

  if(node.children) {
    for (var child in node.children) {
      computePositions(node.children[child], depth + 1, params)
    }
    node.x = node.children[0].x + (node.children[node.children.length-1].x - node.children[0].x) / 2
    params[depth] = node.x
  } else {
    if(typeof params[depth] == 'undefined') {
      if(typeof params[depth - 1] == 'undefined') {
        params[depth] = 0
      } else {
        params[depth] = params[depth - 1]
      }
    } else {
      params[depth] += 150
    }

    node.x = params[depth]
  }

  node.y = depth * 100 + 50

  return node
}

</script>

<style lang="css" scoped>
svg {
  width: 100%;
  height: 500px;
}
</style>
