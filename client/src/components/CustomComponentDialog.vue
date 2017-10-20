<template>
  <v-dialog v-model="displayed" persistent>
    <v-card>
      <component :is="compname" v-bind:index='index' v-bind:item='item'></component>
      <v-btn class="cyan" @click="closeDialog">Chiudi</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomComponentService from '@/services/CustomComponentService'
import LoadingComp from '@/components/LoadingComponent'
import ErrorComp from '@/components/ErrorComponent'

export default {
  props: [
    'ccname',
    'index',
    'item',
    'show'
  ],
  data () {
    return {
      displayed: false,
      compname: 'LoadingComp'
    }
  },
  components: {
    LoadingComp,
    SingleBadge: () => ({
      // The component to load. Should be a Promise
      component: import('@/components/SingleBadge'),
      // A component to use while the async component is loading
      loading: LoadingComp,
      // A component to use if the load fails
      error: ErrorComp,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3000
    })
  },
  watch: {
    'show': function (val) {
      this.displayed = !this.displayed
    },
    'index': async function (val) {
      if (val !== null) {
        console.log(val)
        this.compname = (await CustomComponentService.getCustomComponentName(this.item.ProductId)).data
        console.log(this.compname)
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
      console.log('dialog closed')
    }
  }
}
</script>

<style>
</style>
