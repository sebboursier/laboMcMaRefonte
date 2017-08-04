<template>
  <section class="panel panel-default">
    <div class="panel-heading">
      Naviguer dans la hiérarchie de modules
    </div>
    <div class="panel-body">

      <div class="input-group">
        <label for="search" class="input-group-addon"><span class="glyphicon glyphicon-search"></span></label>
        <input id="search" type="text" class="form-control" placeholder="Rechercher un module" v-model="search">
      </div>
      <div class="input-group">
        <label for="type" class="input-group-addon"><span class="glyphicon glyphicon-th-list"></span></label>
        <select id="type" class="form-control" v-model="type">
          <option v-for="type in modulesTypes" :value="type">{{type.name}}</option>
        </select>
      </div>

      <article class="panel panel-default categorie" v-for="categorie in type.content">
        <div class="panel-heading">
          {{categorie}}
        </div>
        <div class="list-group">
          <a v-for="module in modules(categorie)" @click="select(module)" class="list-group-item">{{module.name}}</a>
        </div>
      </article>

    </div>
  </section>
</template>

<script>

import Modules from '@/properties/modules'

import ModulesTypes from '@/properties/modulesTypes'

export default {
  name: "modules-nav",
  data: () => ({
    search: "",
    modulesTypes: ModulesTypes,
    type: ModulesTypes[0]
  }),
  methods: {
    select(module) {
      this.$emit('select', module)
    },
    modules(categorie) {
      return Modules.filter(module => {
        if (module.categories[this.type.name]) {
          return module.categories[this.type.name].includes(categorie) && module.name.includes(this.search)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.categorie {
  margin-bottom: inherit;
}
</style>
