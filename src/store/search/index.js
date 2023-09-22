import { reqGetSearchInfo } from "@/api/index";
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};
const actions = {
    async getSearchList({ commit }, parmas = {}) {
        let reslut = await reqGetSearchInfo(parmas);
        if (reslut.code == 200) {
            commit('GETSEARCHLIST', reslut.data)
        }
    }
}
const getters = {
    //当前仓库的state   
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}