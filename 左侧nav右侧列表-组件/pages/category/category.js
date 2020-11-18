// pages/category/category.js
var util = require('../../utils/util.js');
var courseData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let _this = this;
    let categoryArr = util.getCategory();
    _this.setData({
      categories: categoryArr
    });
    // console.log("onLoad");
    // console.log(categoryArr);
  },

  //左侧选择标题
  selectTab: function (event) {
    let _this = this,
      //index是指左侧栏商品分类号
      index = event.currentTarget.dataset.index,
      categoryArr = _this.data.categories;
    // console.log("selectTab");
    // console.log(categoryArr[0].active);
    // console.log(event);
    for (let i = 0; i < categoryArr.length; i++) {
      categoryArr[i].active = ""; //false
    }
    categoryArr[index].active = "true";
    _this.setData({
      categories: categoryArr
    });
  },

  //右侧选中某一标题跳转商品列表页
  onGoodsTap: function (e) {
    //index是指右侧商品id号
    // console.log(e) // 打印出--》点击的是哪个商品
    let index = e.currentTarget.dataset.postid;
    let goodsimg = e.currentTarget.dataset.goodsimg;
    let title = e.currentTarget.dataset.title;
    // 把商品的信息缓存下来，并命名为category_key，
    wx.setStorage({
      key: 'category_key',
      data: {
        title,
        index,
        goodsimg
      },
      //在缓存成功后，携带参数--》跳转到商品详细信息页面
      success: function () {
        wx.navigateTo({
          url: '/pages/productInfo/productInfo?id=' + index 
               + "&title" + title + "&goodsimg" + goodsimg,
        })
      }
    })
  }
})