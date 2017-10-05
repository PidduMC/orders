//Category Delete Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Rimuovi Cliente</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <p>Sei sicuro di voler Rimuovere questa categoria?</p>
            <p>{{category.type}}</p>
            <v-btn @click="remove" :class="{ green: valid, red: !valid }">Rimuovi</v-btn>
            <v-btn @click="cancel">Annulla</v-btn>
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
      category: {}
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        await CategoryService.remove(this.category)
        this.$router.push({
          name: 'categories'
        })
      } catch (err) {
        this.error = this.route.response.data.error
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
