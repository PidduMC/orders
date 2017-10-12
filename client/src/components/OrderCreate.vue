//Order Create Component

<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Crea Nuovo Ordine</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-2">
          <orderform></orderform>
        </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import orderform from '@/components/OrderForm'

export default {
  data () {
    return {
    }
  },
  components: {
    orderform
  }
}
</script>

<style scoped>
</style>
