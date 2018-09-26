
<template>
  <div class="store-top">
    <store-header v-bind:shopInfo=shopInfo></store-header>
    <menu-list v-bind:menues=menues></menu-list>
  </div>
</template>

<script>
import StoreHeader from '@/components/StoreHeader'
import MenuList from '@/components/MenuList'

export default {
  name: 'StoreTop',
  components: { StoreHeader, MenuList },
  data () {
    return {
      shopInfo: {
        image: 'https://picsum.photos/2048/1200?image=995',
        name: 'ルノアール六本木店あああああああああああああああい…'
      },
      menues: []
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
