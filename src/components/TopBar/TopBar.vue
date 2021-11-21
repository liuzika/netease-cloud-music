<template>
  <div class="topbar-container">
    <div id="g-topbar" class="g-topbar">
      <!-- 头部 -->
      <div class="m-top">
        <div class="wrap f-cb">
          <h1 class="logo"><a hidefocus="true" href="/#">网易云音乐</a></h1>
          <!-- 一级导航 -->
          <TopNav></TopNav>

          <!-- 登录组件 -->
          <TopLogin></TopLogin>

          <!-- 创作中心 -->
          <a href="/login?targetUrl=%2Fcreatorcenter" target="_blank" class="m-topvd f-pr m-creator-center">创作者中心</a>

          <!-- 搜索组件 -->
          <TopSearch></TopSearch>

        </div>
      </div>

      <!-- 二级导航 -->
      <div class="m-subnav m-subnav-up f-pr j-tflag" v-if="!isShowSubNav"></div>
      <div id="g_nav2" class="m-subnav j-tflag" v-else>
        <div class="wrap f-pr">
          <ul class="nav">
            <li>
              <router-link to="/m/discover" hidefocus="true" active-class="slt"><em>推荐</em></router-link>
            </li>
            <li>
              <router-link to="/m/toplist" active-class="slt" hidefocus="true"><em>排行榜</em></router-link>
            </li>
            <li>
              <router-link to="/m/playlist" active-class="slt" hidefocus="true"><em class="f-pr" style="padding: 0 15px 0 11px;">歌单<span class="f-pa f-r-white-icon" style="display:inline-block;width:8px;height:8px;top:2px;background-size:cover;"></span></em></router-link>
            </li>
            <li>
              <router-link to="/m/djradio" active-class="slt" hidefocus="true"><em>主播电台</em></router-link>
            </li>
            <li>
              <router-link to="/m/artist" active-class="slt" hidefocus="true"><em>歌手</em></router-link>
            </li>
            <li>
              <router-link to="/m/album" active-class="slt" hidefocus="true"><em>新碟上架</em></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "./children/TopNav";
import TopLogin from "./children/TopLogin";
import TopSearch from "./children/TopSearch";
import { mapState } from "vuex";
export default {
  name: "TopBar",
  components: {
    TopNav,
    TopLogin,
    TopSearch,
  },
  computed: {
    ...mapState(["isShowSubNav"]),
  },
};
</script>

<style lang='less'>
.topbar-container {
  width: 100%;
  // overflow: hidden;
  .g-topbar {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    min-width: 1100px;
    z-index: 99;
    zoom: 1;
    .m-top {
      position: relative;
      z-index: 1000;
      height: 70px;
      box-sizing: border-box;
      background: #242424;
      border-bottom: 1px solid #000;
      .wrap {
        width: 1100px;
        margin: 0 auto;
        .logo {
          float: left;
          width: 176px;
          height: 69px;
          background: url(~@/assets/img/commonbg/topbar.png) no-repeat 0 9999px;
          background-position: 0 0;
          a {
            float: left;
            width: 157px;
            height: 100%;
            padding-right: 20px;
            text-indent: -9999px;
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
          background-position: 0 -140px;
          line-height: 33px;
          color: #ccc;
          border-radius: 20px;
          &:hover {
            background-position: -100px -140px;
            color: #fff;
            text-decoration: none;
            border: 1px solid #ccc;
          }
          &.z-dis,
          &.z-dis {
            background-position: 0 -180px;
          }
        }
      }
    }
    .m-subnav {
      z-index: 90;
      height: 35px;
      box-sizing: border-box;
      background-color: #c20c0c;
      border-bottom: 1px solid #a40011;
      .vip {
        right: 0;
        top: 9px;
        height: 14px;
        line-height: 14px;
      }
      .vip i {
        float: left;
        margin-right: 5px;
      }
      .vip a {
        color: #fff;
        text-decoration: none;
      }
      .wrap {
        width: 1100px;
        height: 34px;
        margin: 0 auto;
      }
      .nav {
        float: left;
        padding-left: 180px;
        li,
        a {
          float: left;
          height: 34px;
          text-align: center;
        }
        a {
          color: #fff;
          em {
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            border-radius: 20px;
            line-height: 21px;
          }
          &:hover,
          &.slt {
            color: #fff;
            text-decoration: none;
          }
          &:hover em,
          &.slt em {
            background: #9b0909;
          }
        }
      }
    }
    .m-subnav-up {
      height: 5px;
      _overflow: hidden;
      border-bottom: none;
    }
  }
}

.m-top-1 a.login {
  float: right;
  height: 40px;
  line-height: 40px;
  margin-top: 15px;
  font-size: 12px;
  color: #adadad;
}
.m-top-1 .user {
  float: right;
  height: 45px;
  margin-top: 21px;
}
.m-top-1 .user .img,
.m-top .user .img img {
  width: 30px;
  height: 30px;
}
.m-top-1 .user .name {
  display: inline-block;
  max-width: 100px;
  margin: 8px 0 0 8px;
  line-height: 17px;
  color: #adadad;
}

.m-mail {
  float: right;
  position: relative;
  zoom: 1;
  width: 22px;
  height: 17px;
  margin: 28px 0 0 28px;
  background-position: 0 -50px;
}
.m-mail .u-bub {
  position: absolute;
  top: -11px;
  right: -11px;
}
.m-creator-center {
  background: none !important;
}
</style>