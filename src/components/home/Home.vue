<template>
  <section class="container-fluid">

    <div class="col-md-2">

      <modules-nav @select="addModule"></modules-nav>

    </div>

    <div class="col-md-10">

      <ul class="nav nav-tabs">

        <li :class="{ active: active == null}" @click="openTab(null)">
          <a>
            <span class="glyphicon glyphicon glyphicon-th"> Modules</span>
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

      <article class="panel panel-tab-content">
        <component v-if="active" :is="active.module.router.component"></component>
        <modules-tiles v-else @select="addModule"></modules-tiles>
      </article>

    </div>

  </section>
</template>

<script>

import ModulesTiles from './ModulesTiles'

import ModulesNav from './ModulesNav'

export default {
  name: 'home',
  components: {
    ModulesTiles,
    ModulesNav
  },
  data: () => ({
    tabs: [],
    active: null,
    compteur: 0,
  }),
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

</style>
