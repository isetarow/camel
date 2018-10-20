
<template>
  <div class="store-top">
    <global-nav></global-nav>
    <store-header v-bind:storeInfo=storeInfo></store-header>
    <menu-list v-bind:menues=menues></menu-list>
    <item-content v-bind:itemId=itemId></item-content>
  </div>
</template>

<script>
import StoreHeader from '@/components/StoreHeader'
import MenuList from '@/components/MenuList'
import GlobalNav from '@/components/GlobalNav'
import ItemContent from '@/components/ItemContent'

export default {
  name: 'StoreTop',
  components: { StoreHeader, MenuList, GlobalNav,ItemContent },
  data () {
    return {
      storeInfo: {
        image: 'https://picsum.photos/2048/1200?image=995',
        name: 'ルノアール六本木店あああああああああああああああいうえおかきくけこ'
      },
      menues: [],
      itemId:99,
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
