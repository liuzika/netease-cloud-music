<template>
  <div class="tooltip-container" @click.stop>
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
      <a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/Android.png" alt="">
        <em class="f-ff2">Android版</em>
      </a>
      <a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/iPhone-iPad.png" alt="">
        <em class="f-ff2">iPhone版</em>
      </a>
      <a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/iPhone-iPad.png" alt="">
        <em class="f-ff2">iPad版</em>
      </a><a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/Mac.png" alt="">
        <em class="f-ff2">Mac版</em>
      </a><a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/PC-UWP-WP.png" alt="">
        <em class="f-ff2">PC版</em>
      </a><a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/PC-UWP-WP.png" alt="">
        <em>UWP版</em>
      </a><a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/PC-UWP-WP.png" alt="">
        <em class="f-ff2">WP版</em>
      </a><a href="javascript:void(0);" hidefocus="true">
        <img src="~@/assets/img/downloadPage/tooltip/Linux.png" alt="">
        <em class="f-ff2">Linux版</em>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DlCatefory",
};
</script>

<style lang='less'>
.tooltip-container {
  position: absolute;
  top: 65px;
  right: 0;
  background-color: #fff;
  width: 276px;
  height: 210px;
  padding: 20px 0;
  border-radius: 15px;
  z-index: 20;
  .tooltip-arrow {
    position: absolute;
    top: -6px;
    right: 40px;
    border: 6px solid transparent;
    border-top: 6px solid #fff;
    border-left: 6px solid #fff;
    transform: rotate(45deg);
  }
  .tooltip-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    a {
      width: 113px;
      height: 45px;
      text-indent: 15px;
      line-height: 45px;
      background-color: #ebebeb;
      border-radius: 3px;
      margin-bottom: 10px;
      &:hover {
        text-decoration: none;
      }
      img {
        width: 25px;
        height: 25px;
        vertical-align: middle;
      }
    }
  }
}
</style>