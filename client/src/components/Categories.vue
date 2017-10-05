// Component for Categories

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Categorie di Prodotti</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-data-table
            v-bind:headers="headers"
            :items="categories"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" scope="props">
            <td class="text-xs-left"><router-link :to="{ name: 'categorydetail', params: {categoryId: props.item._id }}">{{props.item.type}}</router-link></td>
              <td class="text-xs-left">{{ props.item.description }}</td>
          </template>
          </v-data-table>
          <v-btn class="cyan" @click="create">Nuova</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      headers: [
        { text: 'Categoria', value: 'type', align: 'left', sortable: true },
        { text: 'Descrizione', value: 'description', align: 'left' }
      ],
      categories: {}
    }
  },
  methods: {
    async create () {
      try {
        this.$router.push({
          name: 'categorycreate'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  async mounted () {
    this.categories = (await CategoryService.index()).data
  }
}
</script>

<style>
</style>
