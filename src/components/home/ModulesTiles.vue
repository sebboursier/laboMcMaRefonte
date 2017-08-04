<template>
  <section>

    <article class="panel panel-nav-submenu container-fluid">
          <div class="col-md-6">
            <div class="input-group">
              <label for="name" class="input-group-addon"><span class="glyphicon glyphicon-search"></span></label>
              <input id="name" type="text" class="form-control" placeholder="Nom ou description de module" v-model="name">
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group">
              <label for="tags" class="input-group-addon"><span class="glyphicon glyphicon-tag"></span></label>
              <input id="tags" ref="tags" type="text" class="form-control" placeholder="Tags">
            </div>
          </div>
    </article>

    <article class="container-fluid">
      <div v-for="module in modules" class="col-md-4">
        <article class="panel panel-primary">
          <div class="panel-heading">
            {{module.name}}
            <span class="right">
              <button type="button" class="btn btn-success btn-xs" @click="addTab(module)"><span class="glyphicon glyphicon-plus"></span></button>
              <button type="button" class="btn btn-info btn-xs" @click="navigate(module)"><span class="glyphicon glyphicon-new-window"></span></button>
            </span>
          </div>
          <div class="panel-body">
            {{module.description}}
          </div>
          <ul class="list-group">
            <li class="list-group-item" v-if="module.tags">
              <div>
                <strong>Tags</strong>
              </div>
              <span v-for="tag in module.tags" class="label label-default">{{tag}}</span>
            </li>
            <li class="list-group-item">
              <div>
                <strong>Categories</strong>
              </div>
              <template v-for="(subCategories, categorie) in module.categories">
                <span v-for="subCategorie in subCategories" :class="getClass(categorie)">{{subCategorie}}</span>
              </template>
            </li>
          </ul>
        </article>
      </div>
    </article>


  </section>
</template>

<script>

import Modules from '@/properties/modules'

import ModulesTypes from '@/properties/modulesTypes'

import Router from '@/router'

export default {
  name: 'modules-tiles',
  data () {
    return {
      modulesTypes: ModulesTypes,
      name: '',
      tags: []
    }
  },
  methods: {
    navigate(module) {
      window.open('#'+module.router.path,'_blank')
    },
    addTab(module) {
      this.$emit('select',module)
    },
    getClass(categorie) {
      let klass = 'label label-'
      switch (categorie) {
        case 'metier':
          klass += 'success'
          break;
        case 'entryPoint':
          klass += 'warning'
          break;
        default:
          klass += 'default'
      }
      return klass
    },
    getTags() {
      this.tags = $(this.$refs.tags).tokenfield('getTokensList').split(',')
    }
  },
  computed: {
    modules() {
      var modules = []
      Modules.forEach(module => {
        if(module.name.includes(this.name) || module.description.includes(this.name)) {
          modules.push(module)
        }
      })
      return modules
    }
  },
  mounted() {
    $(this.$refs.tags).tokenfield()
    $(this.$refs.tags).on('tokenfield:createtoken tokenfield:createdtoken tokenfield:edittoken tokenfield:editedtoken tokenfield:removetoken tokenfield:removedtoken',this.getTags)
  }
}
</script>

<style scoped>
.label {
  margin-right: 5px;
}
</style>
