<template>
  <div class="music glbFlex">
    <div class="search"><i class="iconfont icon-sousuo"></i> 搜索</div>

    <!-- 歌曲推荐标题 -->
    <titleVue
      title="歌曲推荐"
      :icons="'iconfont icon-jiantou'"
      :selects="select(1)"
    ></titleVue>

    <!-- 歌曲推荐组件 -->
    <recommendVue
      v-for="item in recommendMusicList"
      :key="item.id"
      :items="item"
    ></recommendVue>

    <!-- 热门歌单标题 -->
    <titleVue
      title="热门歌单"
      :icons="'iconfont icon-jiantou'"
      :selects="select(1)"
    ></titleVue>

    <!-- 热门歌单组件 -->
    <div class="hotmusic">
      <hotmusicVue
        v-for="item in hotMusicLists"
        :key="item.id"
        :items="item"
      ></hotmusicVue>
    </div>

    <!-- 推荐小程序标题 -->
    <titleVue
      title="推荐小程序"
      :icons="'iconfont icon-jiantou'"
      :selects="select(0)"
    ></titleVue>

    <div class="smallRoutine glbflex1">
      <smallRoutine
        v-for="(item, index) in srcList"
        :key="index"
        :items="item"
      ></smallRoutine>
    </div>

    <!-- 官方歌单标题 -->
    <titleVue
      title="官方歌单"
      :icons="'iconfont icon-jiantou'"
      :selects="select(1)"
    ></titleVue>

    <!-- 官方歌单组件 -->
    <div class="hotmusic">
      <hotmusicVue
        v-for="item in hotMusicLists"
        :key="item.id"
        :items="item"
      ></hotmusicVue>
    </div>

    <!-- 巅峰榜标题 -->
    <titleVue
      title="巅峰榜"
      :icons="'iconfont icon-jiantou'"
      :selects="select(0)"
    ></titleVue>

    <peakMusicVue
      v-for="(item, index) in peakMusicList"
      :key="index"
      :items="item"
      :peakwolks="peakwolk"
    ></peakMusicVue>

    <ListMusicVue @showPopup="showPopups"></ListMusicVue>

    <popupVue v-if="isShowList" @offPopup="offPopup"></popupVue>
  </div>
</template>

<script>
import {
  getrecommendMusic,
  gethotMusicList,
  getpeakMusicList,
} from "@/request/api/music";
import popupVue from "@/components/music/popup.vue";
import recommendVue from "@/components/music/recommend.vue";
import titleVue from "@/components/music/title.vue";
import hotmusicVue from "@/components/music/hotmusic.vue";
import smallRoutine from "@/components/music/smallRoutine.vue";
import peakMusicVue from "@/components/music/peakMusic.vue";
import ListMusicVue from "@/components/music/ListMusic.vue";
export default {
  data() {
    return {
      recommendMusicList: [],
      hotMusicLists: [],
      peakMusicList: [],
      peakwolk: [],
      isshow: 1,
      srcList: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.shopxo.net%2Fimages%2Findex%2Fplatform%2Ftoutiao.png&refer=http%3A%2F%2Fwww.shopxo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654914362&t=d31484047274c3b29524908a003ddbbf",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a146126106x3026440055b15.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654914034&t=1ad330f3e9351677d0152a5c5f1cbfd2",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc84%2F55603454_1502695905747.png&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654914790&t=6a5aa7bb3e09878546bf935f8f477f5a",
      ],
      isShowList: false,
    };
  },
  components: {
    recommendVue,
    hotmusicVue,
    titleVue,
    smallRoutine,
    peakMusicVue,
    ListMusicVue,
    popupVue
  },
  mounted() {
    this.getReMusic();
    this.getHotList();
    this.getpeakMusic();
  },
  methods: {
    select(val) {
      return (this.isshow = val);
    },

    getVuex() {
      if (!this.$store.state.oneMusic) {
      } else {
        this.isShowList = true;
      }
    },

    offPopup() {
      this.isShowList = false;
    },
    showPopups(val) {
      this.isShowList = val;
    },
    getReMusic() {
      getrecommendMusic("/personalized/newsong", { limit: 3 }).then((res) => {
        if (res.code == 200) {
          this.recommendMusicList = res.result;
          console.log(res.result);
          // this.recommendMusicListname = res
        }
      });
    },
    getHotList() {
      gethotMusicList("/personalized", {}).then((res) => {
        if (res.code == 200) {
          this.hotMusicLists = res.result;
        }
      });
    },
    getpeakMusic() {
      getpeakMusicList("/toplist/detail", {}).then((res) => {
        if (res.code == 200) {
          for (let i = 0; i < 3; i++) {
            this.peakMusicList.push(res.list[i]);
            // this.peakMusicList = res.rewardToplist.songs
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.music {
  padding-bottom: 500px;
  overflow: auto;
  width: 100%;
  background: #fafafa;
  flex-direction: column;
  .search {
    color: #8a8a8a;
    margin-top: 80px;
    border-radius: 100px;
    width: 90%;
    height: 200px;
    background: #fff;
    text-align: center;
    line-height: 200px;
    i {
      font-size: 80px;
    }
  }

  .hotmusic {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
}
</style>
