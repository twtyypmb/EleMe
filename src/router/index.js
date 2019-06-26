import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods/Goods'
import Seller from '@/components/Seller/Seller'
import Ratings from '@/components/Ratings/Ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
})
