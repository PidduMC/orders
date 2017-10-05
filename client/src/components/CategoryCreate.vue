//category Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Nuova Categoria Prodotti</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-form v-model="valid" ref="form">
            <v-text-field
              label="Tipo di Prodotto"
              v-model="category.type"
              :rules="category.typeRules"
              :counter="100"
              required
            ></v-text-field>
            <v-text-field
              label="Descrizione"
              v-model="category.description"
              :rules="category.descriptionRules"
              :counter="8"
              required
            ></v-text-field>
            <v-text-field
              label="Note"
              v-model="category.iva_cf"
              :rules="category.iva_cfRules"
              :counter="11"
              required
            ></v-text-field>
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
import categoryService from '@/services/CategoryService'

export default {
  data () {
    return {
      valid: false,
      category: {
        type: '',
        typeRules: [
          (v) => !!v || 'Inserire Tipo di prodotto',
          ((v) => v && v.length <= 100) || 'Non superare i 100 caratteri'
        ],
        description: '',
        descriptionRules: [
          (v) => !!v || 'Descrizione breve',
          ((v) => v && v.length <= 8) || 'Non superare 150 caratteri'
        ],
        notes: '',
        notesRules: [
          ((v) => v.length <= 255) || 'Non superare 255 caratteri'
        ]
      },
      error: ''
    }
  },
  methods: {
    async create () {
      this.error = null
      try {
        await categoryService.create({
          type: this.category.type,
          description: this.category.description,
          notes: this.category.notes
        })
        this.$router.push({
          name: 'categories'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear () {
      this.type = ''
      this.description = ''
      this.notes = ''
    }
  }
}
</script>

<style>
</style>
