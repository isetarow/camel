<template>
  <div class="logo">
    <img v-bind:src="require('@/assets/logo.png')">
  </div>
</template>

<script>
  export default {
    name: 'Logo',
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 40px;
    }
  }
</style>
