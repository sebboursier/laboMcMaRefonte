<template>
  <div>

    <header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <router-link to="/home" class="navbar-brand">Labo VueJs</router-link>
        </div>

      </div>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>
.navbar {
  border-radius: 0;
}

.content {
  padding-top: 70px;
}
</style>