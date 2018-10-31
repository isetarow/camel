<template>
  <button @click="clickAddCartHandler" class="add-cart-button" type="button">
    <div class="add-cart-button__text">
      カートに{{ order.count }}つ追加する
      <span class="add-cart-button__text__price">
        {{ order.subTotal }}円
      </span>
    </div>
  </button>
</template>

<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'AddCartButton',
    props: ['order'],
    methods: {
      ...mapActions('orders', [
        'addOrder'
      ]),
      clickAddCartHandler: function(event) {
        this.addOrder(this.order)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-cart-button {
    display: flex;
    outline:none;
    color: #FFFFFF;
    font-size: 14px;
    width: 100%;
    height: 48px;
    min-width: 200px;
    box-sizing: border-box;
    padding: 8px 16px;
    border-width: 1px;
    border-style: solid;
    border-color: #3e9920;
    border-radius: 2px;
    background: #3e9920;
    transition: all 400ms ease;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    &:hover{
      border-color: #247a00;
      background:#247a00;
    }
    &__text {
      position: relative;
      width: 100%;
      text-align: left;
      @media (max-width: 768px) {
        text-align: center;
      }
      &__price {
        position: absolute;
        right: 0;
      }
    }
  }
</style>
