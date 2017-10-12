//OrderEdit Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Modifica Ordine</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
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
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-subheader v-text="'Categoria'"></v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    v-bind:items="categories"
                    v-model="category"
                    item-value="_id"
                    item-text="type"
                    label="Scegli la Categoria"
                    autocomplete>
                  </v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-subheader v-text="'Prodotto'"></v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    v-bind:items="items"
                    v-model="order.ItemId"
                    item-value="_id"
                    item-text="name"
                    label="Scegli il prodotto"
                    autocomplete>
                  </v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <v-layout row wrap>
              <p>Data Consegna</p>
              <v-flex md12 lg8 class="hidden-xs-only">
                <v-date-picker v-model="order.delivery_date" landscape dark locale="it-IT"></v-date-picker>
              </v-flex>
            </v-layout>
            <v-container fluid>
              <v-layout row wrap>
                <v-subheader v-text="'Consegna: '"></v-subheader>
                <v-radio-group v-model="order.delivery_type" row>
                  <v-flex xs12>
                    <v-radio label= "Corriere Cliente" value="CorriereCliente"></v-radio>
                    <v-radio label= "Spedizione" value="Spedizione"></v-radio>
                    <v-radio label= "Rimessa Diretta" value="RD"></v-radio>
                  </v-flex>
                </v-radio-group>
              </v-layout>
            </v-container>
            <p>{{error}}</p>
            <v-btn @click="modify" :class="{ green: valid, red: !valid }">submit</v-btn>
            <v-btn @click="cancel">Annulla</v-btn>
          </v-form>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import OrderService from '@/services/OrderService'
import ItemService from '@/services/ItemService'
import CustomerService from '@/services/CustomerService'
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      order: {
        CustomerId: null,
        ItemId: null,
        delivery_type: null,
        delivery_date: null,
        status: '',
        Customer: {},
        Item: {}
      },
      customers: [],
      items: [],
      categories: [],
      category: {},
      error: null
    }
  },
  watch: {
    // whenever selectedCategoryId changes, this function will run
    category: function (onCategoryChange) {
      console.log('selectedCategoryId changed')
      if (this.category !== null && this.category !== '') {
        console.log('selectedCategoryId changed 2')
        this.getItemsByCategoryId()
      }
    }
  },
  methods: {
    async modify () {
      this.error = null
      try {
        await OrderService.modify(this.order)
        this.$router.push({
          name: 'orderdetail',
          params: {
            itemId: this.order._id
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'orderdetail',
          params: this.order._id
        })
      } catch (err) {
        this.error = err
      }
    },
    async getItemsByCategoryId () {
      this.error = null
      try {
        this.items = (await ItemService.getByCategoryId(this.category._id)).data
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },

  async mounted () {
    try {
      this.categories = (await CategoryService.index()).data
      this.customers = (await CustomerService.index()).data
      this.items = (await ItemService.index()).data
      this.order = (await OrderService.show(this.$store.state.route.params.orderId)).data
      this.category = this.order.Item.CategoryId
      // this.selectedCategoryId = this.order.Item.CategoryId
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
