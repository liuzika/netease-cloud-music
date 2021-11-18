<template>
  <div class="banner-container d-flag" id="index-banner" style="
      background-image: url('http://p1.music.126.net/RSDNr99tgBpK_iW49HhJ-A==/109951166624632040.jpg?imageView&amp;blur=40x20');
      background-size: 6000px;
      background-position: center center;
    ">
    <div class="wrap">
      <div class="ban f-pr" style="z-index: 10">
        <div class="ban-img">
          <a hidefocus="true" class="active d-flag" style="overflow: hidden" href="/song?id=1895106329">
            <img class="d-flag" src="http://p1.music.126.net/RSDNr99tgBpK_iW49HhJ-A==/109951166624632040.jpg?imageView&amp;quality=89">
          </a>
          <div class="ban-tag">广告</div>
        </div>
        <a hidefocus="true" href="javascript:void(0)" class="btnl">&lt;</a>
        <a hidefocus="true" href="javascript:void(0)" class="btnr">&gt;</a>
        <div class="dots f-cb">
          <a hidefocus="true" href="#" class="pg" data-index="0"></a>
          <a hidefocus="true" href="#" class="pg" data-index="1"></a>
          <a hidefocus="true" href="#" class="pg" data-index="2"></a>
          <a hidefocus="true" href="#" class="pg" data-index="3"></a>
          <a hidefocus="true" href="#" class="pg" data-index="4"></a>
          <a hidefocus="true" href="#" class="pg" data-index="5"></a>
          <a hidefocus="true" href="#" class="pg" data-index="6"></a>
          <a hidefocus="true" href="#" class="pg z-slt" data-index="7"></a>
          <a hidefocus="true" href="#" class="pg" data-index="8"></a>
          <a hidefocus="true" href="#" class="pg" data-index="9"></a>
        </div>
      </div>
      <div class="download f-pr">
        <a href="/download" class="btn" hidefocus="true">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span class="shadow"></span><span class="shadowr"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang='less'>
.banner-container {
  .shadow,
  .shadowr,
  .ban .btnl,
  .ban .btnr,
  .dots .pg {
    background: url(~@/assets/img/Banner/banner.png) 0 9999px no-repeat;
  }
  .wrap {
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    .ban {
      width: 982px;
      height: 285px;
      .ban-img {
        width: 100%;
        height: 285px;
        overflow: hidden;
        img {
          display: block;
          width: 730px;
        }
        // 右下角广告
        .ban-tag {
          font-size: 12px;
          position: absolute;
          padding: 2px 6px;
          bottom: 0;
          left: 0;
          color: #fff;
          background-color: #5578c6;
          border-radius: 0 4px 0 0;
          display: none;
        }
      }
      .btnl,
      .btnr {
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -31px;
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
      .btnl {
        left: -68px;
        background-position: 0 -360px;
      }
      .btnr {
        right: -68px;
        background-position: 0 -508px;
      }
      .dots {
        position: absolute;
        top: 259px;
        left: 0;
        width: 730px;
        height: 20px;
        text-align: center;
        .pg {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-position: 3px -343px;
          &.z-slt {
            background-position: -16px -343px;
          }
          &:hover {
            background-position: -16px -343px;
          }
        }
      }
    }
    .download {
      position: absolute;
      top: 0;
      z-index: 20;
      right: -1px;
      width: 254px;
      height: 285px;
      &,
      & .btn {
        background: url(~@/assets/img/Banner/download.png) no-repeat 0 0;
      }
      .btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
        &:hover {
          background-position: 0 -290px;
        }
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }
      .shadow,
      .shadowr {
        display: block;
        _display: none;
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 285px;
        background-position: -1px 0;
      }
      .shadowr {
        left: auto;
        right: -20px;
        background-position: -20px 0;
      }
    }
  }
}
</style>