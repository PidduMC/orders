//ProductDelete Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Rimuovi Prodotto</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <p>Sei sicuro di voler Rimuovere questo prodotto?</p>
            <p>{{product.name}}</p>
            <v-btn @click="remove" :class="{ green: valid, red: !valid }">Rimuovi</v-btn>
            <v-btn @click="cancel">Annulla</v-btn>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ProductService from '@/services/ProductService'

export default {
  data () {
    return {
      valid: false,
      product: {}
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        await ProductService.remove(this.product)
        this.$router.push({
          name: 'products'
        })
      } catch (err) {
        this.error = this.route.response.data.error
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'productdetail',
          params: this.product._id
        })
      } catch (err) {
        this.error = err
      }
    }
  },
  async mounted () {
    try {
      this.product = (await ProductService.show(this.$store.state.route.params.productId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
