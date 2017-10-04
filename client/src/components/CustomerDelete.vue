//Customer Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Rimuovi Cliente</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <p>Sei sicuro di voler Rimuovere questo cliente:</p>
            <p>{{customer.society_name}}</p>
            <v-btn @click="remove" :class="{ green: valid, red: !valid }">Rimuovi</v-btn>
            <v-btn @click="cancel">Annulla</v-btn>
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
      valid: false,
      customer: {}
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        const {customerId} = this.$store.state.route.params
        await CustomerService.remove(customerId)
        this.$router.push({
          name: 'customers'
        })
      } catch (err) {
        this.error = this.route.response.data.error
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'customerdetail',
          params: this.customer._id
        })
      } catch (err) {
        this.error = err
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
