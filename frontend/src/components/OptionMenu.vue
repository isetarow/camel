<template>
  <div class="option-menu">
    <div class="option-menu__header">
      <div class="option-menu__header__left">
        <div class="option-menu__header__left__title">
          {{ optionMenu.header }}
        </div>
        <div class="option-menu__header__left__repletion">
          ({{ optionMenu.repletion }})
        </div>
      </div>
      <div class="option-menu__header__right">
        <div>
          {{ optionMenu.isRequired ? "必須" : "" }}
        </div>
      </div>
    </div>
    <div class="option-menu__content">
      <option-box :type=optionMenu.type v-for="option in optionMenu.options" :key=option.label :option=option :order=order />
    </div>
  </div>
</template>

<script>
import OptionBox from '@/components/OptionBox'

  export default {
    name: 'OptionMenu',
    components: { OptionBox },
    props:[
      'optionMenu',
      'order'
    ],
  }
</script>

<style lang="scss" scoped>
  .option-menu {
    padding-bottom: 16px;
    &__header {
      display: flex;
      padding: 8px 24px;
      justify-content: space-between;
      -webkit-box-pack: justify;
      align-items: center;
      -webkit-box-align: center;
      margin: 0px -24px 8px;
      background-color: #F5F5F5;
      &__left {
        &__title {
          font-size: 20px;
        }
        &__repletion {
          color: #757575;
          font-size: 14px;
          line-height: 20px;
        }
      }
      &__right {
        color: #FFFFFF;
        font-size: 14px;
        line-height: 24px;
        height: 24px;
        min-width: 3.2em;
        padding: 0px 8px;
        border-radius: 999px;
        text-align: center;
        background: #757575;
      }
    }
  }
</style>
