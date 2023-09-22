import axios from "axios";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import store from "@/store";
const requests = axios.create({
  // 配置项
    baseURL:"/api",
    // 请求超时时间为5s
    timeout:5000,
});

requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token){
    config.headers.userTempId=store.state.detail.uuid_token;
  }
  // 判断是否需要携带token
  if(store.state.user.token){
    config.headers.token=store.state.user.token
  }
  // 进度条开始
  nprogress.start()
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    // console.log(res.data);
    return res.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(new Error('failed'));
  }
);

export default requests;
