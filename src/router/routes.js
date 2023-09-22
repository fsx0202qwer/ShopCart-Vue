//路由配置信息
export default [
    // home
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    // login
    {
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    // register
    {
        path: '/register',
        component:  () =>  import('@/pages/Register'),
    },
    // Search
    {
        name: 'search',
        path: '/search/:keyword?',
        component:  () =>  import('@/pages/Search'),
        meta: {
            show: true
        },
        // 路由组件 传参 三种写法 分别是布尔值 对象写法 函数写法
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.keyword }
        }
    },
    // Detail
    {
        path: '/detail/:skuid',
        component:  () => import('@/pages/Detail'),
        meta: {
            show: true
        },
    },
    // AddCartSuccess
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component:  () =>  import('@/pages/AddCartSuccess'),
        meta: {
            show: true
        },
    },
    // ShopCart
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () =>  import('@/pages/ShopCart'),
        meta: {
            show: true
        },
    },
    // Trade
    {
        path: '/trade',
        name: 'trade',
        component:  () =>  import('@/pages/Trade'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'||from.path=='/pay'){
                next();
            }else{
                next(false);
            }
        },
        meta: {
            show: true
        },
    },
    // pay
    {
        path: '/pay',
        name: 'pay',
        component:  () =>  import('@/pages/Pay'),
        // 路由独享守卫
        beforeEnter:(to, from, next) => {
            if(from.path=='/trade'||from.path=='/pay'){
                next();
            }else{
                next(false);
            }
        },
        meta: {
            show: true
        },
    },
    // paysuccess
    {
        path: '/paysuccess',
        name: 'paysuccess',
        component:  () =>  import('@/pages/PaySuccess'),
        meta: {
            show: true
        },
    },
    // Center
    {
        path: '/center',
        name: 'center',
        component:  () =>  import('@/pages/Center'),
        meta: {
            show: true
        },
        // 二级路由
        children: [
            // myorder
            {
                path: 'myorder',
                name: 'myorder',
                component:  () => import('@/pages/Center/MyOrder'),
            },
            // grouporder
            {
                path: 'grouporder',
                name: 'grouporder',
                component: () =>  import('@/pages/Center/GroupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myorder',
            },
        ]
    },
    {
        path: '*',
        redirect: '/home'
    }
]