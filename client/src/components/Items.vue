//Items Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Prodotti</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <v-data-table
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" scope="props">
            <td class="text-xs-left"><router-link :to="{ name: 'itemdetail', params: {itemId: props.item._id }}">{{props.item.name}}</router-link></td>
          </template>
        </v-data-table>
        <v-btn class="cyan" @click="create">Nuovo</v-btn>
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
      headers: [
        { text: 'Item', value: 'name', align: 'left' }
      ],
      items: []
    }
  },
  async mounted () {
    this.items = (await ItemService.index()).data
  },
  methods: {
    async create () {
      try {
        this.$router.push({
          name: 'itemcreate'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }

  .toolbar__title {
    color: white
  }

</style>
