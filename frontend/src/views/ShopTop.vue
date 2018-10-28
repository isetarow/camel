
<template>
  <div class="shop-top">
    <logo/>
    <global-nav :categories=categories />
    <shop-header :shopDetail=shopDetail />
    <menu-list :items=items />
    <item-content :itemId=id></item-content>
  </div>
</template>

<script>
  import ShopHeader from '@/components/ShopHeader'
  import MenuList from '@/components/MenuList'
  import GlobalNav from '@/components/GlobalNav'
  import Logo from '@/components/Logo'
  import ItemContent from '@/components/ItemContent'

  // mock data
  import shopInfo from '@/mockData/ShopInfo'

  export default {
    name: 'ShopTop',
    components: {
      ShopHeader,
      MenuList,
      GlobalNav,
      Logo,
      ItemContent,
    },
    data() {
      return {
        ...shopInfo
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
