// pages/detail1/detail1.js
const TxvContext = requirePlugin("tencentvideo");
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  getVideoInfo(vedio) {
    if (!vedio) return;
    var vid = vedio.substring(vedio.lastIndexOf('/') + 1, vedio.lastIndexOf('html') - 1);
    var that = this;
    var urlString = 'https://vv.video.qq.com/getinfo?otype=json&appver=3.2.19.333&platform=11&defnpayver=1&vid=' + vid;
    wx.request({
      url: urlString,
      success: function (res) {
        var dataJson1 = res.data.replace(/QZOutputJson=/, '')+"qwe";
        var dataJson = dataJson1.replace(/;qwe/, '');
        var data = JSON.parse(dataJson);
        var fileName = data['vl']['vi'][0]['fn'];
        var fvkey = data['vl']['vi'][0]['fvkey'];
        var host = data['vl']['vi'][0]['ul']['ui'][2]['url']
        that.setData({
          videoUrl: host + fileName + '?vkey=' + fvkey
        });
      }
    })
  },
  doAgree(e){
  //  console.log(e.target.dataset.id)
    var i = e.target.dataset.id-1;
  //  console.log(this.data.list3[eee].agreeNum);
    if (!this.data.list3[i].isagree){
      this.data.list3[i].agreeNum++;
      this.data.list3[i].isagree = true;
      this.setData({
        list3: this.data.list3
      })
    }else{
      this.data.list3[i].agreeNum--;
      app.globalData.agreeNum1 = this.data.list3[i].agreeNum;
      this.data.list3[i].isagree = false;
      app.globalData.isagree1 = false;
      this.setData({
        list3: this.data.list3
      })
    } 
    if (i == 0) {
      app.globalData.agreeNum1 = this.data.list3[0].agreeNum;
      app.globalData.isagree1 = this.data.list3[0].isagree;
    } else if (i == 1) {
      app.globalData.agreeNum2 = this.data.list3[1].agreeNum;
      app.globalData.isagree2 = this.data.list3[1].isagree;
    } else if (i == 2) {
      app.globalData.agreeNum3 = this.data.list3[2].agreeNum;
      app.globalData.isagree3 = this.data.list3[2].isagree;
    } else if (i == 3) {
      app.globalData.agreeNum4 = this.data.list3[3].agreeNum;
      app.globalData.isagree4 = this.data.list3[3].isagree;
    }
  },
  showIntroduce(){
    this.setData({
      isShowAllContent: !this.data.isShowAllContent
    });
    if (this.data.isShowAllContent){
      this.setData({
        showtext:"收起"
      })
    }else{
      this.setData({
        showtext: "展开"
      })
    }
  },
  data: {
    videoUrl:"",
    isShowAllContent:false,
    showtext:"展开",
    // isAgree:"",
    // isAddnum:false,
    list1: [
      { id: 1, img_url: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509950363.8.jpg", name: "温子仁", job: "导演" },
      { id: 2, img_url: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32853.jpg", name: "杰森·莫玛", job: "演员" },
      { id: 3, img_url: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.jpg", name: "威廉·达福", job: "演员" },
      { id: 4, img_url: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p619.jpg", name: "妮可·基德曼", job: "演员" },
      { id: 5, img_url: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1443946322.86.jpg", name: "林路迪", job: "演员" }
    ],
    list2: [
      { id: 1, img_url: "https://img1.doubanio.com/view/photo/s/public/p2459657787.jpg"},
      { id: 2, img_url:"https://img1.doubanio.com/view/photo/s/public/p2459657787.jpg"},
      { id: 3, img_url:"https://img3.doubanio.com/view/photo/s/public/p2456697541.jpg"},
      { id: 4, img_url:"https://img3.doubanio.com/view/photo/s/public/p2536095975.jpg"},
      { id: 5, img_url:"https://img3.doubanio.com/view/photo/s/public/p2528710385.jpg"},
      { id: 6, img_url:"https://img1.doubanio.com/view/photo/s/public/p2459658549.jpg"}
    ],
    list3:[
      {
        id: 1, img_url: "https://img1.doubanio.com/icon/up63688511-18.jpg",name:"凌睿", star: 95,date:"12月3日", container: " 精美绝伦的水下世界，宏伟瑰丽的海底奇观，堪称“海底《阿凡达》，水下潘多拉”。亚特兰蒂斯的史诗级战争气势磅礴，媲美《星球大战》和《指环王》。动作戏登峰造极，拳拳到肉，让人再次感受《钢铁之躯》的震撼。飞船追逐更是眼花缭乱，引人入胜，仿佛把《速度与激情》搬到了海底。寻找三叉戟的探险之旅同样其乐无穷，妙趣横生，又是《夺宝奇兵》的再现。影片核心又回归到对家庭的探索和对自我的肯定，承载着成长和母爱，自信和亲情。最后一个镜头让人热泪盈眶，正如托马斯终于等到与妻子重逢，我们也终于等到DC近几年最优秀的电影。温子仁如卡梅隆和彼得·杰克逊附体，拍了一部动作、冒险、奇幻、超英等元素的集大成者。它是《黑暗骑士》之后最好的超级英雄电影之一，从此影史将记住《海王》的名字。", agree: "/pages/static/img/detail1/agree2.png", noagree: "/pages/static/img/detail1/agree.png",agreeNum:8970,isagree:false},
      {
        id: 2, img_url: "https://img3.doubanio.com/icon/up2866549-132.jpg", name: "陆支羽", star: 83, date: "12月4日", container: "1.从造梦层面而言，温子仁真的远超我的预期；如果你觉得这也算失手，那我无话可说，只能闭嘴。2.这场梦始于失落的亚特兰蒂斯，继而又按图索骥，如探索迷宫般牵引出整座深海帝国的神秘版图，看似不过闯关游戏式的老套路，其实还是以西方古典神话为模本的，类似亚瑟王寻找圣杯。3.固然温子仁并没有全然秉承DC的暗黑风格，但那场海王亚瑟与守护三叉戟的海怪之间的对话，着实是以DC的方式丰满了角色。4.要说不足，西西里跑酷略显脱节，而海底决战时刻有点场面失控。", agree: "/pages/static/img/detail1/agree2.png", noagree: "/pages/static/img/detail1/agree.png", agreeNum: 5499,isagree: false
      },
      {
        id: 3, img_url: "https://img3.doubanio.com/icon/up1400288-41.jpg", name: "无耻不混蛋", star: 77, date: "12月4日", container: "温子仁就是“狂”，并且简直就是个“技术狂人”啊。斯皮尔伯格、卢卡斯、卡梅隆之后，就是温子仁了。世界顶级技术型导演，从此以后，有了一名华裔，温子仁！！！他怎么可以把一部超英片，拍得如此上天入海、天花乱坠、无所不用其极啊。", agree: "/pages/static/img/detail1/agree2.png", noagree: "/pages/static/img/detail1/agree.png", agreeNum: 4733, isagree: false
      },
      {
        id: 4, img_url: "https://img1.doubanio.com/icon/up1005928-127.jpg", name: "无耻不混蛋", star: 70, date: "12月5日", container: "海底世界戏份多到超出想象，这是一部主打海洋英雄的片应有的样子，一本满足。撒哈拉沙漠、西西里岛、海沟族追逐戏、地心藏海…奔波全球海洋奇观，上天入地，美不胜收。温子仁手下的DC，不再暗黑，情节跌宕又完整，正如他的恐怖片一样吸人，吸入深海底。亚特兰蒂斯与亚瑟的历史传说，完美融入超级英雄剧情，陆地之子抑或海洋之王，海王不止粗汉也有柔情，三叉戟秒变金箍棒，这不就是《西游记之大闹龙宫》？红发女主的造型很美，特别是水母服。“海洋的世界里没有眼泪” 几十年的灯塔守护直接戳泪，爱一个人不就是这样的无私与痴情？2018最佳娱乐大赏，《狮子王》版《海底总动员》，《黑暗骑士》后最好的DC院线片。", agree: "/pages/static/img/detail1/agree2.png", noagree: "/pages/static/img/detail1/agree.png", agreeNum: 4021, isagree: false
      },
    ],
    list4:[
      { id: 1, img_url:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539424621.jpg",title:"神奇动物：格林德沃之罪（2018）",star:72,score:7.2},
      { id: 2, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2388501883.jpg", title: "奇异博士", star: 76, score: 7.6 },
      { id: 3, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg", title: "复仇者联盟3：无限战争", star: 81, score: 8.1 },
      { id: 4, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p804947166.jpg", title: "哈利·波特与魔法石", star: 88, score: 8.8 },
      { id: 5, img_url: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg", title: "碟中谍6：全面瓦解", star: 82, score: 8.2 }
    ],
    list5:[
      { id: 1, img_url: "https://img1.doubanio.com/icon/user_normal.jpg", name: "Swagweiner", star: 40, title: "海王：提前两周的失望", contain: " 昨天晚上看完海王全球首发，我是一脸懵逼的，从Batman begin开始看了所有DC漫威的电影首映的我 其震撼程度仅仅次于绿灯侠，当然，是不好的震撼。期待了整整大半年的我感觉吃了慢慢一口热翔，失望二字不足以描述我当时观影的心情，看完以后我脑海里没有回想任何一处电影的画面，闪过的全是当年绿灯侠回忆。是的，我对海王的感觉，是和绿灯侠一档的，但绝对比绿灯侠要好一点，毕竟是领先了八年的CG技术，还有温子仁导演动作场面的调度还是很棒的，但是在剧情走向，世界观的塑造，人物的塑造 还有其想要探讨和表达的信息，都是幼稚园级别的 再上豆瓣再看看别人的评价我的下巴简直掉到了亚特兰蒂斯深海里 普遍的评价是 爽 牛逼 DC崛起了 DCEU最好的电影 让我再也沉不住气 也想来说一说这海王到底烂在哪里。", reply: 2354, agree: 3789, forward: 117},
      {
        id: 2, img_url: "https://img3.doubanio.com/icon/u37142357-10.jpg", name: "彩蛋君KL", star: 80, title: "《海王》隐藏彩蛋与漫画关联终极分析", contain: "DC电影《海王》上映以来好评如潮，从被嘲讽suckman到如今成为DCEU的口碑救世主，DC粉丝可以说是如同过年了。影片在导演温子仁的掌控下呈现出一场精美绝伦的视觉盛宴，而对漫画元素的完美还原更为影片加分不少，下面彩蛋君就来为大家挖出影片中深藏海底的漫画关联与彩蛋细节!", reply: 134, agree: 1458, forward: 83 },
      {
        id: 3, img_url: "https://img1.doubanio.com/icon/u63688511-18.jpg", name: "凌睿", star: 83, title: "只要能和鱼说话，走遍天下都不怕。", contain: "江湖上流传着这样一个传说：长得像徐锦江的男孩，运气都不会太差。而我们的主人公就是这样一个人。他，是一个长得很像徐锦江的超级英雄。他是个大胡子，不喜欢穿衣服。他肌肉发达，刀枪不入。他是王后的儿子，不过他的国王路并不顺畅，因为他的弟弟总是跟他争夺王位。他的弟弟仇恨人类，但是颜值很高，所以仍然圈粉无数。", reply: 241, agree: 1753, forward: 104
      },
      {
        id: 4, img_url: "https://img3.doubanio.com/icon/u1147248-30.jpg", name: "潘萌SoPhia", title: "温子仁与他的亚特兰蒂斯（一篇献给DC、温导和《海王》真爱粉的超长专访❤️ ）", contain: "关于《海王》，跟温子仁导演总共聊了三回，一次是圣地亚哥动漫展之前，一次是在他的剪辑室观看尚未全部做完后期的片花，还有之后的专访。去剪辑室探班的那次，同行有一位澳洲的老记者，是当年大力报道《电锯惊魂》系列的，温导一眼认出他来，紧紧握手感谢。之后的专访谈到海王角色的身份归属感，他结合从小到大的经历，也给出了非常真挚的回应。", reply: 50, agree: 686, forward: 54
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '海王'
    });
    this.getVideoInfo('https://v.qq.com/x/cover/l8r3gm1zzu5u3nk/v0816bg8r40.html');
    var agreeNum1=app.globalData.agreeNum1;
    var isagree1 = app.globalData.isagree1;
    this.data.list3[0].agreeNum = agreeNum1;
    this.data.list3[0].isagree = app.globalData.isagree1;
    this.data.list3[1].agreeNum = app.globalData.agreeNum2;
    this.data.list3[1].isagree = app.globalData.isagree2;
    this.data.list3[2].agreeNum = app.globalData.agreeNum3;
    this.data.list3[2].isagree = app.globalData.isagree3;
    this.data.list3[3].agreeNum = app.globalData.agreeNum4;
    this.data.list3[3].isagree = app.globalData.isagree4;
    this.setData({list3:this.data.list3})
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
    this.getVideoInfo('https://v.qq.com/x/cover/l8r3gm1zzu5u3nk/v0816bg8r40.html');
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