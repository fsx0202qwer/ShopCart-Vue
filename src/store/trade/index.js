import { reqAddressInfo,reqOrderInfo } from "@/api/index";
const state = {
    address:[],
    oderInfo:{},
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address=address;
    },
    GETORDERINFO(state,oderInfo){
        state.oderInfo=oderInfo;
    }
};
const actions = {
    // 获取用户地址信息
    async getUserAddress({commit}) {
        let reslut = await reqAddressInfo();
        if(reslut.code==200){
            commit('GETUSERADDRESS',reslut.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取商品清单数据
    async getOrderInfo({commit}) {
        let reslut = await reqOrderInfo();
        if(reslut.code==200){
            commit('GETORDERINFO',reslut.data);
            return 'ok'
        }
    },
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}

