<template>
  <div class="close-icon">
    <svg viewBox="0 0 14 14">
      <path d="M7 5.586L2.05.636.636 2.05 5.586 7l-4.95 4.95 1.414 1.414L7 8.414l4.95 4.95 1.414-1.414L8.414 7l4.95-4.95L11.95.636 7 5.586z"></path>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "CloseIcon",
  };
</script>

<style lang="scss" scoped>
  .close-icon{
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    padding: 8px;
    transition: all 400ms ease;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    fill: #262626;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    background-color: #FFFFFF;
    cursor: pointer;
    svg {
      width: 16px;
      height: 16px;
    }
  }
</style>

