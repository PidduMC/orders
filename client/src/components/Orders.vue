<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Ordini</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-data-table
            v-bind:headers="headers"
            :items="orders"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" scope="props">
            <td class="text-xs-left">{{props.item.data}}</td>
            <td class="text-xs-left"><router-link :to="{ name: 'orderdetail', params: {orderId: props.item._id }}">{{props.item._id}}</router-link></td>
            <td class="text-xs-left">{{ props.item.customer_id }}</td>
            <td class="text-xs-left">{{ props.item.item_id }}</td>
          </template>
        </v-data-table>
        <v-btn class="cyan" @click="create">Nuovo</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import orderService from '@/services/orderService'

export default {
  data () {
    return {
      headers: [
        { text: 'Data', value: 'date', align: 'left' },
        { text: 'ID', value: '_id', align: 'left' },
        {
          text: 'Cliente',
          align: 'left',
          sortable: true,
          value: 'customer_id'
        },
        { text: 'Item', value: 'item_id', align: 'left' }
      ],
      orders: []
    }
  },
  async mounted () {
    this.orders = (await orderService.index()).data
  },
  methods: {
    async create () {
      try {
        this.$router.push({
          name: 'ordercreate'
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
