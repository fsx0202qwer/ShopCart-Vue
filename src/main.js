//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入路由
import router from '@/router'
// 引入 store
import store from '@/store'
//全局注册组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name,TypeNav);
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name,Carousel);
import Pagination from "@/components/Pagination";
// 按需引入elm ui
import { MessageBox } from 'element-ui'; 
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//全局注册

// Vue.component(Button.name,Button);
Vue.component(Pagination.name,Pagination);
// 引入mock
import "@/mock/mockserve"
// 引入swiper
import 'swiper/css/swiper.css'
//同一接收api文件夹中的全部请求函数
import*as API from '@/api';
import VueLazyload from 'vue-lazyload'
import kunkun from '@/assets/01.gif'

//引入懒加载插件
Vue.use(VueLazyload, {
	// preLoad: 1.3,
	// error: errorimage,
	loading: kunkun,
	// attempt: 1
  })
// 引入表单效验插件
import '@/plugins/validate'
new Vue({
	render: h => h(App),
	//配置$bus
	beforeCreate(){
		Vue.prototype.$bus=this;
		Vue.prototype.$API=API;
	},
	// 注router
	router,
	// 注册store 你
	store,
}).$mount('#app')
