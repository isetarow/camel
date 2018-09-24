
<template>
  <div class="hello">
    <store-header v-bind:shopInfo=shopInfo></store-header>
    <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
  </div>
</template>

<script>
export default {
  name: 'StoreTop',
  data () {
    return {
      shopInfo: {
        image: 'https://picsum.photos/1024/600?image=995',
        name: 'ルノアール六本木店あああああああああああああああい…'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
