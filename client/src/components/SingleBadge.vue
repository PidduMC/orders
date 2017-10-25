<template>
  <v-card>
    <v-card-title>
      <span class="headline">Form S.Badge</span>
    </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Nome" v-model="badge.name"></v-text-field>
            <v-text-field label="Cognome" v-model="badge.surname"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Tipo"
              v-model="badge.type"
              autocomplete
              :items="types"
            ></v-select>
            </v-flex>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Codifica"
              v-model="badge.codec"
              autocomplete
              :items="codecs"
            ></v-select>
          </v-flex>
          </v-layout>
        </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    'index',
    'item'
  ],
  data () {
    return {
      codecs: ['Z13', 'K20', 'HEX', 'BM10'],
      types: ['rfid', 'mag', 'mi-fare', 'doppia tec.'],
      badge: {
        number: null,
        name: null,
        surname: null,
        blackwhite: null,
        frontback: null,
        type: null,
        codec: null
      }
    }
  },
  watch: {
    'badge': {
      handler: function (newVal, oldVal) {
        console.log('item changing...')
        this.$emit('itemchanged', this.badge, this.index)
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
