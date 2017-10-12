//Items Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Prodotti</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-data-table
            v-bind:headers="headers"
            :items="products"
            hide-actions
            class="elevation-1">
          <template slot="items" scope="props">
            <td class="text-xs-left"><router-link :to="{ name: 'productdetail', params: {productId: props.item._id }}">{{props.item.name}}</router-link></td>
            <td class="text-xs-left"><router-link :to="{ name: 'categorydetail', params: {categoryId: props.item.CategoryId}}">{{props.item.Category.name}}</router-link></td>
          </template>
        </v-data-table>
        <v-btn class="cyan" @click="create">Nuovo</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import ProductService from '@/services/ProductService'
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      headers: [
        { text: 'Prodotto', value: 'name', align: 'left' },
        { text: 'Categoria', value: 'CategoryId', align: 'left' }
      ],
      products: [],
      categories: []
    }
  },

  methods: {
    async create () {
      try {
        this.$router.push({
          name: 'productcreate'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },

  async mounted () {
    this.products = (await ProductService.index()).data
    this.categories = (await CategoryService.index()).data
  }
}
</script>

<style scoped>
  .error {
    color: red
  }

  .toolbar__title {
    color: white
  }

</style>
