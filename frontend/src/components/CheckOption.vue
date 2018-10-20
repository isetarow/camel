<template>
  <div class="check-option">
    <input class="check-option__check" type="radio">
    <label for="option-26aa27ac-a168-49ad-8929-5405f21218c7-b8abdd4f-094e-483f-886c-6241f6844378-">
      <div class="check-option__text">
        {{ option.label }}
      </div>
      <div v-if="option.isSoldOut" class="check-option__soldout">
        売り切れ
      </div>
      <div v-else-if="option.additionalCosts>0" class="check-option__repletion">
        + ￥{{ option.additionalCosts }}
      </div>
      <div v-else-if="option.additionalCosts<0" class="radio-option__repletion">
        - ￥{{ option.additionalCosts * -1}}
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'CheckOption',
    props:['option'],
  }
</script>

<style lang="scss" scoped>
  .check-option {
    padding: 12px 0px;
    display: flex;
    &__check {
      display: none;
    }
    label {
      display: flex;
      color: #262626;
      font-size: 14px;
      width: 100%;
      line-height: 20px;
      align-items: center;
      -webkit-box-align: center;
      margin-bottom: 0px;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      cursor: pointer;
      &::before {
        content: "";
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 12px;
        flex-shrink: 0;
        border-radius: 2px;
        border-width: 4px;
        border-style: solid;
        border-color: #ffffff;
        border-image: initial;
        box-shadow: #e0e0e0 0px 0px 0px 1px;
        transition: all 400ms ease 0s;
      }
    }
    &__soldout {
      color: #FFFFFF;
      min-width: 4.6rem;
      line-height: 20px;
      padding: 5px 10px;
      margin-left: auto;
      text-align: center;
      border-radius: 2px;
      background-color: #757575;
    }
    &__repletion {
      margin-left: auto;
      color: #757575;
    }
    &.is-selected::before{
      background-color: #3e9920;
    }
  }
</style>
