//ItemDelete Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Rimuovi Prodotto</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-3 pb-2">
            <p>Sei sicuro di voler Rimuovere questo prodotto?</p>
            <p>{{item.name}}</p>
            <v-btn @click="remove" :class="{ green: valid, red: !valid }">Rimuovi</v-btn>
            <v-btn @click="cancel">Annulla</v-btn>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemService from '@/services/ItemService'

export default {
  data () {
    return {
      valid: false,
      item: {}
    }
  },
  methods: {
    async remove () {
      try {
        this.error = ''
        await ItemService.remove(this.item)
        this.$router.push({
          name: 'items'
        })
      } catch (err) {
        this.error = this.route.response.data.error
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
      this.item = (await ItemService.show(this.$store.state.route.params.itemId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
