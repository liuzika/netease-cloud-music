<template>
  <ul class="m-nav j-tflag">
    <li class="fst">
      <span>
        <router-link to="/home" @click.native="changeSubNav(true)" active-class='z-slt' hidefocus="true"><em>发现音乐</em><sub class="cor">&nbsp;</sub></router-link>
      </span>
    </li>
    <li>
      <span>
        <router-link to="/my" @click.native="changeSubNav(false)" active-class='z-slt' hidefocus="true"><em>我的音乐</em><sub class="cor">&nbsp;</sub></router-link>
      </span>
    </li>
    <li>
      <span>
        <router-link to="/friend" @click.native="changeSubNav(false)" active-class='z-slt' hidefocus="true"><em>朋友</em><sub class="cor">&nbsp;</sub><i class="dot j-t" style="display:none;"></i></router-link>
      </span>
    </li>
    <li>
      <span>
        <a href="https://music.163.com/store/product" hidefocus="true" target="_blank"><em>商城</em></a>
      </span>
    </li>
    <li>
      <span>
        <a href="https://music.163.com/st/musician" hidefocus="true" target="_blank"><em>音乐人</em></a>
      </span>
    </li>
    <li class="lst">
      <span>
        <router-link to="/download" @click.native="changeSubNav(false)" active-class='z-slt' id="topbar-download-link" hidefocus="true"><em>下载客户端</em><sub class="cor">&nbsp;</sub></router-link>
      </span><sup class="hot">&nbsp;</sup>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TopNav",
  methods: {
    changeSubNav(bool) {
      console.log(123);
      this.$emit("changeSubNav", bool);
    },
  },
};
</script>

<style lang='less'>
.m-nav {
  float: left;
  li,
  li span,
  a,
  a em {
    float: left;
    height: 70px;
    font-size: 14px;
  }
  li.lst,
  li.fst span {
    background: none;
  }
  li {
    position: relative;
    *zoom: 1;
    background-position: right -300px;
    a {
      padding: 0 19px;
      text-align: center;
      line-height: 70px;
      color: #ccc;
      &:hover,
      &.z-slt {
        background: #000;
        text-decoration: none;
        color: #fff;
      }
      &.z-slt .cor {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
      }
    }
    .cor {
      display: none;
    }
    .hot,
    .cor {
      background: url(~@/assets/img/commonbg/topbar.png) no-repeat 0 9999px;
    }
    .hot {
      display: block;
      position: absolute;
      top: 21px;
      left: 100px;
      width: 28px;
      height: 19px;
      background-position: -190px 0;
    }
    .dot {
      display: block;
      position: absolute;
      top: 24px;
      left: 54px;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background: #c20c0c;
    }
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .m-nav a.z-slt .cor {
    top: 64px;
    background-position: -105px -70px;
    background-size: 120px auto;
  }
}
</style>