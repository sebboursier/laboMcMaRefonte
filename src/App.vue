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
        </ul>

        <ul class="nav navbar-nav">
          <router-link to="/grid" active-class="active" tag="li">
            <a>Grid</a>
          </router-link>
          <router-link to="/chart" active-class="active" tag="li">
            <a>Chart</a>
          </router-link>
          <router-link to="/pivot" active-class="active" tag="li">
            <a>Pivot</a>
          </router-link>
          <router-link to="/calendar" active-class="active" tag="li">
            <a>Calendar</a>
          </router-link>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Graph <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <router-link to="/graph" active-class="active" tag="li">
                <a>Graph D3</a>
              </router-link>
              <router-link to="/graphcustom" active-class="active" tag="li">
                <a>Graph Custom</a>
              </router-link>
            </ul>
          </li>
        </ul>

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
