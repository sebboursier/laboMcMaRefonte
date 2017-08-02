<template>
  <section id="tab-layout">

    <div class="col-md-2">
      <nav class="panel panel-default">
        <div class="panel-heading">
          Naviguer dans les modules
        </div>
        <div class="panel-body">

        </div>
      </nav>
    </div>

    <div class="col-md-10">
      <ul class="nav nav-tabs">
        <li v-for="open in opened" :class="{ active: active == open}" @click="openModule(open)">
          <a>
            {{open}}
            <span class="glyphicon glyphicon-remove" @click="remove(open)"></span>
          </a>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>

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
