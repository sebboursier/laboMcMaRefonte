<template>
  <div>

    <ul>
      <li><router-link to="/">Labo VueJs</router-link></li>
      <li><router-link to="/list">List</router-link></li>
      <li><router-link to="/Stat">Stat</router-link></li>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

</style>
