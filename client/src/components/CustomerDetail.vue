//Customer Detail Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Cliente</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-card>
            <v-card-media src="" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0">{{customer.society_name}}</h1>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-xs-left">
                <p>Telefono: {{customer.telephone}}</p>
              </div>
              <div class="text-xs-left">
                <p>IVA/CF: {{customer.iva_cf}}</p>
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
import CustomerService from '@/services/CustomerService'

export default {
  data () {
    return {
      customer: {
        society_name: null,
        telephone: null,
        iva_cf: null,
        customer_code: null,
        mail: null,
        notes: null
      },
      error: null
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        this.$router.push({
          name: 'customerdelete',
          params: this.$store.state.route.params.customerId
        })
      } catch (err) {
        this.error = this.route.response.data.error
      }
    },
    async modify () {
      try {
        this.$router.push({
          name: 'customeredit',
          params: this.$store.state.route.params.customerId
        })
      } catch (err) {
        this.error = this.router.response.data.error
      }
    }
  },
  async mounted () {
    try {
      this.customer = (await CustomerService.show(this.$store.state.route.params.customerId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
