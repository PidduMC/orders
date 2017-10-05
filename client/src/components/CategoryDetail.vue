//Customer Detail Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Dettagli Categoria</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-card>
            <v-card-media src="" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0">{{category.type}}</h1>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-xs-left">
                <p>Descrizione  : {{category.description}}</p>
              </div>
              <div class="text-xs-left">
                <p>Note: {{category.notes}}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="orange--text" @click="modify">Modifica</v-btn>
              <v-btn flat class="orange--text" @click="remove">Elimina</v-btn>
            </v-card-actions>
          </v-card>
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
      category: {
        type: null,
        description: null,
        notes: null
      },
      error: null
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        this.$router.push({
          name: 'categorydelete',
          params: this.$store.state.route.params.categoryId
        })
      } catch (err) {
        this.error = this.route.response.data.error
      }
    },
    async modify () {
      try {
        this.$router.push({
          name: 'categoryedit',
          params: this.$store.state.route.params.categoryId
        })
      } catch (err) {
        this.error = this.router.response.data.error
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
