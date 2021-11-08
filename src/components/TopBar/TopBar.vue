<template>
  <div class="topbar-container f-oys">
    <!-- 导航 -->
    <div class="m-top">
      <div class="wrap f-cb">
        <!-- LOGO -->
        <h1 class="logo"><a href="/#">网易云音乐</a></h1>
        <!-- 一级菜单 -->
        <ul class="m-nav j-tflag">
          <li class="fst">
            <span><a href="/#" class="z-slt"><em>发现音乐</em><sub class="cor">&nbsp;</sub></a></span>
          </li>
          <li>
            <span><a href="/my/"><em>我的音乐</em><sub class="cor">&nbsp;</sub></a></span>
          </li>
          <li>
            <span><a href="/friend"><em>朋友</em><sub class="cor">&nbsp;</sub><i class="dot j-t" style="display:none;"></i></a></span>
          </li>
          <li>
            <span><a href="/store/product" target="_blank"><em>商城</em></a></span>
          </li>
          <li>
            <span><a href="/musician/artist" target="_blank"><em>音乐人</em></a></span>
          </li>
          <li class="lst">
            <span><a href="/download"><em>下载客户端</em><sub class="cor">&nbsp;</sub></a></span>
            <sup class="hot"></sup>
          </li>
        </ul>
        <!-- 登录 -->
        <div class="m-tophead f-pr j-tflag">
          <!-- 完未登录 -->
          <a href="#" class="link s-fc3">
            登录
          </a>
          <!-- 已登录 -->
          <div class="m-tlist j-uflag" style="display: none;">
            <div class="inner"></div>
            <i class="arr"></i>
          </div>
        </div>
        <!-- 搜索 -->
        <a href="/login?targetUrl=%2Fcreatorcenter" target="_blank" class="m-topvd f-pr m-creator-center">创作者中心</a>
        <div class="m-srch f-pr j-suggest" id="g_search">
          <div class="srchbg">
            <span class="parent">
              <input type="text" name="srch" id="srch" class="txt j-flag" value="" />
              <label class="ph j-flag">音乐/视频/电台/用户</label></span>
          </div>
          <div class="j-showoff u-showoff f-hide">
            <p>现在支持搜索MV啦~</p>
          </div>
          <span class="j-flag" style="display:none;">&nbsp;</span>
          <div class="u-lstlay j-flag" style="display:none;"></div>
        </div>
      </div>
    </div>

    <!-- 二级导航 -->
    <div class="m-subnav m-subnav-up f-pr f-hide j-tflag"></div>
    <div class="m-subnav j-tflag">
      <div class="wrap f-pr">
        <ul class="nav">
          <li><a href="/discover" class="z-slt"><em>推荐</em></a></li>
          <li><a href="/discover/toplist"><em>排行榜</em></a></li>
          <li><a href="/discover/playlist"><em class="f-pr" style="padding: 0 15px 0 11px;">歌单<span class="f-pa f-r-white-icon" style="display:inline-block;width:8px;height:8px;top:2px;background-size:cover;"></span></em></a></li>
          <li><a href="/discover/djradio"><em>主播电台</em></a></li>
          <li><a href="/discover/artist"><em>歌手</em></a></li>
          <li><a href="/discover/album"><em>新碟上架</em></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

.topbar-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  zoom: 1;
  min-width: 1100px;
  .m-top {
    position: relative;
    z-index: 999;
    height: 70px;
    background-color: #242424;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    .logo {
      float: left;
      width: 176px;
      height: 100%;
      background: url(./img/image.png) no-repeat center;
      a {
        float: left;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
      }
    }
    .m-nav {
      float: left;
      height: 70px;
      li {
        float: left;
        position: relative;
        height: 100%;
        text-align: center;
        span {
          float: left;
          height: 100%;
          a {
            padding: 0 19px;
            float: left;
            height: 70px;
            line-height: 70px;
            &.z-slt .cor {
              display: block;
              position: absolute;
              left: 50%;
              bottom: -4px;
              width: 0;
              height: 0;
              overflow: hidden;
              border: 4px solid transparent;
              border-top-color: #c20c0c;
              border-right-color: #c20c0c;
              transform: translateX(-50%) rotate(-45deg);
            }
            &.z-slt {
              background-color: #000;
            }
            &:hover {
              background-color: #000;
            }
            em {
              float: left;
              height: 70px;
              width: 100%;
              font-size: 14px;
              font-style: normal;
            }
            .cor {
              display: none;
            }
          }
        }
        &.lst .hot {
          position: absolute;
          top: 21px;
          left: 100px;
          width: 26px;
          height: 13px;
          background: url(./img/topbar_hot.png) no-repeat;
        }
      }
    }
    .m-tophead {
      float: right;
      height: 45px;
      margin: 19px 0 0 20px;
      padding: 0 22px 0 0;
      background-image: none;
      .link {
        display: block;
        width: 28px;
        margin-top: 7px;
        color: #999999;
        font-size: 12px;
        &:hover {
          text-decoration: underline;
          color: #787878;
        }
      }
    }
    .m-topvd {
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4f4f4f;
      // background-position: 0 -140px;
      line-height: 32px;
      color: #ccc;
      border-radius: 20px;
      font-size: 12px;
      &:hover {
        color: #fff;
        border-color: #fff;
      }
    }
    .m-srch {
      float: right;
      width: 158px;
      height: 32px;
      .parent {
        display: block;
        position: relative;
        margin: 8px 0 0 30px;
        font-size: 12px;
        input {
          color: #333;
          line-height: 16px;
          width: 95%;
          margin: 0;
          padding: 0;
          background: transparent;
          border: 0;
          outline: none;
        }
        label {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 90%;
          color: #9b9b9b;
          cursor: text;
        }
      }
      .srchbg {
        margin-top: 19px;
        // background-position: 0 -99px;
        background-color: #fff;
        border-radius: 32px;
        float: right;
        width: 158px;
        height: 32px;
      }
    }
  }
  .m-subnav-up {
    height: 5px;
  }
  .m-subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
    .nav {
      float: left;
      padding-left: 180px;
      li {
        height: 34px;
        text-align: center;
        float: left;
        a {
          float: left;
          height: 100%;
          color: #fff;
          &:hover em {
            background-color: #a40011;
          }
          &.z-slt em {
            background-color: #a40011;
          }
          em {
            font-style: normal;
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            border-radius: 20px;
            line-height: 21px;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.wrap {
  width: 1100px;
  height: 100%;
  margin: 0 auto;
}

.f-hide {
  display: none;
}

.f-pa {
  position: absolute;
}

.f-r-white-icon {
  background: url(./img/white-r-icon@3x.png);
}

.f-pr {
  position: relative;
  zoom: 1;
}
</style>