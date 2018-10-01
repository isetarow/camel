<template>
  <section class="menu-list">
    <div class="menu-list__header">
      <span class="menu-list__header__title">メニュー Menu</span>
    </div>
    <div class="menu-list__category">
      <div class="menu-list__category__name">
        <h2>お勧め</h2>
      </div>
      <ul class="menu-list__category__items">
        <li class="menu-list__category__item">クラブハウスサンド</li>
        <li class="menu-list__category__item">パンケーキ</li>
        <li class="menu-list__category__item">コーヒー</li>
      </ul>
    </div>
    <div class="menu-list__category">
      <div class="menu-list__category__name">
        <h2>定食</h2>
      </div>
    </div>
    <div class="menu-list__category">
      <div class="menu-list__category__name">
        <h2>単品</h2>
      </div>
    </div>
    <div class="menu-list__category">
      <div class="menu-list__category__name">
        <h2>ドリンク</h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MenuList',
    props: ['menues']
  }
</script>

<style lang="scss" scoped>
  .menu-list {
    text-align: left;
    &__header {
      padding: 15px;
      border-top: solid 1px rgb(244, 244, 244);
      border-bottom: solid 1px rgb(244, 244, 244);
      &__title {
        color: #262626;
      }
    }
    &__category {
      padding: 20px 15px;
      border-bottom: solid 1px rgb(244, 244, 244);
      &__name {
        font-size: 0.7em;
        h2 {
          font-weight: 400;
        }
      }
    }
  }
</style>
