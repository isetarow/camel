<template>
  <section class="menu-list">
    <div class="menu-list__header">
      <span class="menu-list__header__title">メニュー Menu</span>
    </div>
    <ul class="menu-list__category">
      <li v-for="category in sortedCategory" :key=category.id class="menu-list__category__name">
        <h2>{{ category.name }}</h2>
        <ul class="menu-list__category__items">
          <li v-for="item in filtedItem" :key=item.id class="menu-list__category__item">{{item.itemName}}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'MenuList',
    props: ['items', 'categories'],
    computed: {
      sortedCategory: function() {
        return this.categories
      },
      filtedItem: function() {
        return Object.values(this.items).filter(function (item) {
          return item.categoryId.includes(1)
        })
      }
    }
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
      &__items {
        list-style:none;
      }
    }
  }
</style>
