import axios from "axios";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
const requests = axios.create({
  // 配置项
    baseURL:"/mock",
    // 请求超时时间为5s
    timeout:5000,
});

requests.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start()
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(new Error('failed'));
  }
);

export default requests;
