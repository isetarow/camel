<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Overlay',
  }
</script>

<style lang="scss" scoped>
  .overlay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    justify-content: center;
    -webkit-box-pack: center;
    background: rgba(38, 38, 38, 0.8);
    z-index: 7;
    opacity: 1;
    transition: opacity 300ms ease 0s;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: opacity 300ms ease;
  }
</style>
