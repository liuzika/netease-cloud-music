<template>
  <div class="nl-container">
    <!-- 未登录 我的音乐 -->
    <div class="n-pglg" v-if="mORp">
      <div class="pic">
        <h2>登录网易云音乐</h2>
        <a hidefocus="true" href="#" class="btn">立即登录</a>
      </div>
    </div>
    <!-- 未登录 朋友 -->
    <div class="n-pglg2" v-else>
      <div class="welc s-fc3 f-fs1">你可以关注明星和好友品味他们的私房歌单<br>通过他们的动态发现更多精彩音乐</div>
      <a hidefocus="true" href="#" class="btn">立即登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotLogin",
  props: {
    // true 显示我的音乐页面未登录， false 显示朋友页面未登录
    mORp: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang='less'>
.nl-container {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .n-pglg {
    width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;
    background: url(~@/assets/img/notLogin/mymusic.png) no-repeat;
    background-position: 0 104px;
    h2 {
      height: 100px;
      text-indent: -9999px;
    }
    .btn {
      display: block;
      width: 167px;
      height: 45px;
      margin: 102px 0 0 482px;
      background: url(~@/assets/img/notLogin/mymusic.png) no-repeat;
      background-position: 0 9999px;
      text-indent: -9999px;
      &:hover {
        background-position: 0 -278px;
      }
    }
  }
  .n-pglg2 {
    width: 902px;
    height: 414px;
    margin: 0 auto 0;
    padding-top: 70px;
    background: url(~@/assets/img/notLogin/notlogin.jpg) no-repeat;
    background-position: 0 70px;
    .welc {
      padding: 178px 0 0 535px;
      line-height: 23px;
    }
    .btn {
      display: block;
      width: 157px;
      height: 48px;
      margin: 36px 0 0 535px;
      background: url(~@/assets/img/notLogin/notlogin.jpg) no-repeat;
      background-position: 0 9999px;
      text-indent: -9999px;
      &:hover {
        background-position: 0 -430px;
      }
    }
  }
}
</style>