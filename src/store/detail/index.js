import {reqGoodsInfo,reqAddORUpdateShopCart} from '@/api/index'
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodsInfo:{},
    uuid_token:getUUID(),
};
const mutations = {
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo=goodsInfo
    },
};
const actions = {
    // 通过api里的接口函数调用 发请求获取服务器数据
    async getGoodsInfo({commit},skuId){ 
        let reslut = await reqGoodsInfo(skuId);
        if(reslut.code==200){ 
            commit('GETGOODSINFO',reslut.data)
        }
    },
    //将产品添加到购物车中
    async addORUpdateShopCart({commit},{skuId,skuNum}){
        let reslut = await reqAddORUpdateShopCart(skuId,skuNum);
        if(reslut.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||[]
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}