<template>
  <button class="order-confirm-button" type="button">
    <div class="order-confirm-button__contents">
      <span class="order-confirm-button__contents__total">{{totalWithCurrency()}}</span>
      <span class="order-confirm-button__contents__confirm">{{confirmCart()}}</span>
      <span class="order-confirm-button__contents__count">{{countOrderItems()}}</span>
    </div>
  </button>
</template>


<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'OrderConfirmButton',
    computed: {
      ...mapState('orders', [
        'total',
        'items'
      ]),
      totalWithCurrency: function() {
        return function() {
            return '￥' + this.total
        }
      },
      confirmCart: function() {
        return function() {
          return "カートを見る"
        }
      },
      countOrderItems: function() {
        return function() {
          return this.items.length
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-confirm-button {
    background: rgb(62, 153, 32);
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(62, 153, 32);
    border-image: initial;
    border-radius: 2px;
    width: 100%;
    min-width: 120px;
    height: 48px;
    outline: none;
    &__contents {
      padding:8px 16px;
      align-items: center;
      display: flex;
      justify-content: center;
      color: #FFFFFF;
        text-align: center;
      &__total {
        text-align: left;
        width: calc(100% / 3);
      }
      &__confirm {
        width: calc(100% / 3);
      }
      &__count {
        margin-left: auto;
        border-radius: 2px;
        border: solid 1px white;
        padding: 0 8px;
      }
    }
  }
</style>
