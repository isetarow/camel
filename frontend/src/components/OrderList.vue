<template>
  <section class="order-contents">
    <ul class="order-contents__list">
      <li v-for="item in items" :key=item.id class="order-contents__list__item">
        <div class="order-contents__list__item__box">
          <div class="order-contents__list__item__box__left">
            <select v-model="selected" class="order-contents__list__item__box__left__select">
               <option v-for="option in options"  :key=option.id>
                 {{ option.text }}
               </option>
             </select>
          </div>
          <div class="order-contents__list__item__box__center">
            <p class="order-contents__list__item__box__center__name">
              {{item.itemName}}
            </p>
            <button class="order-contents__list__item__box__center__delete">削除する</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  .order-contents {
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(224, 224, 224);
      border-image: initial;
      margin-bottom: 24px;
      &__list {
        max-height: 320px;
        overflow-y: scroll;
        &__item {
          &::before {
            width: calc(100% - 40px);
            border-top: 1px solid rgb(224, 224, 224);
            margin: 0px auto;
            content: "";
            display: block;
          }
          &:first-child::before {
            border-top: none;
          }
          &__box {
            padding: 16px 24px;
            justify-content: space-around;
            -webkit-box-pack: justify;
            display: flex;
            &__left {
              margin-top: 8px;
              margin-right: 16px;
              line-height: 20px;
              position: relative;
              &__select {
                padding: 0px 24px 0px 8px;
                border-radius: 0px;
                border-width: 1px !important;
                border-style: solid !important;
                border-color: rgb(224, 224, 224) !important;
                border-image: initial !important;
                outline: none;
                height: 24px;
                line-height: 24px;
                cursor: pointer;
                color: #3e9920;
                -webkit-font-smoothing: antialiased;
              }
              &::after {
                line-height: 24px;
                color: rgb(224, 224, 224);
                content: "▾";
                position: absolute;
                top: 0px;
                right: 8px;
                height: 24px;
                pointer-events: none;
              }
            }
            &__center {
              width: 216px;
              flex-grow: 1;
              -webkit-box-flex: 1;
              overflow: hidden;
              cursor: pointer;
              &__name {
                padding: 8px 0;
                line-height: 20px;
                color: #262626;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
              }
              &__delete {
                fill: rgb(36, 122, 0);
                background: transparent;
                line-height: 16px;
                color: rgb(36, 122, 0);
                text-decoration: none;
                font-size: 12px;
                border: none;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                cursor: pointer;
                justify-content: center;
                -webkit-box-pack: center;
                align-items: center;
                -webkit-box-align: center;
              }
            }
            &__right {
              padding: 8px 0;
              line-height: 20px;
              color: #262626;
              -webkit-font-smoothing: antialiased;
              font-size: 14px;
            }
          }
        }
      }
      &__total {
        margin: 10px 24px;
        display: flex;
        justify-content: space-between;
      }
  }
</style>
