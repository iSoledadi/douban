// pages/moremovie/moremovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreid:"",
    list:[
      { id: 1, img_url: "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2541280047.jpg", title: "海王", star: "79", score: "7.9" },
      { id: 2, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2532371671.jpg", title: "又是一年三月三", noscore:"暂无评分" },
      { id: 3, img_url: "/pages/static/img/introduce/movie6.jpg", title: "龙猫", star: "91", score: "9.1" },
      { id: 4, img_url: "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2541742368.jpg", title: "中国合伙人2", star: "43", score: "4.3" },
      { id: 5, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542848758.jpg", title: "网络迷踪", star: "85", score: "8.5" },
      { id: 6, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540940050.jpg", title: "印度合伙人", star: "77", score: "7.7" },
      { id: 7, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2539666559.jpg", title: "绿毛怪格林奇", star: "64", score: "6.4" },
      { id: 8, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540513831.jpg", title: "狗十三", star: "84", score: "8.4" },
      { id: 9, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg", title: "无名之辈", star: "82", score: "8.2" },
      { id: 10, img_url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2537158013.jpg", title: "毒液：致命守护者", star: "73", score: "7.3" },
      { id: 11, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542212488.jpg", title: "淡蓝琥珀", star: "65", score: "6.5" },
      { id: 12, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541310016.jpg", title: "片警宝音", noscore: "暂无评分"},
      { id: 13, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538352472.jpg", title: "憨豆特工3", star: "66", score: "6.6" },
      { id: 14, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538063852.jpg", title: "午夜整容室", noscore:"暂无评分" },
      { id: 15, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541659816.jpg", title: "照相师", noscore: "暂无评分" },
      { id: 16, img_url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2537667301.jpg", title: "无敌破坏王2", star: "82", score: "8.2" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.x);
    this.setData({
      moreid:options.x
    });
    // wx.setNavigationBarTitle({
    //   title: '哈哈哈'
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})