<template>
  <div class="play">
    <i v-if="isLeft" class="iconfont icon-Prev" @click="prev"></i>
    <i v-if="!isPlay" class="iconfont icon-bofang isplay" @click="playVideo(true)"></i>
    <i
      v-if="isPlay"
      class="iconfont icon-24gf-pause2 isplay"
      @click="playVideo(false)"
    ></i>
    <i v-if="isNext" class="iconfont icon-Next" @click="next"></i>
  </div>
</template>

<script>
export default {
  props: {
    relateVideoLength: {
      type: Number,
    },
  },
  data() {
    return {
      index: 0,
      isPlay: false, //视频暂停
      isLeft: false,
      isNext: true,
    };
  },
  methods: {
    playVideo(val) {
      if (val) {
        //播放视频
        this.isPlay = val;
        //告诉父亲播放视频
        this.$emit("getFatherPlay", true);
      } else {
        //暂停视频
        this.isPlay = val;
        this.$emit("getFatherPlay", false);
      }
    },

    //点击切换下一个视频
    next() {
      this.isLeft = true;
      //子组件向父组件传递数据
      this.$emit("getNext", { type: true, index: this.index });
      // console.log(this.index, this.relateVideoLength);
      if (this.relateVideoLength <= this.index) {
        this.isNext = false;
        return;
      }
      this.index += 1;
    },

    // 点击切换上一个视频
    prev() {},
  },
};
</script>

<style scoped lang="scss">
.play {
  // width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  i {
    font-size: 200px;
    color: white;
  }
  .isplay{
    margin:0 300px;
  }
}
</style>