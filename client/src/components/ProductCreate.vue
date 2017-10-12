//Product Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Nuovo Prodotto</v-toolbar-title>
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
              :counter="255"
              required
            ></v-text-field>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-subheader v-text="'Categoria'"></v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    v-bind:products="categories"
                    v-model="product.CategoryId"
                    product-value="_id"
                    product-text="type"
                    label="Scegli la Categoria"
                    autocomplete>
                  </v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <p>{{ error }}</p>
            <v-btn @click="create" :class="{ green: valid, red: !valid }">Crea</v-btn>
            <v-btn @click="clear">clear</v-btn>
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
          (v) => !!v || 'Inserire Nome Prodotto',
          ((v) => v && v.length <= 100) || 'Non superare i 100 caratteri'
        ],
        description: '',
        descriptionRules: [
          (v) => !!v || 'Descrizione breve',
          ((v) => v && v.length <= 255) || 'Non superare 150 caratteri'
        ],
        CategoryId: ''
      },
      categories: [],
      error: ''
    }
  },
  methods: {
    async create () {
      this.error = null
      try {
        await ProductService.create({
          name: this.product.name,
          description: this.product.description,
          CategoryId: this.product.CategoryId
        })
        this.$router.push({
          name: 'products'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear () {
      this.product.name = ''
      this.product.description = ''
      this.product.CategoryId = null
    }
  },
  async mounted () {
    this.categories = (await CategoryService.index()).data
  }
}
</script>

<style>
</style>
