var textdata = require("../textdata/textdata")
var disabled = 'false';//控制提交按钮是否可按，为空时可按
var counter = 1;//记录已答题数
var currentId = [];//记录每次点击的题目的id;
Page({


  data: {
    minute: 10,
    second: 0,
    disabled: ""
  },
  onLoad: function () {
    //var that = this;
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
      textdata: textdata.textdata,
      disabled: disabled
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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

  choose: function (event) {
    var id = event.currentTarget.dataset.id;
    var num = event.currentTarget.dataset.num;
    if (counter <= textdata.textdata.length ) {
      currentId.push(num);
      if (currentId.length == 2) {
        if (currentId[0] == currentId[1]) {
          currentId = currentId.slice(1, 2);
        } else {
          counter++;
          currentId = currentId.slice(1, 2);
        }
      }
      if (counter == textdata.textdata.length) {
        disabled = '';
        this.setData({
          disabled: disabled
        });

      }
    }
    //console.log(textdata.textdata.length);
    //console.log(counter);
    if (id == 1) {
      textdata.textdata[num].imageurl.imageurlA = "../images/true.png";
      textdata.textdata[num].imageurl.imageurlB = "";
      textdata.textdata[num].imageurl.imageurlC = "";
      textdata.textdata[num].imageurl.imageurlD = "";
    }
    else if (id == 2) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "../images/true.png";
      textdata.textdata[num].imageurl.imageurlC = "";
      textdata.textdata[num].imageurl.imageurlD = "";
    }
    else if (id == 3) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "";
      textdata.textdata[num].imageurl.imageurlC = "../images/true.png";
      textdata.textdata[num].imageurl.imageurlD = "";
    }
    else if (id == 4) {
      textdata.textdata[num].imageurl.imageurlA = "";
      textdata.textdata[num].imageurl.imageurlB = "";
      textdata.textdata[num].imageurl.imageurlC = "";
      textdata.textdata[num].imageurl.imageurlD = "../images/true.png";
    }
    this.setData({
      textdata: textdata.textdata
    })

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