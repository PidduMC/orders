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
              <v-text-field
                label="Categoria"
                v-model="item.category_id"
                :rules="item.category_idRules"
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
import ItemService from '@/services/ItemService'

export default {
  data () {
    return {
      valid: false,
      item: {
        name: null,
        descriptio: null,
        descriptionRules: [
          ((v) => v.length <= 150) || 'Non superare 255 caratteri'
        ],
        category_id: null,
        category_idRules: [
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
      this.item = (await ItemService.show(this.$store.state.route.params.itemId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
