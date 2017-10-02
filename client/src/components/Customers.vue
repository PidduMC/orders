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
            <td class="text-xs-left">{{ props.item.society_name }}</td>
            <td class="text-xs-right">{{ props.item.telephone }}</td>
            <td class="text-xs-right">{{ props.item.iva_cf }}</td>
          </template>
        </v-data-table>
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
        {
          text: 'Cliente',
          align: 'center',
          sortable: true,
          value: 'society_name'
        },
        { text: 'Telefono', value: 'telephone' },
        { text: 'Iva/CF', value: 'iva_cf' }
      ],
      customers: []
    }
  },
  async mounted () {
    this.customers = (await CustomerService.index()).data
  },
  methods: {
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
