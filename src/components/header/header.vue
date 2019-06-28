<template>
    <div id="header" >
    <img class="avatar" v-bind:src="Seller.AvatarUrl" alt=""/>
    <div class="title_frame">
        <div>
            <img src="" alt="">
        </div>
    </div>
    </div>
</template>

<script>



export default {
    props:["Seller"]
}
</script>

<style lang="scss" scoped="">
#header
{
    width:100%;
    height:150px;
    background: #333;
    padding: 30px;

}
.avatar
{
    width: 100px;
    height: 100px;
}
</style>
