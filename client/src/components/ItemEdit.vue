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
                v-model="item.name"
                :rules="item.nameRules"
                :counter="100"
                required
              ></v-text-field>
              <v-text-field
                label="Descrizione"
                v-model="item.description"
                :rules="item.descriptionRules"
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
                      v-model="item.CategoryId"
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
import ItemService from '@/services/ItemService'
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      item: {
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
        .keys(this.item)
        .every(key => !!this.item[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Compilate i campi'
        return
      }
      try {
        await ItemService.modify(this.item)
        this.$router.push({
          name: 'itemdetail',
          params: {
            itemId: this.item._id
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'itemdetail',
          params: this.item._id
        })
      } catch (err) {
        this.error = err
      }
    }
  },

  async mounted () {
    try {
      this.categories = (await CategoryService.index()).data
      this.item = (await ItemService.show(this.$store.state.route.params.itemId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
