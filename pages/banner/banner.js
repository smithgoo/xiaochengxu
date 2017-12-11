Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var post_content1 = [
      {
        date: "sep 18 2017",
        title: "正是虾肥蟹壮时",
        content: "还时常记得出游溪亭，一玩就玩到日黑天暮，深深地沉醉，而忘记归路。一直玩到兴尽，回舟返途，却迷途进入藕花的深处。大家争着划呀，船儿抢着渡，惊起了满滩的鸥鹭。",
        view_num: "121",
        collect_num: "96",
        author_img: "/images/1.png",
        post_img: "/images/1.png",
      },
      {
        date: "sep 18 2017",
        title: "正是虾肥蟹壮时",
        content: "还时常记得出游溪亭，一玩就玩到日黑天暮，深深地沉醉，而忘记归路。一直玩到兴尽，回舟返途，却迷途进入藕花的深处。大家争着划呀，船儿抢着渡，惊起了满滩的鸥鹭。",
        view_num: "121",
        collect_num: "96",
        author_img: "/images/1.png",
        post_img: "/images/1.png",
      }
    ]
     
      this.setData({
        post_key:post_content1
        });
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