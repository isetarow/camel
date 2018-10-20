<template>
  <div class="counter">
    <button>
      <svg viewBox="0 0 64 64">
        <path d="M55 36H9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z">
        </path>
      </svg>
    </button>
    <div class="counter__count">
      {{ count }}
    </div>
    <button>
      <svg viewBox="0 0 64 64">
        <path d="M56 29v6a1 1 0 0 1-1 1H36v19a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V36H9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h19V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v19h19a1 1 0 0 1 1 1z">
        </path>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    props: ['count'],
  }
</script>

<style lang="scss" scoped>
  .counter {
    display: flex;
    height: 52px;
    button {
      display: flex;
      outline:none;
      width: 48px;
      height: 48px;
      justify-content: center;
      -webkit-box-pack: center;
      align-items: center;
      -webkit-box-align: center;
      background-color: #FFFFFF;
      border: 1px solid #E0E0E0;
      border-radius: 50%;
      cursor: pointer;
      &:hover{
        background-color:#f5f5f5;
      }
      svg {
        fill: currentColor;
        width: 16px;
        height: 16px;
      }
    }
    &__count {
      display: flex;
      padding-right: 8px;
      padding-left: 8px;
      justify-content: center;
      -webkit-box-pack: center;
      align-items: center;
      -webkit-box-align: center;
      @media (min-width: 769px) {
          line-height: 24px;
      }
    }
  }
</style>
