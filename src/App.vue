<template>
  <div id="app">
    <Header :Seller="Seller"></Header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ path: '/Goods' }">tab1</router-link>
      </div>
      <div class="tab-item"><router-link :to="'/Seller'">tab2</router-link></div>
      <div class="tab-item"><router-link :to="'/Ratings'">tab3</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import GetData from '@/DAL/GetDataFromFile'
var dal = new GetData();
export default {
  name: 'App',
  components:{Header},
  data:function()
  {
    return{    
      Seller:dal.GetSeller(),   
      Ratings:dal.GetRatings(),   
      Goods:dal.GetGoods()
    }
  }
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
