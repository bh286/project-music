<template>
  <div class="list glbFlex">
    <div class="left glbflex2">
      <img :class="!isPlay ? 'imgActive' : ''" alt="" :src="musicDetail.pic" />
      <div class="name">{{ musicDetail.name }}</div>
      <audio :src="currentUrl" ref="mp3"></audio>
    </div>
    <div class="right">
      <i v-if="isPlay" class="iconfont icon-bofang1" @click="play(false)"></i>
      <i v-if="!isPlay" class="iconfont icon-zanting1" @click="play(true)"></i>
      <i class="iconfont icon-24gf-playlistMusic4" @click="showPopups"></i>
    </div>
    

    
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      isPlay: true,
      musicDetail: {},
      currentUrl: "",
      currentTime: 0,
      isShow:false,
    };
  },
  created() {
    this.getVuex();
  },
  computed:{
  },
  methods: {
    showPopups() {
        if(this.isShow == false){
            this.$emit('showPopup',true)
        }else{
            this.$emit('showPopup',false)
        }
    },
        
    getVuex() {
      this.musicDetail = this.$store.state.oneMusic;
      this.currentUrl = this.$store.state.currentUrl;
      this.currentTime = this.$store.state.currentTime;
    },
    play(val) {
      this.isPlay = val;
      if (!val) {
        this.$refs.mp3.play();
        // 添加css
        this.$refs.mp3.currentTime = this.currentTime;
      } else {
        this.$refs.mp3.pause();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  position: fixed;
  width: 100%;
  height: 300px;
  background: #fafafa;
  bottom: 300px;
  left: 0;
  .left {
    img {
      height: 280px;
      width: 280px;
      border-radius: 50%;
      padding: 0 50px;
    }
    .imgActive {
      animation: act 17s infinite linear;
    }
    @keyframes act {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .right {
    display: flex;
    i {
      margin-right: 50px;
      font-size: 190px;
      color: #22d59c;
    }
  }
}
</style>