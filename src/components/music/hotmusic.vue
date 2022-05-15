<template>
 <div class="box">
     <div class="top">
         <img :src="items.picUrl" alt="">
         <div class="playC iconfont icon-sanjiaoxing"> {{getPlayC }}</div>
     </div>
     <div class="foot glbtext3">{{ items.name }} </div>
 </div> 
</template>

<script>
import { getPlayCurrentType } from "@/utils"
export default {
    props:{
        items:Object
    },
    computed: {
        getPlayC(){
            return getPlayCurrentType(this.items.playCount)
        }
  },
}
</script>

<style lang="scss" scoped>
    .box{
        .top{
                position: relative;

            img{
                width: 500px;
                height: 500px;
                border-radius: 50px;
                margin-left: 50px;
            }
            .playC{
                text-align: center;
                width: 400px;
                height: 100px;
                background: black;
                border-radius: 40px;
                opacity: 0.7;
                color: white;
                position: absolute;
                bottom: 20px;
                right:0;
                line-height: 100px;
            }
        }
        .foot{
                margin-left: 70px;
        }
    }
</style>