//Item Detail Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Dettagli Ordine</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-card>
            <v-card-media src="" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0">Ordine: {{order._id}}</h1>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-xs-left">
                <p>Cliente: {{order.Customer.society_name}}</p>
                <p>Prodotto: {{order.Item.name}}</p>
                <p>Creato il: {{createdAtFormatted}}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="orange--text" @click="modify">Modifica</v-btn>
              <v-btn flat class="orange--text" @click="remove">Elimina</v-btn>
            </v-card-actions>
          </v-card>
          </div>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import OrderService from '@/services/OrderService'
import DateFormatter from '@/services/DateFormatter'

export default {
  data () {
    return {
      order: {
        createdAt: '',
        Customer: {},
        Item: {}
      },
      createdAtFormatted: '',
      error: null
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        this.$router.push({
          name: 'orderdelete',
          params: this.$store.state.route.params.orderId
        })
      } catch (err) {
        this.error = this.route.response.data.error
      }
    },
    async modify () {
      try {
        this.$router.push({
          name: 'orderedit',
          params: this.$store.state.route.params.orderId
        })
      } catch (err) {
        this.error = this.router.response.data.error
      }
    }
  },
  async mounted () {
    try {
      this.order = (await OrderService.show(this.$store.state.route.params.orderId)).data
      this.createdAtFormatted = DateFormatter.formatDate(this.order.createdAt)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
