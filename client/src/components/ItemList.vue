<template>
  <v-layout row>
  <v-flex md12 lg8 >
    <v-card class="grid">
      <v-toolbar class="cyan" dark flat>
        <v-toolbar-title class="white--text text--darken-4">Items</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex xs4 v-for="(item, index) in itemlist">
            <img class="itemicon"
                 v-bind:src="`https://www.shareicon.net/data/128x128/2015/09/23/106280_filter_512x512.png`"
                 @click="itemclicked(index)">
            </img>
          </v-flex>
          <customcomponentdialog v-bind:ccname="ccname" v-bind:index="index" v-bind:item="itemlist[index]" v-bind:show="dialog" @closeDialog='closeDialog' ></customcomponentdialog>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
// import CustomComponentService from '@/services/CustomComponentService'
import customcomponentdialog from '@/components/CustomComponentDialog'

export default {
  props: [
    'itemlist'
  ],
  computed: {
    items: function () {
      return this.itemlist
    }
  },
  data () {
    return {
      item: null,
      index: null,
      ccname: null,
      dialog: false
    }
  },
  components: {
    customcomponentdialog
  },
  methods: {
    async itemclicked (index) {
      console.log('dialog state' + this.dialog)
      this.item = this.items[index]
      this.index = index
      this.dialog = true
      console.log('from click ' + this.dialog + ' ' + this.item + ' ' + this.index)
      // this.$emit('itemclicked', this.index, this.ccname, this.item)
    },
    closeDialog (jsonitem, index) {
      this.dialog = false
      this.$emit('closedItemDialog', jsonitem, index)
    }
  }
}
</script>

<style scoped>

</style>
