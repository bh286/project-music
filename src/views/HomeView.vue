<template>
  <div class="home">
    
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer glbFlex">
      <div class="left glbtext-center glbFlex" @click="select(0)" :class="isShow==0?'active':''"><i class="iconfont icon-yinle"></i><span>音乐</span></div>
      <div class="right glbtext-center glbFlex" @click="select(1)" :class="isShow==1?'active':''"><i class="iconfont icon-shipin"></i><span>视频</span></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  data(){
    return{
      isShow:0
    }
  },
  methods:{
    select(data){
      this.isShow = data;
      if(data==0){
        this.$router.push('/music')
      }else{
        this.$router.push('/video')
      }
    }
  }
  
}
</script>

<style scoped lang="scss">
  .home{
    height: 100%;
    background: #fafafa;
    .footer{
      height: 300px;
      width: 100%;
      // border-top: 1px solid #333;
      background: #ffff;
      position: fixed;
      left:0;
      bottom: 0;
      .left{
        justify-content: center;
        height: 100%;
        width: 100%;
        flex: 1;
        i{
          font-size: 200px;
          display: inline-block;
          width: 200px;
          height: 200px;
          line-height: 200px;
        }
        span{
          font-size: 100px;
          display: inline-block;
          width: 200px;
          height: 210px;
          line-height: 200px;
          padding-left: 50px;
        }
      }
      .right{
        justify-content: center;
        height: 100%;
        width: 100%;
        flex: 1;
        i{
          font-size: 200px;
          display: inline-block;
          width: 200px;
          height: 200px;
          line-height: 200px;
        }
        span{
          font-size: 100px;
          display: inline-block;
          width: 200px;
          height: 210px;
          line-height: 200px;
          padding-left: 50px;
        }
      }
    }
     
  }

  .active{
    color: #22d59c;
  }
</style>
