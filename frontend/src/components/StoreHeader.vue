<template>
  <header class="store-header">
    <!-- headerの内容を記述 -->
    <div class="store-header__img" v-bind:style="{ backgroundImage: 'url(' + shopInfo.image + ')' }">
      <div class="store-header__title">
        <div class="store-header__title__contents">
          <div class="store-header__title__contents__name">
            <h1>{{ shopInfo.name }}</h1>
          </div>
          <div class="store-header__title__contents__info">
            <span><font-awesome-icon :icon="['far', 'clock']" />10:00 - 23:00</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StoreHeader',
  props: ['shopInfo']
}
</script>

<style lang="scss" scoped>
.store-header {
  margin-bottom: 20px;
  &__img {
    max-width: 1238px;
    height: 300px;
    box-shadow: rgb(255, 255, 255) 0px -18px 0px 0px inset;
    background-size: cover;
    background-position: center center;
  }
  &__title {
    max-width: 1206px;
    padding: 0 16px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    h1 {
      line-height: 1.2em;
      font-size: 1.9em;
      color: #262626;
    }
    &__contents {
      width: 100%;
      text-align: center;
      padding: 16px 16px 8px 16px;
      border-radius: 2px;
      align-self: flex-end;
      box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.08);
      flex-direction: column;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      background-color: #FFFFFF;
      &__name {
        -webkit-font-smoothing: antialiased;
        max-height: 4.5em;
        overflow: hidden;
        margin-bottom: 10px;
      }
    }
  }
}

// @media only screen and (max-width: 575px) {
//   h1, h2 {
//       font-weight: 400;
//   }
// }

@media (min-width: 769px) {
  .store-header {
    &__img{
      height: 364px;
      box-shadow: rgb(255, 255, 255) 0px -22px 0px 0px inset;
    }
    &__title {
      max-width: 1238px;
      padding: 0 32px;
      h1 {
        line-height: 1.2em;
        font-size: 2em;
      }
      &__contents {
        padding: 32px;
        align-self: center;
        border-radius: 4px;
        max-width: 480px;
      }
    }
  }
}
</style>
