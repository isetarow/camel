<template>
  <section class="menu-list">
    <div class="menu-list__header">
      <span class="menu-list__header__title">メニュー Menu</span>
    </div>
    <div class="menu-list__items">
      <div class="menu-list__items__category">
        <h2>お勧め</h2>
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
  &__items {
    padding: 20px 15px;
    &__category {
      font-size: 0.7em;
      h2 {
        font-weight: 400;
      }
    }
  }
}
  
</style>
