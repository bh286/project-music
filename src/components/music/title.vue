<template>
  <div class="recommend glbFlex glbmargin">
    <div class="left">{{ title }}</div>
    <div class="right glbFlex" v-if="selects==1">
      更多
      <div :class="icons"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icons: String,
    selects:Number
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  padding: 50px 70px;
  .left {
    font-size: 100px;
    font-weight: bold;
  }
  .right {
    color: #9c9c9c;
  }
}
</style>