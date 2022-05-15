<template>
  <div class="box">
    <div class="videos">
      <video :src="VideoDetailurl.url" controls ref="videos"></video>
        <PlayC
        @getFatherPlay="getFatherPlay"
        @getNext="getNext"
        :relateVideoLength="relateVideoLength"
      ></PlayC>
    </div>
    <div class="bottom">
      <div class="detail">
        <div class="name">
          {{ VideoDetailDetail.name }}
        </div>
        <div class="artistName">{{ VideoDetailDetail.artistName }}</div>
      </div>
      <div class="title">相关视频</div>
      <div
        class="liebiao glbFlex"
        v-for="(item, index) in relatedLsit"
        :key="index"
      >
        <div class="left">
          <img :src="item.coverUrl" alt="" />
        </div>
        <div class="right">
          <div class="one">{{ item.title }}</div>
          <div class="tow">{{ item.creator[0].userName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVideoDetail, getRVideo, getVideoUrl } from "@/request/api/video.js";
import recomendMVVue from "@/components/video/recomendMV.vue";
import PlayC from "@/components/video/playControl.vue";
export default {
  data() {
    return {
      VideoDetailurl: " ",
      relatedLsit: [],
      items: {},
      VideoDetailDetail: {},
      relateVideoLength: 0,
    };
  },
  created() {
    this.getVideoDetails(this.$route.query.id);
    this.getRVideos(this.$route.query.id);
    this.getVideoUrl(this.$route.query.id);
    // console.log(this.items);
  },
  components: {
    recomendMVVue,
    PlayC,
  },
  methods: {
    //视频播放
    getVideoDetails(id) {
      getVideoDetail("/mv/detail", { mvid: id }).then((res) => {
        if (res.code == 200) {
          // console.log(res);
          this.VideoDetailDetail = res.data;
        }
      });
    },

    getVideoUrl(id) {
      getVideoUrl("/mv/url", { id }).then((res) => {
        if (res.code == 200) {
          // console.log(res);
          this.VideoDetailurl = res.data;
        }
      });
    },

    // 相关视频
    getRVideos(id) {
      getRVideo("/related/allvideo", { id: id }).then((res) => {
        console.log(res.data);
        this.relatedLsit = res.data;
        this.relateVideoLength = res.data.length - 1;
      });
    },

    // 是否需要进行播放
    getFatherPlay(val) {
      //获取到真实dom
      if (val) {
        this.$refs.videos.play();
      } else {
        this.$refs.videos.pause();
      }
    },

    //视频进行却换
    getNext(val) {
      // relatedLsit
      //我们需要判断 =》1right 5
      if (val.type) {
        this.videDetail = this.relatedLsit[val.index]; //获取到当前信息
        //发送请求获取到url地址
      // console.log(this.videDetail.coverUrl);
        this.getVideoUrl("14525489");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .videos {
    // &:hover{

    // }
    width: 100%;
    position: relative;
      position: fixed;

    video {
      width: 100%;
      height: 1000px;
      background: #333;
    }
  }
  .bottom {
    width: 100%;
    padding-top: 1100px;
    .title {
      font-size: 100px;
      text-indent: 80px;
    }
    .liebiao {
      margin-top: 100px;
      height: 600px;
      .left {
        height: 100%;
        img {
          width: 700px;
          height: 500px;
          border-radius: 60px;
          margin-left: 70px;
        }
      }
      .right {
        width: 900px;
        .one {
          font-size: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tow {
          margin-top: 50px;
          color: #b2b2b2;
          text-indent: 50px;
        }
      }
    }
    .detail {
      padding: 0 50px;
      .name {
        font-size: 100px;
      }
      .artistName {
        margin-top: 30px;
        font-size: 80px;
        color: #b2b2b2;
      }
    }
  }
}
</style>