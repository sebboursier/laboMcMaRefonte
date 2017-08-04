<template>
  <section>

    <contextualizer :reseau.sync="reseau"></contextualizer>

    <section class="container-fluid">
      <article v-if="!reseau">
        <div class="alert alert-warning">
          Veuillez choisir un réseau.
        </div>


      </article>

      {{reseau}}
    </section>

  </section>
</template>

<script>

import Contextualizer from './Contextualizer'

export default {
  name: 'reseau-details',
  components: {
    Contextualizer
  },
  props: ['value'],
  data: () => ({
    reseau: null
  }),
  created() {
    let id = null
    if(this.$route.params.id) {
      id = this.$route.params.id
    } else if(this.value) {
      id = this.value.id
    }

    if(id) {
      // this.Axios({
      //   methods: 'get',
      //   url: 'http://10.33.135.68:8080/api/reseau/'+id,
      //   responseType: 'application/json'
      // }).then(response => {
      //   this.reseau = response._embeded.reseau
      // })
    }
  }
}
</script>

<style scoped>
</style>
