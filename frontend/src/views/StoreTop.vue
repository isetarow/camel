
<template>
  <div class="store-top">
    <logo/>
    <global-nav :categories=categories />
    <store-header :storeInfo=storeInfo />
    <menu-list :menues=menues />
  </div>
</template>

<script>
  import StoreHeader from '@/components/StoreHeader'
  import MenuList from '@/components/MenuList'
  import GlobalNav from '@/components/GlobalNav'
  import Logo from '@/components/Logo'
  
  // mock data
  import storeTopData from '@/mockData/StoreInfo'
  
  export default {
    name: 'StoreTop',
    components: {
      StoreHeader,
      MenuList,
      GlobalNav,
      Logo
    },
    data() {
      return {
        ...storeInfo
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
