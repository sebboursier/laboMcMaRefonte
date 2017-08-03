<template>
  <section class="container-fluid">

    <div class="col-md-2">
      <nav class="panel panel-default">
        <div class="panel-heading">
          Naviguer dans la hierarchie de modules
        </div>
        <div class="panel-body">
          <div class="input-group">
            <label for="search" class="input-group-addon"><span class="glyphicon glyphicon-search"></span></label>
            <input id="search" type="text" class="form-control" placeholder="Rechercher un module" v-model="search">
          </div>
          <ul class="nav nav-pills nav-stacked">
            <li v-for="module in modules" @click="addModule(module)"><a>{{module.name}}</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="col-md-10">
      <div class="panel panel-default">

        <ul class="nav nav-tabs">

          <li :class="{ active: active == null}" @click="openTab(null)">
            <a>
              Modules
              <span class="glyphicon glyphicon glyphicon-th"></span>
            </a>
          </li>

          <template v-if="tabs.length > 0">
            <li v-for="tab in tabs" :class="{ active: active == tab}" @click="openTab(tab)">
              <a>
                {{tab.module.name}}
                <a v-if="active == tab" :href="'#'+active.module.router.path" target="_blank" class="btn btn-info btn-xs glyphicon glyphicon-new-window"></a>
                <span  @click.stop="closeTab(tab)" class="btn btn-danger btn-xs glyphicon glyphicon-remove"></span>
              </a>
            </li>
          </template>

        </ul>

        <article class="tabContent">
          <component v-if="active" :is="active.module.router.component"></component>
          <modules-tiles v-else @select="addModule"></modules-tiles>
        </article>

      </div>
    </div>

  </section>
</template>

<script>

import Modules from '@/properties/modules'

import ModulesTiles from './ModulesTiles'

export default {
  name: 'home',
  components: {
    ModulesTiles
  },
  data: () => ({
    search: "",
    tabs: [],
    active: null,
    compteur: 0,
  }),
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
  },
  methods: {
    addModule(module) {
      var tab = {
        id: this.compteur,
        module: module
      }
      this.compteur++
      this.tabs.push(tab)
      this.active = tab
    },
    openTab(tab) {
      this.active = tab
    },
    closeTab(tab) {
      let index = this.tabs.indexOf(tab)
      this.tabs.splice(index,1)
      if(tab == this.active) {
        if(this.tabs.length > 0) {
          this.active = this.tabs[index-1]
        } else {
          this.active = null
        }
      }
    }
  }
}
</script>

<style scoped>
.tabContent {
  padding-top: 10px;
}
.badge > a {
  text-decoration: none;
}
</style>
