


//获取应用实例  
var app = getApp()
Page({
  /*showok: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  } ,
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }*/
  data: {
    hiddenmodalput: true ,//控制modal的显隐状态，true为隐藏
    name:"",//记录学生的名字
    studentid:""//记录学生的学号
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框  
  },
  //点击按钮痰喘指定的hiddenmodalput弹出框  
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
      
    })
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
    })
    this.setData({
      hiddenmodalput: true
    })
    console.log("姓名：" + this.data.name + " 学号：" + this.data.studentid);
  }    
})
