// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 列表
async function list(params) {
  let skip = (params.page - 1) * params.size
  return await db.collection('movies').skip(skip).limit(params.size).get()
}

// 详情
async function detail(params) {
  return await db.collection('movies').doc(params.id).get()
}

// 路由控制
const controlers = {
  'list': list,
  'detail': detail
}

// 云函数入口函数
exports.main = async(event, context) => {
  return controlers[event.name](event.params)
}