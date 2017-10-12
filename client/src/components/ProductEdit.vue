//ItemEdit Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Modifica Prodotto</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <v-form v-model="valid" ref="form">
              <v-text-field
                label="Nome Prodotto"
                v-model="product.name"
                :rules="product.nameRules"
                :counter="100"
                required
              ></v-text-field>
              <v-text-field
                label="Descrizione"
                v-model="product.description"
                :rules="product.descriptionRules"
                :counter="150"
                required
              ></v-text-field>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-subheader v-text="'Categoria'"></v-subheader>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      v-bind:items="categories"
                      v-model="product.CategoryId"
                      item-value="_id"
                      item-text="name"
                      label="Scegli la Categoria"
                      autocomplete>
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <p>{{error}}</p>
              <v-btn @click="modify" :class="{ green: valid, red: !valid }">Modifica</v-btn>
              <v-btn @click="cancel">Annulla</v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ProductService from '@/services/ProductService'
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      product: {
        name: '',
        nameRules: [
          ((v) => v.length <= 150) || 'Non superare 100 caratteri'
        ],
        description: '',
        descriptionRules: [
          ((v) => v.length <= 255) || 'Non superare 255 caratteri'
        ],
        CategoryId: null,
        Category: {}
      },
      categories: [],
      error: null
    }
  },
  methods: {
    async modify () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.product)
        .every(key => !!this.product[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Compilate i campi'
        return
      }
      try {
        await ProductService.modify(this.product)
        this.$router.push({
          name: 'productdetail',
          params: {
            itemId: this.product._id
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'productdetail',
          params: this.product._id
        })
      } catch (err) {
        this.error = err
      }
    }
  },

  async mounted () {
    try {
      this.categories = (await CategoryService.index()).data
      this.product = (await ProductService.show(this.$store.state.route.params.productId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
