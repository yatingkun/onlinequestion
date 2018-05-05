 var textdata=require("../textdata/textdata")

Page({


  data: {
  },
  onLoad: function () {
    /*var that = this;
    wx.request({
      url: 'http://193.112.6.40/course/data/get-all-question.do',

      header: { "Content-Type": "" },
      success: function (res) {
        var resdata = res.data.data
        that.setData({
          resdata: resdata
        });
        console.log(resdata);
      }
    });*/
    this.setData({
      textdata:textdata.textdata
    });
console.log(textdata.textdata);
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

  },
  gotopage2: function () {
    wx.navigateTo({
      url: '../page2/page2',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})