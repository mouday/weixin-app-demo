// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 5,
    list: []

  },

  getData: function() {

    wx.showLoading({
      title: '加载中',
    })

    wx.cloud.callFunction({
      name: 'movies',
      data: {
        name: 'list',
        params: {
          page: this.data.page,
          size: this.data.size
        }
      }
    }).then(res => {
      console.log(res.result.data)

      // 如果是第一页就清空列表
      if (this.data.page == 1) {
        this.setData({
          list: res.result.data
        })
      } else {
        this.setData({
          list: this.data.list.concat(res.result.data)
        })
      }

      //  停止下拉
      wx.stopPullDownRefresh()
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
    })
  },

  handleItemClick(event) {
    console.log(event)
    let movieid = event.target.dataset.movieid;

    wx.navigateTo({
      url: `../comment/comment?movieid=${movieid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
    console.log('onPullDownRefresh')

    this.setData({
      page: 1
    });
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('onReachBottom')
    this.setData({
      page: this.data.page + 1
    });
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})