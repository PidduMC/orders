<template>
  <v-form v-model="valid" ref="form">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-subheader v-text="'Aggiungi Prodotto...'"></v-subheader>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            v-bind:items="categories"
            v-model="item.CategoryId"
            item-value="_id"
            item-text="name"
            label="Scegli la Categoria:"
            autocomplete>
          </v-select>
          <v-select
            v-bind:items="products"
            v-model="item.ProductId"
            item-value="_id"
            item-text="name"
            label="Scegli il prodotto:"
            autocomplete>
          </v-select>
          <v-btn @click="additem">+</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import ProductService from '@/services/ProductService'

export default {
  props: [
    'categories',
    'prods'
  ],
  data () {
    return {
      valid: false,
      item: {
        CategoryId: null,
        ProductId: null,
        quantity: 0
      },
      products: []
    }
  },
  watch: {
    'item.CategoryId': {
      async handler (val) {
        this.item.ProductId = null
        this.products = (await ProductService.getByCategoryId(this.item.CategoryId)).data
      }
    }
  },
  methods: {
    additem: function () {
      var item = {
        CategoryId: this.item.CategoryId,
        ProductId: this.item.ProductId
      }
      if (item.CategoryId != null && item.ProductId != null) {
        this.$emit('additem', item)
        this.clear()
      }
    },
    clear: function () {
      this.item.CategoryId = null
      this.item.ProductId = null
    }
  }
}
</script>

<style>
</style>
