<template>
  <div class="box">
    <div class="top">
      <div class="arname">{{ recommenditem.name }}</div>
      <div class="songname">{{ arName[0].name }}</div>
      <div class="pic">
        <img :src="picUrl.picUrl" alt="" />
        <i class="iconfont icon-bofang1" v-if="isplay == 0" @click="isPlay"></i>
        <i
          class="iconfont icon-zanting1"
          v-if="isplay == 1"
          @click="isPlay"
        ></i>
        <audio :src="getMp3Url" ref="mp3"></audio>
      </div>
    </div>

    <!-- 歌词 -->
    <div class="text glbFlex1" ref="lyrics">
      <div
        class="lyric"
        v-for="(item, index) in lyricList"
        :key="index"
        :class="
          (indexStyle > 0 ? indexStyle - 1 : indexStyle) == index
            ? 'lyricStyle'
            : ''
        "
      >
        {{ item.lrc }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMusicDetail,
  getMusicUrl,
  getMusiclyric,
} from "@/request/api/music";
import { splitText } from "@/utils/index.js";
export default {
  data() {
    return {
      recommenditem: {},
      arName: [],
      picUrl: {},
      isplay: 0,
      getMp3Url: "",
      lyricList: [],
      indexStyle: 0,
    };
  },
  mounted() {
    this.getMusicDetails(this.$route.query.id);
    this.getMusicUrls(this.$route.query.id);
    this.getMusiclyrics(this.$route.query.id);
      console.log(this.$store);
  },
  methods: {
    //处理歌曲图片
    getMusicDetails(id) {
      getMusicDetail("/song/detail", { ids: id }).then((res) => {
        if (res.code == 200) {
            console.log(res);
          this.recommenditem = res.songs[0];
          this.arName = res.songs[0].ar;
          this.picUrl = res.songs[0].al;
        }
        this.$store.commit('addOneMusic',{
            name:res.songs[0].name,
            pic:res.songs[0].al.picUrl,
            arname:res.songs[0].ar[0].name
        })
      });
    },

    // 处理歌曲url地址
    getMusicUrls(id) {
      getMusicUrl("/song/url", { id }).then((res) => {
        // console.log(res.data);
        this.getMp3Url = res.data[0].url;
        this.$store.commit('changeCurrentUrl',res.data[0].url)
        // console.log(this.$store);
      });
    },

    //获取歌词
    getMusiclyrics(id) {
      getMusiclyric("/lyric", { id }).then((res) => {
        // console.log(res.lrc.lyric);
        this.lyricList = splitText(res.lrc.lyric);
      });
    },
    isPlay() {
      if (this.isplay == 0) {
        this.$refs.mp3.play();
        this.changeStyle();
        this.isplay = 1;
      } else {
        this.$refs.mp3.pause();
        this.isplay = 0;
      }
    },
    changeStyle() {
      this.$refs.mp3.addEventListener("timeupdate", () => {
        let time = Math.floor(this.$refs.mp3.currentTime);
        this.$store.commit("ChangeCurrentTime", time);
        // console.log(this.lyricList[this.indexStyle].time);
        if (time > this.lyricList[this.indexStyle].time) {
          if (!this.lyricList[this.indexStyle].lrc) {
            //获取到到歌词
            for (let i = 0; i < this.lyricList.length; i++) {
              if (
                time > this.lyricList[i].time &&
                this.lyricList[this.indexStyle].lrc
              ) {
                this.indexStyle = i;
              }
            }
          } else {
            this.indexStyle = this.indexStyle + 1;
          }
        }
        if (this.indexStyle >= this.lyricList.length) {
          return;
        }
        //自动滚动
        this.Style(this.indexStyle);
        // console.log(this.indexStyle);
        // console.log(this.lyricList);
      });
    },
    Style(index) {
      this.$refs.lyrics.scrollTop = 25 * index;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;
  background: #333;
  .top {
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .arname {
      font-size: 150px;
      padding-top: 80px;
    }
    .songname {
      padding-bottom: 130px;
    }
    .pic {
      position: relative;
      img {
        width: 1000px;
        height: 1000px;
        border-radius: 80px;
      }
      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 300px;
      }
    }
  }

  .text {
    color: #848382;
    margin-top: 100px;
    overflow: auto;
    width: 100%;
    height: 700px;
    .lyric{
      // background: gold;
      height: 150px;
      // padding:80px 0;
      line-height: 150px;
    }
  }
}

.lyricStyle {
  color: white;
  font-weight: bold;
  font-size: 90px;
      height: 150px;
  
}
</style>