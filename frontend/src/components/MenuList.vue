<template>
  <section class="menu-list">
    <ul class="menu-list__category">
      <li v-for="category in sortedCategory" :key=category.id >
        <div class="menu-list__category__name">
          <h2>{{ category.name }}</h2>
        </div>
        <ul>
          <li v-for="item in filtedItem(category.id)" :key=item.id class="menu-list__category__item">
            <div class="menu-list__category__item__contents">
              <p class="menu-list__category__item__contents__name">{{item.itemName}}</p>
              <p class="menu-list__category__item__contents__description">{{item.itemDescription}}</p>
              <span class="menu-list__category__item__contents__price">{{priceWithCurrency(item.price)}}</span>
            </div>
            <div class="menu-list__category__item__img"  v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"/>
           </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'MenuList',
    props: ['items', 'categories', ''],
    computed: {
      sortedCategory: function() {
        return this.categories
      },
      filtedItem: function() {
        return function(categoryId) {
          return Object.values(this.items).filter(function(item) {
            return item.categoryId.includes(categoryId)
          })
        }
      },
      priceWithCurrency: function() {
        return function(price) {
            return '￥' + price
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }
  .menu-list {
    text-align: left;
    &__category {
      padding: 0 16px;
      &__name {
        text-align: center;
        padding: 32px 0px 40px;
        box-sizing: border-box;
        h2 {
          font-weight: 400;
        }
      }
      &__item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(224, 224, 224);
        &__contents {
          padding: 16px 0px;
          &__description {
            font-size: 0.8em;
            color: #757575;
          }
          &__price {
            font-size: 0.8em;
            align-items: flex-end;
            -webkit-box-align: end;
          }
        }
        &__img {
          height: 88px;
          width: 88px;
          background-size: cover;
        }
      }
    }
  }
</style>
