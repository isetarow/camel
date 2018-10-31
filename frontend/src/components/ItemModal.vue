<template>
  <section class="item-modal">
    <div class="item-modal__left" :style="{ 'background-image': 'url('+ itemMenu.image + ')' }">
    </div>
    <div class="item-modal__right">
        <div class="item-menu">
          <div class="item-menu__img" :style="{ 'background-image': 'url(' + itemMenu.image + ')' }" >
        </div>
        <div class="item-menu__main">
          <div class="item-menu__main__header">
            <div class="item-menu__main__header__title">
              {{ itemMenu.itemName }}
            </div>
          <div class="item-menu__main__header__description">
              {{ itemMenu.itemDescription }}
        </div>
      </div>
    </div>
    <option-menu v-for="optionMenu in itemMenu.optionMenus" :key=optionMenu.id :optionMenu=optionMenu :order=order />
    <div class="item-menu__form">
      <counter @onClickAdd="onClickAdd" @onClickReduce="onClickReduce" />
    </div>
  </div>
      <close-icon class="item-modal__right__close" />
      <div class="item-submit">
        <counter class="item-submit__counter" @onClickAdd="onClickAdd" @onClickReduce="onClickReduce" />
        <add-cart-button class="item-submit__button" :order=order />
      </div>
    </div>
  </section>
</template>

<script>
  import {
    mapState,
  } from 'vuex'

  import OptionMenu from '@/components/OptionMenu'
  import AddCartButton from '@/components/AddCartButton'
  import CloseIcon from '@/components/CloseIcon'
  import Counter from '@/components/Counter'

  export default {
    name: 'ItemModal',
    components: {
      OptionMenu,
      AddCartButton,
      CloseIcon,
      Counter,
    },
    computed: {
      ...mapState('itemDetail', [
        'itemMenu',
        'order',
      ])
    },
    methods: {
      onClickAdd: function() {
        this.order.count += 1
        this.order.subTotal += this.order.price
      },
      onClickReduce: function() {
        if(this.order.count > 1){
          this.order.count -= 1
          this.order.subTotal -= this.order.price
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .item-modal {
    display: flex;
    width: 80vw;
    height: 600px;
    max-width: 1200px;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;
    overflow: hidden;
    @media (max-width: 1280px) and (min-width: 769px){
      width: 95vw;
    }
    @media (max-width: 768px) {
      height: 100%;
      min-width: 100vw;
    }

    &__left {
      width: 50%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      @media (max-width: 768px) {
        display: none;
        }
    }
    &__right {
      display: flex;
      position: relative;
      flex: 1;
      background:#ffffff;
      flex-direction: column;
      -webkit-box-orient: vertical;
      overflow: hidden;

      .item-menu {
        color: #262626;
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        line-height: 24px;
        padding: 0px 24px;
        flex: 2 1 0%;
        -webkit-font-smoothing: antialiased;
        overflow-y: auto;
        &__img {
          color: #262626;
          height: 200px;
          flex-shrink: 0;
          margin: 0px -24px;
          padding: 16px 24px;
          background-position: center center;
          background-size: cover;
          @media (min-width: 769px) {
            display: none;
          }
        }
        &__main {
          text-align: left;
          &__header {
            font-size: 30px;
            line-height: 36px;
            margin: 0px 0px 24px;
            &__title {
              font-size: 36px;
              line-height: 44px;
              margin-top: 24px;
            }
            &__description {
              color: #757575;
              font-size: 14px;
              line-height: 20px;
              margin-top: 8px;
            }
          }
        }
        &__form {
          display: flex;
          color: #262626;
          line-height: 24px;
          justify-content: center;
          -webkit-box-pack: center;
          flex-shrink: 0;
          margin: 24px 0px;
          @media(min-width: 576px){
            display: none;
          }
        }
      }
      &__close {
        position: absolute;
        top: 0;
        right: 0;
        margin: 8px 16px 0 0;
      }
      .item-submit {
        display: flex;
        flex-direction: row;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-shrink: 0;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;
        &__counter {
          @media (max-width: 575px) {
            display: none;
          }
        }
        &__button {
          flex: 1;
          margin-left: 32px;
          @media (max-width: 575px) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
