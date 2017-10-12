<template>
  <v-form v-model="valid" ref="form">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-subheader v-text="'Aggiungi Prodotto...'"></v-subheader>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            v-bind:items="cats"
            v-model="item.CategoryId"
            item-value="_id"
            item-text="name"
            label="Scegli la Categoria:"
            autocomplete>
          </v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
// import CategoryService from '@/services/CategoryService'

export default {
  props: [
    'cats'
  ],
  data () {
    return {
      valid: false,
      item: {
        CategoryId: null,
        ProductId: null,
        Category: {}
      },
      categories: []
    }
  },
  async mounted () {
    this.categories = this.props.cats
  }
}
</script>

<style>
</style>
