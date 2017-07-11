<template>
  <section class="container-fluid">
    {{title}}
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'HOME'
    }
  },
  beforeCreate() {
    console.log(localStorage);
  }
}
</script>

<style scoped>

</style>
