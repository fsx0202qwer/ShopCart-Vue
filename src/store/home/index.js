import {reqCategoryList} from '@/api/index'
import {reqGetBannerList} from '@/api/index'
import {reqGetFloorList} from '@/api/index'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList;
    },
};
const actions = {
    // 通过api里的接口函数调用 发请求获取服务器数据
     async categoryList({commit}){ 
        let reslut = await reqCategoryList();
        if(reslut.code==200){ 
            commit('CATEGORYLIST',reslut.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({commit}){
       let reslut = await reqGetBannerList();
        if(reslut.code==200){ 
            commit('GETBANNERLIST',reslut.data)
        }
    },
    //获取轮播图数据
    async getFloorList({commit}){
        let reslut = await reqGetFloorList();
         if(reslut.code==200){ 
             commit('GETFLOORLIST',reslut.data)
         }
     }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}