<template>
  <div class="option-box">
    <input :type=type >
    <label :class="type" for="option-26aa27ac-a168-49ad-8929-5405f21218c7-b8abdd4f-094e-483f-886c-6241f6844378-">
      <div class="option-box__text">
        {{ option.label }}
      </div>
      <div v-if="option.isSoldOut" class="option-box__soldout">
        売り切れ
      </div>
      <div v-else class="option-box__repletion">
        {{ repletionPrice(option.additionalCosts) }}
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'OptionBox',
    props:[
      'type',
      'option',
      'order'
    ],
    computed: {
      repletionPrice: function() {
        return function(additionalCosts){
          var repletion
          if(additionalCosts < 0){
            repletion = "- ￥" + String(additionalCosts * -1 )
          }else if(additionalCosts > 0){
            repletion = "+ ￥" + String(additionalCosts)
          }else{
            repletion = ""
          }
          return repletion
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .option-box {
    padding: 12px 0px;
    display: flex;
    input {
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
        border-width: 4px;
        border-style: solid;
        border-color: #ffffff;
        border-image: initial;
        box-shadow: #e0e0e0 0px 0px 0px 1px;
      }
    }
    .checkbox::before{
      border-radius: 2px;
    }
    .radio::before{
      border-radius: 50%;
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
