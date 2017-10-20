<template>
  <v-card>
    <v-card-title>
      <span class="headline">Form S.Badge</span>
    </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Nome"></v-text-field>
            <v-text-field label="Cognome"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Tipo"
              autocomplete
              :items="badge.type"
            ></v-select>
            </v-flex>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Codifica"
              autocomplete
              :items="badge.codex"
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
      badge: {
        number: null,
        name: null,
        surname: null,
        blackwhite: null,
        frontback: null,
        type: ['rfid', 'mag', 'mi-fare', 'doppia tec.'],
        codex: ['Z13', 'K20', 'HEX', 'BM10']

      }
    }
  },
  watch: {
    'badge': {
      async handler (val) {
        console.log('item changing...')
        this.$emit('itemchanged', this.badge, this.index)
      }
    }
  }
}
</script>

<style>
</style>
