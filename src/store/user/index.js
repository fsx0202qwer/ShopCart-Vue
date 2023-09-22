import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout,reqAddressInfo } from "@/api/index";
import {setToken,getToken,removeToken} from '@/utils/token'
const state = {
    code:'',
    token:localStorage.getItem('TOKEN'),
    UserInfo:{},
};
const mutations = {
    GETCODE(state,code){
        state.code=code;
    },
    USERLOGIN(state,token){
        state.token=token;
    },
    GETUSERINFO(state,UserInfo){
        state.UserInfo=UserInfo;
    },
    CLEAR(state){
        state.token='';
        state.UserInfo={};
        removeToken();
    }
};
const actions = {
    //获取验证码
    async getCode({commit},phone){
        let reslut = await reqGetCode(phone);
        if(reslut.code==200){
            commit('GETCODE',reslut.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // reqUserRegister
    async userRegister({commit},user){
        let reslut = await reqUserRegister(user);
        if(reslut.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async userLogin({commit},user){
        let reslut = await reqUserLogin(user);
        if(reslut.code==200){
            commit('USERLOGIN',reslut.data.token);
            setToken(reslut.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取用户信息 UserInfo
    async getUserInfo({commit}){
        let reslut = await reqUserInfo();
        // console.log(reslut);
        if(reslut.code==200){
            commit('GETUSERINFO',reslut.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogout({commit}){
        let reslut = await reqLogout();
        if(reslut.code==200){
            commit('CLEAR');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
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