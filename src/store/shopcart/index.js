import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api/index";

const state = {
    cartList:[],
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    },
};
const actions = {
    // 获取购物车列表
    async getCartList({ commit }) {
        let reslut = await reqCartList();
        if (reslut.code == 200) {
            commit('GETCARTLIST', reslut.data)
        }
    },
    // 删除购物车商品
    async deleteCartListBySkuId({commit},skuId) {
        let reslut = await reqDeleteCartById(skuId);
        if(reslut.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 修改购物车商品选中的状态 reqUpdateCheckedByid
    async updateCheckedByid({commit},{skuId,isChecked}) {
        let reslut = await reqUpdateCheckedByid(skuId,isChecked);
        if(reslut.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({dispatch,getters}){
        getters.cartList.cartInfoList.forEach(item => {
            if(item.isChecked==1){
                dispatch('deleteCartListBySkuId',item.skuId);
            }
        });
    },
    //修改全部商品的状态
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll=[];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedByid',{skuId:item.skuId,isChecked})
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }  
}
const getters = {
    cartList(state){
         return state.cartList[0]||{}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}