//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  toCenter(e){
    this.setData({
      inputTxt:null,
      iscenter: true
    })
  },
  inInput(){
    this.setData({
      iscenter:false
    })
  },
  enterDetail(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail'+id+'/detail'+id,
    })
  },
  jumpExam2(e){
    var x = e.target.dataset.id;
    console.log(e.target)
    console.log(e.target.dataset.id);
    wx.navigateTo({
      url: '/pages/moremovie/moremovie?x=' + x,
    })
  },
  data: {
    inputTxt:'',
    iscenter:true,
    indexid:66,
    list1:[
      { id: 1, img_url: "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2541280047.jpg", title: "海王", star:"75",score:"7.5"},
      { id: 2, img_url: "https://img1.doubanio.com/view/photo/l/public/p537667467.jpg", title: "龙猫", star: "91", score: "9.1" },
      { id: 3, img_url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2537158013.jpg", title: "毒液：致命守护者", star: "73", score: "7.3" },
      { id: 4, img_url: "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2537667301.jpg", title: "无敌破坏王2", star: "82", score: "8.2" },
      { id: 5, img_url: "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2541742368.jpg", title: "中国合伙人2",  noscore: "暂无评分" }
      ],
    list2: [
      { id: 3, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.jpg", title: "影", star: "73", score: "7.3" },
      { id: 5, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.jpg", title: "邪不压正", star: "73", score: "7.3" },
      { id: 4, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533384240.jpg", title: "李茶的姑妈", star: "48", score: "4.8" },
      { id: 2, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2538345957.jpg", title: "你好，之华", star: "69", score: "6.9" },
      { id: 1, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532668828.jpg", title: "塔巴德", star: "74", score: "7.4" } 
    ],
    list3: [  
      { id: 2, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538424795.jpg", title: "我是大哥大", star: "92", score: "9.2" },
      { id: 4, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535085957.jpg", title: "生活大爆炸 第十二季", star: "94", score: "9.4" },
      { id: 3, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541740604.jpg", title: "浪漫星星", star: "73", score: "7.3" },
      { id: 5, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541649132.jpg", title: "风味人间", star: "92", score: "9.2" },
      { id: 1, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541016697.jpg", title: "那座城这家人", star: "79", score: "7.9" }
    ],
    list4: [
      { id: 5, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541540687.jpg", title: "国家宝藏 第二季", star: "94", score: "9.4" },
      { id: 1, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538657890.jpg", title: "即刻电音", star: "66", score: "6.6" },
      { id: 2, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534172628.jpg", title: "新西游记", star: "97", score: "9.7" },
      { id: 4, img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2538347989.jpg", title: "吐槽大会 第三季", star: "62", score: "6.2" },
      { id: 3, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537957246.jpg", title: "上新了·故宫", star: "82", score: "8.2" }
    ],
    list5: [
      { id: 4, img_url: "https://img1.doubanio.com/view/subject/m/public/s29634528.jpg", title: "月亮与六便士", star: "88", score: "8.8" },
      { id: 2, img_url: "https://img3.doubanio.com/view/subject/m/public/s26012674.jpg", title: "三体Ⅲ", star: "92", score: "9.2" },
      { id: 3, img_url: "https://img3.doubanio.com/view/subject/m/public/s6100756.jpg", title: "人间失格", star: "82", score: "8.2" }, 
      { id: 5, img_url: "https://img3.doubanio.com/view/subject/m/public/s29497122.jpg", title: "罗生门", star: "85", score: "8.5" },
      { id: 1, img_url: "https://img3.doubanio.com/view/subject/m/public/s29053580.jpg", title: "活着", star: "93", score: "9.3" }
    ],
    list6: [
      { id: 3, img_url: "https://img3.doubanio.com/view/subject/m/public/s29939471.jpg", title: "大眠", star: "87", score: "8.7" },
      { id: 1, img_url: "https://img3.doubanio.com/view/subject/m/public/s29942381.jpg", title: "Tell Me It's Over", star: "63", score: "6.3" },
      { id: 5, img_url: "https://img1.doubanio.com/view/subject/m/public/s29942718.jpg", title: "时候", star: "85", score: "8.5" },
      { id: 2, img_url: "https://img3.doubanio.com/view/subject/m/public/s29941411.jpg", title: "舒适圈", star: "90", score: "9.0" },
      { id: 4, img_url: "https://img3.doubanio.com/view/subject/m/public/s29932511.jpg", title: "恒温动物", star: "83", score: "8.3" },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
