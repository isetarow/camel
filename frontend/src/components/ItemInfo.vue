<template>
  <div class="item-info">
    <div class="item-info__img"  v-bind:style="{ 'background-image': 'url(' + itemInfo.image + ')' }">
    </div>
    <div class="item-info__main">
      <div class="item-info__main__header">
        <div class="item-info__main__header__title">
          {{ itemInfo.name }}
        </div>
        <div class="item-info__main__header__description">
          {{ itemInfo.description }}
        </div>
      </div>
      <option-menu v-for="optionMenu in itemInfo.optionMenus" :key=optionMenu.header :optionMenu=optionMenu ></option-menu>
    </div>
    <div class="item-info__form">
      <counter v-bind:count=itemInfo.order.count></counter>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import OptionMenu from '@/components/OptionMenu'

  export default {
    name: "ItemInfo",
    components: { Counter, OptionMenu },
    props: ['itemInfo'],
  };
</script>

<style lang="scss" scoped>
  .item-info {
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
</style>
