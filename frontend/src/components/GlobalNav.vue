<template>
  <nav>
    <ul>
      <li v-for="category in sortedCategory" :key=category.id>
        <a :href="category.id">{{ category.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'GlobalNav',
    props: ['categories'],
    computed: {
      sortedCategory: () => {
        return this.categories
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    white-space: nowrap;
    overflow-y: scroll;
    background-color: #666;
    color: white;
    max-width: 1238px;
    width: 100%;
    position: sticky;
    top: 0;
    ul {
      display: flex;
      justify-content: center;
      flex-flow: row;
      margin: 0;
      list-style-type: none;
    }
    a {
      display: block;
      padding: 12px 24px;
      color: white;
      text-decoration: none;
    }
    li a:hover {
      background-color: #8cae47;
    }
  }
</style>
