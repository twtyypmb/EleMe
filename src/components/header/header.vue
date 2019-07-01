<template>
    <div id="header" class="background-cover" :style="HeaderBackground">
            <div id="header-content">
                <div id="header-content-top">
                    <img class="avatar" v-bind:src="Seller.AvatarUrl" alt=""/>
                    <div class="filter"></div>
                    <div class="title_frame">
                        <div>
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
                <div id="header-bottom">
                    <span>公告</span><span>呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵</span>
                </div>
        </div>

        
            
    </div>
</template>

<script>



export default {
    props:["Seller"],
    computed:{
        HeaderBackground:function(){
            return {
                
            }
        }
    },
    mounted:function(){
        document.querySelectorAll(".background-cover:before").style.backgroundImage=`url(${this.Seller.AvatarUrl})`
    }
}
</script>

<style lang="scss" scoped="">
#header
{
    width:100%;
    height:auto;  

}

.background-cover > *:nth-child(0)
{
    background-color: #fff;
}
.background-cover
{
    position: relative;
    text-align: center;
    color: #fff;
}
.background-cover::before
{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    filter: blur(8px);
    z-index: -1;
    background-size: cover;
}


#header-content
{
    padding: 30px;
    display: flex;
    .filter
    {
        width: 30px;
    }
}
.avatar
{
    width: 100px;
    height: 100px;
}
</style>
