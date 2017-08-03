<template>
  <section id="tab-layout">

    <div class="col-md-2">
      <nav class="panel panel-default">
        <div class="panel-heading">
          Naviguer dans les modules
        </div>
        <div class="panel-body">
          <ul class="nav nav-pills nav-stacked">
            <li v-for="module in modules"><a>{{module.name}}</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="col-md-10">
      <div class="panel panel-default">
        <ul class="nav nav-tabs">
          <li v-for="open in opened" :class="{ active: active == open}" @click="openModule(open)">
            <a>
              {{open}}
              <span class="glyphicon glyphicon-remove" @click="remove(open)"></span>
            </a>
          </li>
        </ul>
        <div class="jumbotron">
          {{active}}
        </div>
      </div>
    </div>

  </section>
</template>

<script>

import Modules from '@/properties/modules'

export default {
  name: "tab-layout",
  data: () => ({
    opened: [
      'COU',
      'COUCOU',
      'COUCOUCOU'
    ],
    active: null
  }),
  computed: {
    modules() {
      return Modules
    }
  },
  methods: {
    openModule(module) {
      this.active = module
    }, remove(module) {
      this.opened.splice(this.opened.indexOf(module),1)
    }
  }
}
</script>

<style scoped>

</style>
