//引入vue
import Vue from "vue";
// 引用vue-router
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
import routes from "./routes";
// 引入
import store from "@/store";
// 解决重复点击导航时，控制台出现报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
 
//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})

//全局守卫
router.beforeEach(async (to, from ,next) => {
  let token=store.state.user.token;
  let name=store.state.user.UserInfo.name;
  if(token){
    if(to.path=='/login'||to.path=='/register'){
      alert('您已登录!');
      next('/');
    }else{
      if(name){
        next();
      }else{
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          // token 过期
          //清楚原有 token
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  }else{
    // 未登录
    let topath=to.path; 
    if (topath.indexOf('/trade')!=-1||topath.indexOf('/pay')!=-1||topath.indexOf('/paysuccess')!=-1||topath.indexOf('/center')!=-1) {
      next('/login?redirect='+topath);
    }else{
      next();
    }
  }
})

export default router;