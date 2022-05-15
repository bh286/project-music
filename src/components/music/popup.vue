<template>
  <div class="popup">
    <div class="top"></div>
    <div class="bottom">
      <div class="bottom-top">
        <i
          v-if="isShow == 1"
          @click="isClick(2)"
          class="iconfont icon-liebiaoxunhuan"
        ><span>&nbsp;列表播放</span>
        </i
        >
        <i
          v-if="isShow == 2"
          @click="isClick(3)"
          class="iconfont icon-danquxunhuan"
        ><span>&nbsp;单曲循环</span></i
        >
        <i
          v-if="isShow == 3"
          @click="isClick(1)"
          class="iconfont icon-suijibofang"
        ><span>&nbsp;随机播放</span>
        </i
        >
      </div>
      <div class="bottom-content">
        <div class="item" v-for="(item, index) in musicList" :key="index">
          <div class="name">{{ item.name }}&nbsp;</div> - <div class="arname">&nbsp;{{item.arname}}</div>
        </div>
      </div>
      <div class="off" @click="off">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: 1,
      musicList: [],
    };
  },
  // 当这个组件在浏览器上加载的完毕，
  mounted() {
    if (this.$store.state.oneMusic) {
      this.musicList.push(this.$store.state.oneMusic);
    console.log(this.$store);

    }
  },
  methods: {
    isClick(data) {
      this.isShow = data;
    },
    off() {
      this.$emit("offPopup");
    },
  },
};
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //    background:red;
  z-index: 100;
  .top {
    height: 70%;
    background: black;
    opacity: 0.6;
  }
  .bottom {
    height: 30%;
    background: #fff;
    padding: 0 30px;
    .bottom-top {
      height: 200px;
      line-height: 200px;
      i {
        font-size: 180px;
        span {
        font-size: 100px;
      }
      }
      padding-bottom: 280px;
      border-bottom: 2px solid #dddddd;
    }
    .bottom-content {
      .item {
        padding-top: 70px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #22d59c;
        font-size: 100px;
      }
      .arname{
          font-size: 80px;
      }
    }
    .off {
      position: fixed;
      width: 100%;
      bottom: 5px;
      text-align: center;
      font-size: 120px;
      padding-bottom: 50px;
    }
  }
}
</style>