<template>
  <div class="option-menu">
    <div class="option-menu__header">
      <div class="option-menu__header__left">
        <div class="option-menu__header__left__title">
          {{ optionMenu.header }}
        </div>
        <div class="option-menu__header__left__repletion">
          (1 つ選択)
        </div>
      </div>
      <div class="option-menu__header__right">
        <div>
          必須
        </div>
      </div>
    </div>
    <div class="option-menu__content">
      <radio-option v-if="optionMenu.type === 'radio'" v-for="option in optionMenu.options" :key=option.header :option=option></radio-option>
      <check-option v-if="optionMenu.type === 'check'" v-for="option in optionMenu.options" :key=option.header :option=option></check-option>
    </div>
  </div>
</template>

<script>
import RadioOption from '@/components/RadioOption'
import CheckOption from '@/components/CheckOption'

  export default {
    name: 'OptionMenu',
    components: { RadioOption, CheckOption },
    props:['optionMenu'],
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
