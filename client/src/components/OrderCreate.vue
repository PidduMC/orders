//Customer Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Crea Nuovo Ordine</v-toolbar-title>
        </v-toolbar>
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
            <v-btn @click="create" :class="{ green: valid, red: !valid }">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import CustomerService from '@/services/CustomerService'
// import OrderService from '@/services/OrderService'
import CategoryService from '@/services/CategoryService'
import ItemService from '@/services/ItemService'

export default {
  data () {
    return {
      valid: false,
      customers: {},
      items: {},
      categories: {},
      customer: {
        _id: null,
        society_name: null,
        mail: null,
        customer_code: null,
        telephone: null,
        iva_cf: null,
        notes: null
      },
      order: {
        customer_id: null,
        category_id: null,
        item_id: null,
        quantity: null,
        delivery_date: null,
        delivery_type: null,
        date: null,
        status: null
      },
      error: ''
    }
  },
  methods: {
    async create () {
      this.error = null
      try {
        console.log('customer create...')
        await CustomerService.create({
          society_name: this.customer.society_name,
          customer_code: this.customer.customer_code,
          telephone: this.customer.telephone,
          iva_cf: this.customer.iva_cf,
          mail: this.customer.mail,
          notes: this.customer.notes
        })
        this.$router.push({
          name: 'customers'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear () {
      this.society_name = ''
      this.customer_code = ''
      this.telephone = ''
      this.iva_cf = ''
      this.mail = ''
      this.notes = ''
    }
  },
  async mounted () {
    this.customers = await CustomerService.index()
    this.items = await ItemService.index()
    this.categories = await CategoryService.index()
  }
}
</script>

<style>
</style>
