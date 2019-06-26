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

<style lang="scss" scoped="" type="text/css">
.tab
{
  display: flex;
  height: 40px;
  line-height: 40px;
  width: 100%;
  border-bottom: 1px solid #000000;
  .tab-item 
  {
    flex:1;
    text-align: center;

    a
    {
      display: block;
    }

    a.active
    {
      color: burlywood;
    }
  }
}


</style>
