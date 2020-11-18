//商品数据
var product_database = [
  {
    productId: 0,
    productImageSrc: "/images/heard-img.jpg",
    productName: "商品名字",
    productPrice: 0.01,
  }
]

// 选择商品分类
var categoryItem = {
  categories: [{
    title: "书",
    active: "true",
    category: {
      item: [{
        furCategory: [{
          postid: 0,
          goodsImg: "/images/a.png",
          title: "书0",
        }, {
          postid: 1,
          goodsImg: "/images/b.png",
          title: "书1",
        }, {
          postid: 2,
          goodsImg: "/images/c.png",
          title: "书2",
        }, {
          postid: 3,
          goodsImg: "/images/d.png",
          title: "书3",
        }, {
          postid: 4,
          goodsImg: "/images/b.png",
          title: "书4",
        }, {
          postid: 5,
          goodsImg: "/images/f.png",
          title: "书5",
        }, {
          postid: 6,
          goodsImg: "/images/g.png",
          title: "书6",
        }, {
          postid: 7,
          goodsImg: "/images/h.png",
          title: "书7",
        }, {
          postid: 8,
          goodsImg: "/images/i.png",
          title: "书8",
        }, {
          postid: 9,
          goodsImg: "/images/a.png",
          title: "书9",
        }]
      },]
    }
  }, {
    title: "桌",
    active: "false",
    category: {
      item: [{
        furCategory: [{
          postid: 0,
          goodsImg: "/images/b.png",
          title: "桌0",
        }, {
          postid: 1,
          goodsImg: "/images/c.png",
          title: "桌1",
        }, {
          postid: 2,
          goodsImg: "/images/d.png",
          title: "桌2",
        }, {
          postid: 3,
          goodsImg: "/images/a.png",
          title: "桌3",
        }, {
          postid: 4,
          goodsImg: "/images/f.png",
          title: "桌4",
        }, {
          postid: 5,
          goodsImg: "/images/i.png",
          title: "桌5",
        }, {
          postid: 6,
          goodsImg: "/images/g.png",
          title: "桌6",
        }, {
          postid: 7,
          goodsImg: "/images/h.png",
          title: "桌7",
        }, {
          postid: 8,
          goodsImg: "/images/i.png",
          title: "桌8",
        }]
      }]
    }
  }, {
    title: "物什",
    active: "false",
    category: {
      item: [{
        furCategory: [{
          postid: 0,
          goodsImg: "/images/a.png",
          title: "物什0",
        }, {
          postid: 1,
          goodsImg: "/images/c.png",
          title: "物什1",
        }, {
          postid: 2,
          goodsImg: "/images/b.png",
          title: "物什2",
        }, {
          postid: 3,
          goodsImg: "/images/d.png",
          title: "物什3",
        }, {
          postid: 4,
          goodsImg: "/images/f.png",
          title: "物什4",
        }, {
          postid: 5,
          goodsImg: "/images/g.png",
          title: "物什5",
        }, {
          postid: 6,
          goodsImg: "/images/h.png",
          title: "物什6",
        }, {
          postid: 7,
          goodsImg: "/images/i.png",
          title: "物什7",
        }]
      }]
    }
  }, {
    title: "美道",
    active: "false",
    category: {
      item: [{
        furCategory: [{
          postid: 0,
          goodsImg: "/images/f.png",
          title: "美道0",
        }, {
          postid: 1,
          goodsImg: "/images/a.png",
          title: "美道1",
        }, {
          postid: 2,
          goodsImg: "/images/a.png",
          title: "美道2",
        }, {
          postid: 3,
          goodsImg: "/images/b.png",
          title: "美道3",
        }, {
          postid: 4,
          goodsImg: "/images/b.png",
          title: "美道4",
        }, {
          postid: 5,
          goodsImg: "/images/c.png",
          title: "美道5",
        }, {
          postid: 6,
          goodsImg: "/images/d.png",
          title: "美道6",
        }]
      }]
    }
  }, {
    title: "杂货铺",
    active: "false",
    category: {
      item: [{
        furCategory: [{
          postid: 0,
          goodsImg: "/images/a.png",
          title: "杂货铺0",
        }, {
          postid: 1,
          goodsImg: "/images/b.png",
          title: "杂货铺1",
        }, {
          postid: 2,
          goodsImg: "/images/c.png",
          title: "杂货铺2",
        }, {
          postid: 3,
          goodsImg: "/images/d.png",
          title: "杂货铺3",
        }, {
          postid: 4,
          goodsImg: "/images/e.png",
          title: "杂货铺4",
        }, {
          postid: 5,
          goodsImg: "/images/f.png",
          title: "杂货铺5",
        }, {
          postid: 6,
          goodsImg: "/images/g.png",
          title: "杂货铺6",
        }, {
          postid: 7,
          goodsImg: "/images/h.png",
          title: "杂货铺7",
        }, {
          postid: 8,
          goodsImg: "/images/i.png",
          title: "杂货铺8",
        }, {
          postid: 9,
          goodsImg: "/images/b.png",
          title: "杂货铺9",
        }]
      }]
    }
  }]
}

module.exports = {
  productList: product_database,
  categoryItem: categoryItem,
  furCategory: categoryItem.categories.furCategory,
}