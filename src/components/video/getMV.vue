<template>
  <div class="box">
    <div class="up" v-for="(item, index) in items" :key="index" @click="govideoDetail(item)">
      <img :src="item.picUrl" alt="" />

      <!-- 播放量盒子 -->
      <div class="show glbFlex">
        <div class="playcount">
          <i class="iconfont icon-bofangshu"></i>
          {{ item.playCount | getPlayCurrentType }}
        </div>
        <div class="showtime">{{ item.duration | getTimeType }}</div>
      </div>

      <div class="dowm">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { getTimeType, getPlayCurrentType } from "@/utils/index";
export default {
  props: {
    items: Array,
  },
  data(){
    return{
      
    }
  },

  mounted() {},
  //过滤器
  filters: {
    getTimeType,
    getPlayCurrentType,
  },
  methods: {
    govideoDetail(item){
      this.$router.push({path:'/vediodetail',query:{id:item.id}});
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  .up {
    display: inline-block;
    margin: 0 50px;
    width: 43%;
    position: relative;
    img {
      width: 100%;
      height: 550px;
      border-radius: 50px;
    }
    .dowm {
      color: black;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 80px;
    }
    .show {
      height: 100px;
      width: 100%;
      position: absolute;
      background:rgb(102, 99, 99);
      color: white;
      bottom: 200px;
      left: 0;
      .playcount {
        margin-left: 50px;
        i{
          font-size: 85px;
        }
      }
      .showtime {
        margin-right: 50px;
      }
    }
  }
}
</style>