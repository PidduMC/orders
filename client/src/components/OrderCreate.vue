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

export default {
  data () {
    return {
      valid: false,
      customer: {
        society_name: '',
        society_nameRules: [
          (v) => !!v || 'Inserire la ragione sociale',
          ((v) => v && v.length <= 100) || 'Non superare i 100 caratteri'
        ],
        mail: '',
        mailRules: [
          (v) => !!v || 'E-mail richiesta',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve essere valida'
        ],
        customer_code: '',
        customer_codeRules: [
          (v) => !!v || 'Inserire codice cliente',
          ((v) => v && v.length <= 8) || 'Non superare 8 caratteri'
        ],
        telephone: '',
        telephoneRules: [
          (v) => !!v || 'Inserire numero di telefono',
          ((v) => v && v.length <= 15) || 'Non superare 8 caratteri'
        ],
        iva_cf: '',
        iva_cfRules: [
          (v) => !!v || 'Inserire codice fiscale o partita iva',
          ((v) => v && v.length <= 11) || 'Non superare 11 caratteri'
        ],
        notes: '',
        notesRules: [
          ((v) => v.length <= 255) || 'Non superare 255 caratteri'
        ]
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
  }
}
</script>

<style>
</style>
