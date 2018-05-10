var textdata = require("../textdata/textdata")
var disabled = 'disabled';//控制提交按钮是否可按，为空字符串时可按
var counter = 1;//记录已答题数
var currentId = [];//记录每次点击的题目的id;
var chooseId = [];//记录答题的选项
var score = 0;// 记录分数；
var right = 0;//记录正答数目；
var error = 0;//记录错答数目
Page({
  data: {
    minute: 10,
    second: 0,
    disabled: "",
    Interval: "", //转接计时器事件句柄
    reslut: "",
    state:true,//控制choose事件是否生效
    hiddenmodalput: true,//控制modal的显隐状态，true为隐藏
    name: "",//记录学生的名字
    studentid: ""//记录学生的学号
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
    var iy = setInterval(function () { that.timer() }, 1000);
    that.setData({
      Interval: iy
    });
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
    if (this.data.state) {
      var id = event.currentTarget.dataset.id;
      var num = event.currentTarget.dataset.num;
      /**判断是否已做完所有题目，做完提交按钮才可按**/

      chooseId[num] = id;//记录每一题的选项；
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


      /***进行各题之间的单项选择,给出相应显示*/
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
    }
  },
  /*倒计时函数*/
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
  },
  /**提交函数，统计分数，给出提示 */
  submit: function () {
    var that = this;
    textdata.textdata.forEach((item, index) => {
      if (item.answer == chooseId[index]) {
        score += 3;
        right++;
      } else {
        error++;
        if (chooseId[index] == 1) {
          item.imageurl.imageurlA = "../images/false.png";
          if (item.answer == 2) { item.imageurl.imageurlB = "../images/true.png" };
          if (item.answer == 3) { item.imageurl.imageurlC = "../images/true.png" };
          if (item.answer == 4) { item.imageurl.imageurlD = "../images/true.png" };
        };
        if (chooseId[index] == 2) {
          item.imageurl.imageurlB = "../images/false.png";
          if (item.answer == 1) { item.imageurl.imageurlB = "../images/true.png" };
          if (item.answer == 3) { item.imageurl.imageurlC = "../images/true.png" };
          if (item.answer == 4) { item.imageurl.imageurlD = "../images/true.png" };
        };
        if (chooseId[index] == 3) {
          item.imageurl.imageurlC = "../images/false.png";
          if (item.answer == 1) { item.imageurl.imageurlB = "../images/true.png" };
          if (item.answer == 2) { item.imageurl.imageurlC = "../images/true.png" };
          if (item.answer == 4) { item.imageurl.imageurlD = "../images/true.png" };
        };
        if (chooseId[index] == 4) {
          item.imageurl.imageurlD = "../images/false.png";
          if (item.answer == 1) { item.imageurl.imageurlB = "../images/true.png" };
          if (item.answer == 2) { item.imageurl.imageurlC = "../images/true.png" };
          if (item.answer == 3) { item.imageurl.imageurlD = "../images/true.png" };
        };

      }

    });
    disabled = 'disable';
    this.setData({
      score: score,
      disabled: disabled,
      textdata: textdata.textdata,
      right: right,
      error: error,
      reslut: "true",
      state:false,
      hiddenmodalput: !this.data.hiddenmodalput
    });
    clearInterval(that.data.Interval);//停止计时
  },
  userNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  studentidInput: function (e) {
    this.setData({
      studentid: e.detail.value
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      name: "",
      studentid: ""
    })
  },
  //确认  
  confirm: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 1000
    });
    this.setData({
      hiddenmodalput: true
    });
    wx.pageScrollTo({
      scrollTop: 0
    })
    console.log("姓名：" + this.data.name + " 学号：" + this.data.studentid);
  }    
})