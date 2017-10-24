<template>
  <v-form v-model="valid" ref="form">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-subheader v-text="'Cliente'"></v-subheader>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            v-bind:items="customers"
            v-model="order.CustomerId"
            item-value="_id"
            item-text="society_name"
            label="Scegli Il Cliente"
            autocomplete>
          </v-select>
        </v-flex>
      </v-layout>
    </v-container>
    <productselectform v-bind:categories="categories" @additem="addItemToitemlist"></productselectform>
    <itemlist v-bind:itemlist="itemlist" @closedItemDialog="saveItemIntoArray"></itemlist>
    <v-layout row wrap>
      <v-flex md12 lg8 class="hidden-xs-only">
        <v-date-picker v-model="order.date" landscape dark locale="it-IT"></v-date-picker>
      </v-flex>
    </v-layout>
    <v-container fluid>
      <v-layout row wrap>
        <v-subheader v-text="'Consegna: '"></v-subheader>
        <v-radio-group v-model="order.delivert_type" row>
          <v-flex xs12>
            <v-radio label= "Corriere Cliente" value="CorriereCliente"></v-radio>
            <v-radio label= "Spedizione" value="Spedizione"></v-radio>
            <v-radio label= "Rimessa Diretta" value="RD"></v-radio>
          </v-flex>
        </v-radio-group>
      </v-layout>
    </v-container>
    <p>{{error}}</p>
  </v-form>
</template>

<script>
import CustomerService from '@/services/CustomerService'
import CategoryService from '@/services/CategoryService'
// import ItemService from '@/services/ItemService'
import productselectform from '@/components/ProductSelectForm'
import itemlist from '@/components/ItemList'

export default {
  data () {
    return {
      valid: false,
      customers: [],
      itemlist: [],
      categories: [],
      order: {
        _id: null,
        CustomerId: null,
        ItemId: null,
        quantity: 0,
        delivery_date: null,
        delivery_type: null,
        date: null,
        status: null
      },
      selectedCategoryId: null,
      error: ''
    }
  },
  components: {
    productselectform,
    itemlist
  },
  methods: {
    async addItemToitemlist (item) {
      this.itemlist.push(item)
    },
    saveItemIntoArray (jsonitem, index) {
      // this.itemlist[index].metadata = jsonitem
      console.log(this.itemlist)
    }
  },
  async mounted () {
    try {
      this.customers = (await CustomerService.index()).data
      // this.itemslist = (await ItemService.index()).data
      this.categories = (await CategoryService.index()).data
    } catch (err) {
      this.error = err
    }
  }
}
</script>

<style>
</style>
