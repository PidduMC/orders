//Item Create Component

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
              v-model="item.name"
              :rules="item.nameRules"
              :counter="100"
              required
            ></v-text-field>
            <v-text-field
              label="Descrizione"
              v-model="item.description"
              :rules="item.descriptionRules"
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
                    v-bind:items="categories"
                    v-model="item.category_id"
                    item-value="_id"
                    item-text="type"
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
import ItemService from '@/services/ItemService'
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      item: {
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
        category_id: ''
      },
      categories: {
        type: '',
        _id: ''
      },
      error: ''
    }
  },
  methods: {
    async create () {
      this.error = null
      try {
        await ItemService.create({
          name: this.item.name,
          description: this.item.description,
          category_id: this.item.category_id
        })
        this.$router.push({
          name: 'items'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear () {
      this.name = ''
      this.description = ''
      this.category_id = ''
    }
  },
  async mounted () {
    this.categories = (await CategoryService.index()).data
  }
}
</script>

<style>
</style>
