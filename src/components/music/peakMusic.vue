<template>
  <div class="box glbFlex">
      <div class="left">
          <div class="title">{{items.name}}</div>
          <div class="text" v-for="(item,index) in items.tracks" :key="index" >
             {{index+1}}. {{item.first}}<span> - {{item.second}}</span>
          </div>
      </div>
      <div class="right">
          <img :src="items.coverImgUrl" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        items:Object,
    },
    mounted(){
    }
   
}
</script>

<style lang="scss" scoped>
    .box{
        width: 90%;
        border-radius: 40px;
        background: #f2f2f2;
        margin-top: 50px;
        .left{
            width: 63%;
            .title{
                font-size: 100px;
                margin-left: 50px;
                margin-bottom: 20px;
            }
            .text{
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 20px;
                font-weight: bold;
                text-indent: 50px;
                margin:20px 0;
                span{
                    color: #797979;
                    font-weight:400;
                }
            }
        }
        .right{
            flex: 1;
            img{
                width: 600px;
                height: 600px;
                border-radius: 40px;
            }
        }
    }
</style>