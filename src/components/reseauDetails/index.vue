<template>
  <section>

    <contextualizer entryPoint="reseau" :entryPointValue="reseau" @contextualize="contextualize"></contextualizer>

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
      {{standAlone}}
    </section>

  </section>
</template>

<script>

import Contextualizer from '@/layout/contextualizer/Contextualizer'

import axios from 'axios'

export default {
  name: 'reseau-details',
  props: ['context', 'id'],
  components: {
    Contextualizer
  },

  data: () => ({
    reseau: null,
    error: null
  }),

  computed: {
    standAlone() {
      return this.context == null
    }
  },

  created() {
    let id = null
    if(this.context && this.context.id) {
      id = this.context.id
    } else if(this.id && this.id !== ':id') {
      id = this.id
    }

    if(id) {
      axios({
        method: 'get',
        url: 'http://localhost:8888/api/reseaus/'+id,
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
