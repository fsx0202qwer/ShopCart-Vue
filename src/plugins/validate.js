// 表单验证区域
// 引入vue
import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Vue.use(VeeValidate);

//表单验证
// 设置中文语言包 
Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) =>   `${field}与密码不相同!!`  
  },
  attributes: {
    phone: '手机号不存在或',
    code: '验证码错误或',
    password: '密码错误或',
    password1: '确认密码',
    agree: '协议',
  } 
});

VeeValidate.Validator.extend('agree',{
    validate:value=>{
        return value
    },
    getMessage:field=>field+'必须同意'
})


