Page({
  data: {},
  onLoad: function () {
    var that = this;

    wx.login({
      success: function (res) {
        wx.getUserInfo({
          withCredentials: false,
          success: function (res) {

            that.setData({
              nickName: res.userInfo.nickName,
              avatarUrl: res.userInfo.avatarUrl,
            })
          },
          complete: function () {

          }
        })
      }
    })

  },
  gotopage1:function(){
    wx.redirectTo({
      url: '../page1/page1',
    })
  },
  description: function () {
    wx.showModal({
      title: '答题说明',
      content: '答题时间为10分钟，共有10道单选题10道是非题，每道题3分，共60分，答题结束后记得填写姓名及学号！',
      showCancel: false,
      confirmText:'我知道了'
    })}
  /**/

})

