<template>
  <section class="container-fluid">

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <article class="panel panel-default">
          <div class="panel-heading">
            Filtres
          </div>
          <div class="panel-body">
            <input class="form-control" type="text" placeholder="Rechercher un module" v-model="search">
          </div>

        </article>
      </div>
    </div>

    <div class="row">
      <div v-for="module in modules" class="col-md-4">
        <article class="panel panel-primary">
          <div class="panel-heading">
            {{module.name}}
          </div>
          <div class="panel-body">
            {{module.description}}
            <div class="">
              <button type="button" class="btn btn-info" @click="navigate(module)">Aller</button>
            </div>
          </div>
        </article>
      </div>
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
      search: ""
    }
  },
  methods: {
    navigate(module) {
      Router.push(module.path)
    }
  },
  computed: {
    modules() {
      var modules = []
      Modules.forEach(module => {
        if(module.name.includes(this.search)) {
          modules.push(module)
        }
      })
      return modules
    }
  }, watch: {
    modules() {
      console.log("COUCOU");
    }
  }
}
</script>

<style scoped>

</style>
