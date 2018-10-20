<template>
  <div class="fade">
    <section class="item-content">
      <div class="item-content__left" v-bind:style="{ 'background-image': 'url('+ itemInfo.image + ')' }">
      </div>
      <div class="item-content__right">
        <item-info v-bind:itemInfo=itemInfo></item-info>
        <close-icon class="item-content__right__close"></close-icon>
        <div class="item-submit">
          <counter class="item-submit__counter" v-bind:count=itemInfo.order.count></counter>
          <add-cart-button class="item-submit__button" v-bind:order=itemInfo.order></add-cart-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AddCartButton from '@/components/AddCartButton'
import CloseIcon from '@/components/CloseIcon'
import Counter from '@/components/Counter'
import ItemInfo from '@/components/ItemInfo'

  export default {
    name: 'ItemContent',
    components: { AddCartButton, CloseIcon, Counter,ItemInfo },
    props: ['itemId'],
    data () {
    return {
      //itemIdをKeyにしてitemInfo取得
      itemInfo: {
        image: 'https://uk-homedelivery-prod-images.s3.amazonaws.com/UE-mobile_uk_SignatureTheClassicMEVM.png',
        name:'ツキミハ゛ーカ゛ー TUKIMI BURGER',
        description:'今年も月見の季節がやってきました！',
        price:430,
        optionMenus:[
          { header:'サイド Sides',
            type:'radio',
            options:[
              {
                label:'マックフライポテトS FRENCH FRIES S',
                additionalCosts:-50,
                isSoldOut:false,
              },
              {
                label:'マックフライポテトM FRENCH FRIES M',
                isSoldOut:0,
                isOnSale:false,
              },
              {
                label:'マックフライポテトL FRENCH FRIES L',
                additionalCosts:50,
                isSoldOut:false,
              },
              {
                label:'マックナゲット NUGGETS',
                additionalCosts:0,
                isSoldOut:true,
              },
            ]
          },
          {
            header:'ドリンク Drink',
            type:'radio',
            options:[
              {
                label:'コーラ Coke',
                additionalCosts:0,
                isSoldOut:false,
              },
              {
                label:'ミルク',
                additionalCosts:50,
                isSoldOut:false,
              },
            ]
          },
          {
            header:'ドレッシング Salad Dressing Choice',
            type:'check',
            options:[
              {
                label:'バイセンゴマドレッシング SESAME DRESSING',
                additionalCosts:0,
                isSoldOut:false,
              },
              {
                label:'テイカロリータマネギ Low Calorie Onion',
                additionalCosts:0,
                isSoldOut:true,
              },
              {
                label:'ソースナシ NO SAUCE',
                additionalCosts:0,
                isSoldOut:false,
              },
            ]
          },
        ],
        order:{
          count:1,
          priceSum:430,
        }
      },

    }
  }
  }
</script>

<style lang="scss" scoped>
  .fade{
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
  .item-content {
    display: flex;
    width: 80vw;
    height: 600px;
    max-width: 1200px;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;
    overflow: hidden;
    @media (max-width: 1280px) and (min-width: 769px){
      width: 95vw;
    }
    @media (max-width: 768px) {
      height: 100%;
      min-width: 100vw;
    }

    &__left {
      width: 50%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      @media (max-width: 768px) {
        display: none;
        }
    }
    &__right {
      display: flex;
      position: relative;
      flex: 1;
      background:#ffffff;
      flex-direction: column;
      -webkit-box-orient: vertical;
      overflow: hidden;
      &__close {
        position: absolute;
        top: 0;
        right: 0;
        margin: 8px 16px 0 0;
      }
      .item-submit {
        display: flex;
        flex-direction: row;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-shrink: 0;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;
        &__counter {
          @media (max-width: 575px) {
            display: none;
          }
        }
        &__button {
          flex: 1;
          margin-left: 32px;
          @media (max-width: 575px) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
