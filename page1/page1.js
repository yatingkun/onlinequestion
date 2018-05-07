 var textdata=require("../textdata/textdata")

Page({


  data: {
    
  },
  onLoad: function () {
  var that = this;
   /* wx.request({
      url: 'http://193.112.221.133/data/get-all-selectquestion-and-answer.do',

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
//console.log(textdata.textdata);
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

  choose:function(event){
    var id = event.currentTarget.dataset.id;
    var num = event.currentTarget.dataset.num;
    if(id==1){
    textdata.textdata[num].imageurl.imageurlA="../images/true.png";
    textdata.textdata[num].imageurl.imageurlB= "";
    textdata.textdata[num].imageurl.imageurlC = "";
    textdata.textdata[num].imageurl.imageurlD = "";
    };
    if (id == 2) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "../images/true.png";
      textdata.textdata[num].imageurl.imageurlC = "";
      textdata.textdata[num].imageurl.imageurlD = "";
    }
    if (id == 3) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "";
      textdata.textdata[num].imageurl.imageurlC = "../images/true.png";
      textdata.textdata[num].imageurl.imageurlD = "";
    }
    if (id == 4) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "";
      textdata.textdata[num].imageurl.imageurlC = "";
      textdata.textdata[num].imageurl.imageurlD = "../images/true.png";
    }
    this.setData({
      textdata: textdata.textdata
    })
    
  
  },
  
})