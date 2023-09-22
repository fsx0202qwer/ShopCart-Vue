// 管理所有的 api 接口
import requests from "./request";
import mockRequests from './mockAjax'
// 三级联动接口 
// 请求地址 /api/product/getBaseCategoryList 
export const reqCategoryList = ()=>requests.get('/api/product/getBaseCategoryList')
export const reqGetBannerList =()=>mockRequests.get('/banner')
export const reqGetFloorList =()=>mockRequests.get('/floor')
export const reqGetSearchInfo =(parmas)=>requests({url:"/api/list",method:"post",data:parmas}) 
export const reqGoodsInfo =(skuId)=>requests({url:`/api/item/${ skuId }`,method:"get"}) 
// 添加或者更新一个产品 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddORUpdateShopCart =(skuId,skuNum)=>requests({url:`/api/cart/addToCart/${ skuId }/${ skuNum }`,method:"post"}) 
// 获取购物车列表 /api/cart/cartList
export const reqCartList =()=>requests({url:`/api/cart/cartList`,method:"get"}) 
// 删除购物车商品
export const reqDeleteCartById =(skuId)=>requests({url:`/api/cart/deleteCart/${skuId}`,method:"delete"}) 
//切换商品选中的状态/api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedByid =(skuId,isChecked)=>requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:"get"}) 
// 获取验证码
export const reqGetCode =(phone)=>requests({url:`/api/user/passport/sendCode/${phone}`,method:"get"}) 
// 注册 /api/user/passport/register
export const reqUserRegister =(data)=>requests({url:`/api/user/passport/register`,method:"post",data}) 
//  登录 /api/user/passport/login
export const reqUserLogin =(data)=>requests({url:`/api/user/passport/login`,method:"post",data})
// 获取用户信息 /api/user/passport/auth/getUserInfo
export const reqUserInfo =()=>requests({url:`/api/user/passport/auth/getUserInfo`,method:"get"})
// 退出登录
export const reqLogout =()=>requests({url:`/api/user/passport/logout`,method:"get"})
// 获取用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo =()=>requests({url:`/api/user/userAddress/auth/findUserAddressList`,method:"get"})
// 获取商品清单数据 reqOrderInfo 
export const reqOrderInfo =()=>requests({url:`/api/order/auth/trade`,method:"get"})
// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo} 
export const reqSubmitOrder =(tradeNo,data)=>requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"})
// 获取订单支付信息  /api/payment/weixin/createNative/{orderId} 
export const reqPayInfo =(orderId)=>requests({url:`/api/payment/weixin/createNative/${orderId}`,method:"get"})
// 查询支付的状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus =(orderId)=>requests({url:`/api/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
