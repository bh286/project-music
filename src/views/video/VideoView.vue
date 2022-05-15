<template>
  <div class="box">
    <div class="top">
      <span @click="show(0)" :class="isshow == 0 ? 'active' : ''">推荐</span>
      <span @click="show(1)" :class="isshow == 1 ? 'active' : ''">MV</span>
    </div>

    <van-swipe
      class="my-swipe"
      indicator-color="white"
      ref="checkbox"
    >
      <van-swipe-item>
        <recomendMVVue :items="recommendMV"></recomendMVVue>
        <recomendMVVue :items="recommendMV"></recomendMVVue>
        <recomendMVVue :items="recommendMV"></recomendMVVue>
        <recomendMVVue :items="recommendMV"></recomendMVVue>
      </van-swipe-item>
      <van-swipe-item>
        <getMVVue :items="recommendMV"></getMVVue>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import recomendMVVue from "@/components/video/recomendMV.vue";
import getMVVue from "@/components/video/getMV.vue";
import { getrecommendMV,getMV} from "@/request/api/video";
export default {
  data() {
    return {
      isshow: 0,
      recommendMV:[],
      MV:[]
    };
  },
  components: {
    recomendMVVue,
    getMVVue
  },
  mounted() {
    this.getrecommendMVs();
    this.getMVs();
  },
  methods: {
    show(val) {
      this.isshow = val;
      if (val == 0) {
        this.$refs.checkbox.swipeTo(0);
      } else {
        this.$refs.checkbox.swipeTo(1);
      }
    },
    getrecommendMVs() {
      getrecommendMV("/personalized/mv", {}).then((res) => {
        if (res.code == 200) {
          this.recommendMV = res.result;
          console.log(res.result);
        }
      });
    },
    getMVs(){
        getMV("/personalized/mv", {}).then((res) => {
        if (res.code == 200) {
          this.MV = res;
          // console.log(res);
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  .top {
    width: 100%;
    height: 300px;
    font-size: 100px;
    text-indent: 50px;
    padding-top: 100px;
    span {
      display: inline-block;
      margin-left: 50px;
      height: 120px;
    }
  }
}

.my-swipe .van-swipe-item {
    height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

.active {
  font-size: 150px;
  border-bottom: 30px solid #21d49b;
}
</style>