// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
    },
    value: 3,
  },

  getData() {
    wx.cloud.callFunction({
      name: 'movies',
      data: {
        name: 'detail',
        params: {
          id: this.data.detail.id,
        }
      }
    }).then(res => {
      console.log(res.result.data)
      this.setData({
        detail: res.result.data
      })

    })
  },

  onChange: function (event){
    this.setData({
      value: event.detail,
    });
  },

  onClickLeft() {
    console.log('onClickLeft')
    wx.navigateBack()
  },

  handleSubmit(){
    wx.showToast({
      title: '评价成功',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      detail: {
        id: options.movieid
      }
    })
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})