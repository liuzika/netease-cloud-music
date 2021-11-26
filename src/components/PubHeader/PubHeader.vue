<template>
  <div class="hd-container" :style="{ height }">
    <!-- 前面图标 -->
    <i class="icon-dot" v-if="isIconDot"></i>

    <!-- title 使用 a 还是 span -->

    <h3 :style="{ fontSize: fSize, lineHeight, fontWeight }">
      <slot name="title">
        <span class="f-ff2">{{ title }}</span>
      </slot>
    </h3>

    <!-- <a href="/discover/playlist/" class="tit f-ff2 f-tdn" :style="{ fontSize: fSize,lineHeight }">{{ title }}</a> -->

    <!-- title 左边插槽 -->
    <slot name="left"></slot>

    <!-- 最右插槽 -->
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "PubHeader",
  props: {
    isIconDot: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    fSize: {
      type: String,
      default: "20px",
    },
    height: {
      type: String,
      default: "33px",
    },
    lineHeight: {
      type: String,
      default: "28px",
    },
    fontWeight: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style lang='less'>
.hd-container {
  height: 33px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .icon-dot {
    float: left;
    width: 34px;
    height: 34px;
    background: url(~@/assets/img/discover/index.png) no-repeat 0 9999px;
    background-position: -225px -156px;
  }
  .tit,
  h3 {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  a:hover {
    text-decoration: underline;
  }
  .tab {
    float: left;
    margin: 7px 0 0 20px;
    .line {
      margin: 0 10px;
      color: #ccc;
    }
  }
}
</style>