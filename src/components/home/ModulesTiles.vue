<template>
  <section class="container-fluid">

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <article class="panel panel-default">
          <div class="panel-heading">
            Filtres
          </div>
          <div class="panel-body">
            <div class="input-group">
              <label for="search" class="input-group-addon"><span class="glyphicon glyphicon-search"></span></label>
              <input id="search" type="text" class="form-control" placeholder="Rechercher un module" v-model="search">
            </div>
          </div>

        </article>
      </div>
    </div>

    <div class="row">
      <div v-for="module in modules" class="col-md-4">
        <article class="panel panel-primary">
          <div class="panel-heading">
            {{module.name}}
            <span class="right">
              <button type="button" class="btn btn-success btn-xs" @click="addTab(module)"><span class="glyphicon glyphicon-plus"></span></button>
              <button type="button" class="btn btn-info btn-xs" @click="navigate(module)"><span class="glyphicon glyphicon-new-window"></span></button>
            </span>
          </div>
          <div class="panel-body">
            {{module.description}}
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
  name: 'modules-tiles',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    navigate(module) {
      Router.push(module.router.path)
    },
    addTab(module) {
      this.$emit('select',module)
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
  }
}
</script>

<style scoped>
.right {
  float: right;
}
</style>
