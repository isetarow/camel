<template>
  <header class="global-nav">
    <div class="logo">
      <img v-bind:src="require('../assets/logo.png')">
    </div>
    <nav v-bind:style="fixedAfterLogo">
      <ul>
        <li><a href="#">お勧め</a></li>
        <li><a href="#">定食</a></li>
        <li><a href="#">単品</a></li>
        <li><a href="#">ドリンク</a></li>
        <li><a href="#">{{test}}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'GlobalNav',
    computed: {
      scrollY() { return this.$window.scrollY },
      fixedAfterLogo() { 
        return this.scrollY > 60 ? { position: 'fixed', top: 0 } : {}
      },
    },
  }
</script>

<style lang="scss" scoped>
  .global-nav {
    .logo {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 40px;
      }
    }
    nav {
      background-color: #666;
      color: white;
      max-width: 1238px;
      width: 100%;
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
  }
</style>
