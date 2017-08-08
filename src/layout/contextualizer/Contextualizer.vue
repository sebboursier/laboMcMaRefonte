<template>
  <section class="panel container-fluid">
    <div class="col-md-4" v-if="entryPointParam">
      <autocomplete :name="entryPointParam.name" :bean="entryPointParam.bean" :search="entryPointParam.search" :selector="entryPointParam.selector" @select="select">
      </autocomplete>
    </div>

  </section>
</template>

<script>

import EntryPoints from './entryPoints'

import Autocomplete from '@/common/Autocomplete'

export default {
  name: 'contextualizer',
  components: {
    Autocomplete
  },
  props: ['entryPoint'],
  data: () => ({
    entryPointParam: null
  }),
  methods: {
    select(bean) {
      this.$emit('contextualize',bean)
    }
  },
  created() {
    this.entryPointParam = EntryPoints[this.entryPoint]

  }
}
</script>

<style lang="scss" scoped>
section {
  border-color: #ddd;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
}
</style>
