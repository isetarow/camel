let shop = {
  shopDetail: {
    image: 'https://picsum.photos/2048/1200?image=995',
    name: 'ルノアール六本木店あああああああああああああああいうえおかきくけこ',
    geolocation: {
      'lat': 111.222222,
      'lng': 222.111111,
    }
  },
  categories: [
    {
      id: 1,
      name: 'お勧め',
      sortOrder: 1,
    },
    {
      id: 2,
      name: '定食',
      sortOrder: 2,
    },
    {
      id: 3,
      name: 'ドリンク',
      sortOrder: 4,
    },
    {
      id: 4,
      name: '単品',
      sortOrder: 3,
    },
  ],
  items: {
    1: {
      id:1,
      categoryId: [1, 3],
      categoryName: ["お勧め", "ドリンク"],
      itemName: '水出しアイスコーヒー',
      itemDescription: 'Mサイズです。',
      price: 700,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    2: {
      id:2,
      categoryId: [1],
      categoryName: "お勧め",
      itemName: 'クラブハウスサンド',
      itemDescription: '写真はイメージです。',
      price: 1200,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    3: {
      id:3,
      categoryId: [1],
      categoryName: "お勧め",
      itemName: 'うすうす',
      itemDescription: '0.2mmです。',
      price: 100,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    4: {
      id:4,
      categoryId: [2],
      categoryName: "定食",
      itemName: '女王様セット',
      itemDescription: '頼んでからのお楽しみです。',
      price: 1000,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    5: {
      id:5,
      categoryId: [2],
      categoryName: "定食",
      itemName: '女王様セット2',
      itemDescription: '男のロマンです。',
      price: 1200,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    6: {
      id:6,
      categoryId: [3],
      categoryName: "ドリンク",
      itemName: 'ドリップアイスコーヒー',
      itemDescription: 'あなたは水出しとの違いがわかるか。',
      price: 700,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
    7: {
      id:7,
      categoryId: [4],
      categoryName: "単品",
      itemName: 'バイブ',
      itemDescription: '電マの方が人気です',
      price: 100,
      image: "https://d1ralsognjng37.cloudfront.net/ef3a92bb-5cbf-4a71-b8e9-888822c2330e"
    },
  }
}

export default shop;
