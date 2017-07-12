<template>
  <section class="container-fluid">

    <div v-for="module in modules" class="col-md-4">
      <article class="panel panel-primary">
        <div class="panel-heading">
          {{module.name}}
        </div>
        <div class="panel-body">
          {{module.description}}
          <div class="">
            <button type="button" class="btn btn-info" v-on:click="navigate(module)">Aller</button>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>

<script>
import Modules from '@/properties/modules'

import Router from '@/router'

export default {
  name: 'modules',
  data () {
    return {
      modules: Modules
    }
  },
  methods: {
    navigate(module) {
      Router.push(module.path)
    }
  }
}
</script>

<style scoped>

</style>
