<template>
  <div id="app">
    <PageHeader></PageHeader>
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
import PageHeader from '@/components/header/PageHeader'
export default {
  name: 'App',
  components:{PageHeader}
}
</script>

<style>

</style>
