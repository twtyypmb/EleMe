import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  linkActiveClass:"active",
  routes: [
    // 默认路由
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect:'goods'
    // },
    {
      path: '/Goods',
      name: 'Goods',
      component: ()=>import('@/components/Goods/Goods')
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: ()=>import('@/components/Seller/Seller')
    },
    {
      path: '/Ratings',
      name: 'Ratings',
      component: ()=>import('@/components/Ratings/Ratings')
    }
  ]
})


//router.go('goods');
export default router
