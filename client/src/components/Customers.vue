<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Clienti</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-data-table
            v-bind:headers="headers"
            :items="customers"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" scope="props">
            <td class="text-xs-left">{{props.item.customer_code}}</td>
            <td class="text-xs-left"><router-link :to="{ name: 'customerdetail', params: {customerId: props.item._id }}">{{props.item.society_name}}</router-link></td>
            <td class="text-xs-left">{{ props.item.telephone }}</td>
            <td class="text-xs-left">{{ props.item.iva_cf }}</td>
          </template>
        </v-data-table>
        <v-btn class="cyan" @click="create">Nuovo</v-btn>
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
      headers: [
        { text: 'Codice Cliente', value: 'customer_code', align: 'left' },
        {
          text: 'Cliente',
          align: 'left',
          sortable: true,
          value: 'society_name'
        },
        { text: 'Telefono', value: 'telephone', align: 'left' },
        { text: 'Iva/CF', value: 'iva_cf', align: 'left' }
      ],
      customers: []
    }
  },
  async mounted () {
    this.customers = (await CustomerService.index()).data
  },
  methods: {
    async create () {
      try {
        this.$router.push({
          name: 'customercreate'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
