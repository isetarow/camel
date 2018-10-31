let itemDetail = {
  itemMenu: {
    itemName: 'バイブ',
    itemDescription:"ブ〜〜〜ン",
    price: 100,
    image: "https://uk-homedelivery-prod-images.s3.amazonaws.com/UE-mobile_uk_SignatureTheClassicMEVM.png",
    optionMenus:[
      {
        id:1,
        header: 'サイド Sides',
        repletion: '1 つ選択',
        isRequired: true,
        type:'radio',
        options:[
          {
            label:'マックフライポテトS FRENCH FRIES S',
            additionalCosts:-50,
            isSoldOut:false,
          },
          {
            label:'マックフライポテトM FRENCH FRIES M',
            additionalCosts:0,
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
        id:2,
        header:'ドリンク Drink',
        repletion: '1 つ選択',
        isRequired: true,
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
        id:3,
        header:'ドレッシング Salad Dressing Choice',
        repletion: '1 つ選択',
        isRequired: true,
        type:'checkbox',
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
    ]
  },
  order:{
    itemId: 1,
    name:  "バイブ",
    price: 100,
    count: 1,
    subTotal: 100
  },
}
export default itemDetail;
