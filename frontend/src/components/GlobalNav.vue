<template>
  <nav>
    <ul>
      <li><a href="#">お勧め</a></li>
      <li><a href="#">定食</a></li>
      <li><a href="#">単品</a></li>
      <li><a href="#">ドリンク</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'GlobalNav',
  }
</script>

<style lang="scss" scoped>
  nav {
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
