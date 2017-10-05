//Customer Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Modifica Categoria</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <v-form v-model="valid" ref="form">
              <v-text-field
                label="Tipo Di Prodotto"
                v-model="category.type"
                :rules="category.typeRules"
                :counter="100"
                required
              ></v-text-field>
              <v-text-field
                label="Descrizione"
                v-model="category.description"
                :rules="category.descriptionRules"
                :counter="150"
                required
              ></v-text-field>
              <v-text-field
                label="Note"
                v-model="category.notes"
                :rules="category.notesRules"
                :counter="11"
                required
              ></v-text-field>
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
import CategoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      category: {
        type: null,
        description: null,
        descriptionRules: [
          ((v) => v.length <= 150) || 'Non superare 255 caratteri'
        ],
        notes: null,
        notesRules: [
          ((v) => v.length <= 255) || 'Non superare 255 caratteri'
        ]
      },
      error: null
    }
  },
  methods: {
    async modify () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.category)
        .every(key => !!this.category[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Compilate i campi'
        return
      }
      try {
        await CategoryService.modify(this.category)
        this.$router.push({
          name: 'categorydetail',
          params: {
            categoryId: this.category._id
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async cancel () {
      try {
        this.$router.push({
          name: 'categorydetail',
          params: this.category._id
        })
      } catch (err) {
        this.error = err
      }
    }
  },

  async mounted () {
    try {
      this.category = (await CategoryService.show(this.$store.state.route.params.categoryId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
