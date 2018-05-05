// page3.js
var follow=false;
var imageurl;
Page({
  data: {
  imageurlA:'',
  imageurlB: '',
  imageurlC: '',
  imageurlD: '',
  minute: 10,
  second: 0
  },
  onLoad: function (options) {
  
  },
 
  onReady: function () {
    var that = this;
     setInterval(function () { that.timer() }, 1000);
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
  gotopage3:function(){
    wx.navigateTo({
      url: '../page3/page3',
      
    })
  },
  chooseA:function(){
    
   
     this.setData({
       imageurlA: '../images/true.png',
       imageurlB:'',
       imageurlC:'',
       imageurlD:''
     });
    
  },
  chooseB: function () {
    this.setData({
      imageurlA: '',
      imageurlB: '../images/true.png',
      imageurlC: '',
      imageurlD: ''
    });
  },
  chooseC: function () {
    this.setData({
      imageurlA: '',
      imageurlB: '',
      imageurlC: '../images/true.png',
      imageurlD: ''
    });
  },
  chooseD: function () {
    this.setData({
      imageurlA: '',
      imageurlB: '',
      imageurlC: '',
      imageurlD: '../images/true.png'
    });
  },
  timer: function () {
    var that = this;

    if (that.data.second == 0) {
      that.setData({
        second: 59,
        minute: that.data.minute - 1
      })
    } else {
      that.setData({
        second: that.data.second - 1
      })
    }
  }
})