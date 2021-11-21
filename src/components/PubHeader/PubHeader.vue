<template>
  <div class="hd-container" :style="{ height }">
    <i class="icon-dot" v-if="isIconDot"></i>
    <h3 v-if="!isLink" :style="{ fontSize: fSize ,lineHeight,fontWeight}">
      <span class="f-ff2">{{ title }}</span>
    </h3>
    <a href="/discover/playlist/" class="tit f-ff2 f-tdn" :style="{ fontSize: fSize }" v-else>{{ title }}</a>
    <slot name="tab"></slot>
    <span class="more" v-if="isMore">
      <a href="/discover/playlist/" class="s-fc3">更多</a>
      <i class="cor s-bg s-bg-6">&nbsp;</i>
    </span>
    <slot name="customPub"></slot>
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
    isLink: {
      type: Boolean,
      default: false,
    },
    isMore: {
      type: Boolean,
      default: true,
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
  // padding-right: 10px;
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
  .tab {
    float: left;
    margin: 7px 0 0 20px;
    .line {
      margin: 0 10px;
      color: #ccc;
    }
  }
  .more {
    float: right;
    margin-top: 9px;
    margin-right: 10px;
    .cor {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
}
</style>