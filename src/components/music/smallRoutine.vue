<template>
  <div class="box">
    <img :src="items" alt="" />
    <div class="text">头条</div>
  </div>
</template>

<script>
export default {
  props: {
    items: String,
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 700px;
  border-radius: 50%;
  img {
    width: 550px;
    height: 550px;
  }
  .text{
      text-align: center;
  }
}
</style>