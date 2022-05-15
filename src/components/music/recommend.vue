<template>
  <div class="box glbFlex" @click="gomusicDetail">
    <div class="left">
      <img :src="items.picUrl" alt="" />
    </div>
    <div class="right glbflex1">
      <div class="right-left">
        <div class="name">{{ items.name }}</div>
        <!-- <div>{{items.song.artists[0].name}}</div> -->
        <div class="des">
          <span>SQ</span>&nbsp;{{ items.song.artists[0].name }} · {{ items.name }}
        </div>
      </div>
      <i class="iconfont icon-jiantouyou "></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  mounted(){
    
  },
  methods:{
    gomusicDetail(){
      this.$router.push(`/musicdetail?id=${this.items.id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  margin-top: 50px;
  .left {
    flex: 1;
    img {
      width: 500px;
      height: 500px;
      border-radius: 50px;
      margin-left: 70px;
    }
  }
  .right {
    flex: 2;
    height: 500px;
    .name {
      font-size: 100px;
    }
    .des {
      color: #8a8a8a;
      span{
          display: inline-block;
          color: #e6b551;
          border: 1px solid #e6b551;
          border-radius: 20px;
          font-size: 12px;
      }
    }
    i{
        color: #3f3f3f;
        font-size: 80px;
    }
  }
}
</style>