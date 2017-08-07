<template>
  <section class="input-group dropdown">
    <label :for="name" class="input-group-addon">{{name}}</label>
    <input v-model="value" type="text" class="form-control dropdown-toggle" data-toggle="dropdown">
    <ul class="dropdown-menu" v-if="matches.length != 0">
      <li v-for="match in matches">
        <a @click="select(match)">
          <slot :match="match">
            {{match[selector]}}
          </slot>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  name: 'autocomplete',
  props: ['name', 'bean', 'search', 'selector'],
  data: () => ({
    value: '',
    matches: []
  }),
  watch: {
    value() {
      if(this.value.length >= 3) {
        axios({
          method: 'get',
          url: 'http://localhost:8888/api/'+this.bean+'/search/'+this.search+'?'+this.selector+'='+this.value,
          headers: {
            User: 'test',
            Token: 'test'
          },
        }).then(response => {
          this.matches = response.data._embedded[this.bean]
        }).catch(error => {
          console.log("KO")
          console.log(error)
        })
      }
    }
  },
  methods: {
    select(match) {
      this.value = match[this.selector]
      this.$emit('select',match)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
}
</style>
