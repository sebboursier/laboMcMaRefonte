<template>
  <section class="panel panel-nav-submenu  container-fluid">

    <div class="input-group col-md-4">
      <label for="reseau" class="input-group-addon">Reseau</label>
      <input id="reseau" type="text" class="form-control" placeholder="Nom du reseau" v-model="choix">
    </div>

  </section>
</template>

<script>
export default {
  name: 'contextualizer',
  data: () => ({
    choix: ''
  }),
  methods: {
    choix() {
      this.value = this.choix
    }
  }
}
</script>

<style scoped>

</style>
