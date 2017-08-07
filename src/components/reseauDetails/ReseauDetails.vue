<template>
  <section>

    <contextualizer entryPoint="reseau" @contextualize="contextualize"></contextualizer>

    <section class="container-fluid">
      <article v-if="error">
        <div class="alert alert-danger">
          {{error}}
        </div>
      </article>
      <article v-if="!reseau">
        <div class="alert alert-warning">
          Veuillez choisir un réseau.
        </div>
      </article>
      <article v-else>
        {{reseau}}
      </article>
    </section>

  </section>
</template>

<script>

import Contextualizer from '@/common/contextualizer/Contextualizer'

import axios from 'axios'

export default {
  name: 'reseau-details',
  props: ['id'],
  components: {
    Contextualizer
  },

  data: () => ({
    reseau: null,
    error: null
  }),

  computed: {
    standAlone() {
      return this.$route.params.id != null
    }
  },

  created() {
    if(this.id && this.id !== ':id') {
      axios({
        method: 'get',
        url: 'http://localhost:8888/api/reseaus/'+this.id,
        headers: {
          User: 'test',
          Token: 'test'
        },
      }).then(response => {
        this.reseau = response.data
      }).catch(error => {
        this.error = error
      })
    }
  },

  methods: {
    contextualize(reseau) {
      if(this.standAlone) {
        this.$router.push({ name: this.name, params: { id: reseau.idreseau }})
      } else {
        this.$emit('contextualize', {id: reseau.idreseau})
      }
      this.reseau = reseau
    }
  }
}
</script>

<style scoped>
</style>
