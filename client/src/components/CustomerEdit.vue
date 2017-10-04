//Customer Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Modifica Cliente</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <div class="pl-4 pr-4 pt-3 pb-2">
              <v-form v-model="valid" ref="form">
                <v-text-field
                  label="Ragione Sociale"
                  v-model="customer.society_name"
                  :rules="customer.society_nameRules"
                  :counter="100"
                  required
                ></v-text-field>
                <v-text-field
                  label="Codice Cliente"
                  v-model="customer.customer_code"
                  :rules="customer.customer_codeRules"
                  :counter="8"
                  required
                ></v-text-field>
                <v-text-field
                  label="IVA/CF"
                  v-model="customer.iva_cf"
                  :rules="customer.iva_cfRules"
                  :counter="11"
                  required
                ></v-text-field>
                <v-text-field
                  label="Telefono"
                  v-model="customer.telephone"
                  :rules="customer.telephoneRules"
                  :counter="15"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-Mail"
                  v-model="customer.mail"
                  :rules="customer.mailRules"
                  :counter="100"
                  required
                ></v-text-field>
                <v-text-field
                  label="Notes"
                  v-model="customer.notes"
                  :rules="customer.notesRules"
                  :counter="255"
                ></v-text-field>
                <v-btn @click="modify" :class="{ green: valid, red: !valid }">Modifica</v-btn>
                <v-btn @click="cancel">Annulla</v-btn>
              </v-form>
              </div>
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
      customer: {
        society_name: null,
        customer_code: null,
        telephone: null,
        notes: null,
        mail: null,
        iva_cf: null
      },
      error: null
    }
  },
  methods: {
    async modify () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.customer)
        .every(key => !!this.customer[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Compilate i campi'
        return
      }
      const customerId = this.$store.state.route.params.customerId
      try {
        await CustomerService.modify(this.customer)
        this.$router.push({
          name: 'customerdetail',
          params: {
            customerId: customerId
          }
        })
      } catch (err) {
        console.log(err)
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
