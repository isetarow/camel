
<template>
  <div class="shop-top">
    <logo/>
    <button @click="clickAddItemHandler">Add item</button>
    <global-nav :categories=categories />
    <shop-header :shopDetail=shopDetail />
    <menu-list :items=items :categories=categories @onClickItem="onClickItem" />
    <overlay v-show=showItemModal >
      <item-modal  :itemId=itemId @onClickClose="onClickClose"/>
    </overlay>
    <order-confirm-button v-if="orderItems.length > 0" :orderItems=orderItems :orderTotal=orderTotal />
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'

  import ShopHeader from '@/components/ShopHeader'
  import MenuList from '@/components/MenuList'
  import GlobalNav from '@/components/GlobalNav'
  import Logo from '@/components/Logo'
  import Overlay from '@/components/Overlay'
  import ItemModal from '@/components/ItemModal'
  import OrderConfirmButton from '@/components/OrderConfirmButton'

  export default {
    name: 'ShopTop',
    components: {
      ShopHeader,
      MenuList,
      GlobalNav,
      Logo,
      Overlay,
      ItemModal,
      OrderConfirmButton,
    },
    data() {
      return {
        itemId: -1,
        showItemModal: false,
      }
    },
    computed: mapState({
      shopDetail: state => state.shop.shopDetail,
      categories: state => state.shop.categories,
      items: state => state.shop.items,
      orderItems: state => state.orders.items,
      orderTotal: state => state.orders.total
    }),
    methods: {
      ...mapActions('orders', [
        'addOrder'
      ]),
      clickAddItemHandler: function(event) {
        this.addOrder({
          id: 100,
          name: '三上汁',
          price: 10,
          count: 2,
          subTotal: 20,
        })
      },
      onClickItem: function(itemId) {
        this.itemId = itemId
        this.showItemModal = true
      },
      onClickClose: function(event) {
        this.showItemModal = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
