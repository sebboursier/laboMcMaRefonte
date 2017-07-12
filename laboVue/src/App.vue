<template>
  <div>

    <header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <router-link to="/home" class="navbar-brand">Labo VueJs</router-link>
        </div>

        <ul class="nav navbar-nav">
          <router-link to="/modules" active-class="active" tag="li">
            <a>Modules</a>
          </router-link>
          <router-link to="/list" active-class="active" tag="li">
            <a>List</a>
          </router-link>
          <router-link to="/Stat" active-class="active" tag="li">
            <a>Stat</a>
          </router-link>
        </ul>

        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" placeholder="Rechercher un module" class="form-control">
          </div>
        </form>

      </div>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app'
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
