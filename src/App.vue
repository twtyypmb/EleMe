<template>
  <div id="app">
    <Header></Header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ path: '/Goods' }">商品</router-link>
      </div>
      <div class="tab-item"><router-link :to="'/Seller'">商家</router-link></div>
      <div class="tab-item"><router-link :to="'/Ratings'">评论</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
export default {
  name: 'App',
  components:{Header}
}
</script>

<style>
.tab{ display: flex;}
.tab .tab-item {flex:1;text-align: center;}
.tab .tab-item a{display: block;}
</style>
