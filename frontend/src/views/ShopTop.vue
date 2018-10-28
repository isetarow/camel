
<template>
  <div class="shop-top">
    <logo/>
    <global-nav :categories=categories />
    <shop-header :shopDetail=shopDetail />
    <menu-list :items=items />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import ShopHeader from '@/components/ShopHeader'
  import MenuList from '@/components/MenuList'
  import GlobalNav from '@/components/GlobalNav'
  import Logo from '@/components/Logo'
  
  // mock data
  import shop from '@/mockData/Shop'
  
  export default {
    name: 'ShopTop',
    components: {
      ShopHeader,
      MenuList,
      GlobalNav,
      Logo
    },
    computed: {
      ...mapState('shop', [
        'shopDetail',
        'categories',
        'items',
      ])
    },
    methods: {
      ...mapActions('some/nested/module', [
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
