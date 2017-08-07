<template>
  <section>

    <contextualizer entryPoint="implantation" @contextualize="contextualize"></contextualizer>

    <section class="container-fluid">
      <article v-if="error">
        <div class="alert alert-danger">
          {{error}}
        </div>
      </article>
      <article v-if="!implantation">
        <div class="alert alert-warning">
          Veuillez choisir une Implantation.
        </div>
      </article>
      <article v-else>
        {{implantation}}
      </article>
    </section>

  </section>
</template>

<script>

import Contextualizer from '@/common/contextualizer/Contextualizer'

import axios from 'axios'

export default {
  name: 'implantation-details',
  props: ['id'],
  components: {
    Contextualizer
  },

  data: () => ({
    implantation: null,
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
        url: 'http://localhost:8888/api/implantations/'+this.id,
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
    contextualize(implantation) {
      if(this.standAlone) {
        this.$router.push({ name: this.name, params: { id: implantation.idimplantation }})
      } else {
        this.$emit('contextualize', {id: implantation.idimplantation})
      }
      this.implantation = implantation
    }
  }
}
</script>

<style scoped>
</style>
