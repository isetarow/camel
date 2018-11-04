
<template>
  <div class="shop-top">
    <logo/>
    <button @click="clickAddItemHandler">Add item</button>
    <global-nav />
    <shop-header />
    <menu-list @onClickItem="onClickItem" />
    <overlay v-show=showItemModal >
      <item-modal  :itemId=itemId @onClickClose="onClickClose"/>
    </overlay>
    <order-confirm-button v-if=hasOrder />
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
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
    computed: {
      ...mapGetters('orders', [
        'hasOrder'
      ])
    },
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
