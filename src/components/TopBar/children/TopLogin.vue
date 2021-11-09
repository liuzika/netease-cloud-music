<template>
  <div class="m-tophead f-pr j-tflag" id="auto-id-QGPv3JFlg8lwAI9W">
    <!-- 登录按钮 -->
    <a hidefocus="true" href="#" class="link s-fc3">登录</a>
    <!-- 已登录状态 -->
    <div class="head f-fl f-pr" style="display: none;"><img src="https://p1.music.126.net/pVptwn0wRkMLLmjIdtGr7Q==/109951165973320454.jpg?param=30y30"><a href="/user/home?id=330293944" class="mask"></a><i class="m-topmsg f-pa j-uflag">20</i></div><a href="/user/home?id=330293944" class="name f-thide f-fl f-tdn f-hide">二笑倾心丶</a>
    <!-- 用户菜单 -->
    <div class="m-tlist m-tlist-lged j-uflag" style="display: none;">
      <ul class="f-cb lb mg">
        <li><a hidefocus="true" class="itm-1" href="/user/home?id=330293944"><i class="icn icn-hm"></i><em>我的主页</em></a></li>
        <li><a href="/msg/#/private" class="itm-2"><i class="icn icn-msg"></i><em>我的消息</em><span class="m-topmsg f-pa j-uflag">20</span></a></li>
        <li><a href="/user/level" class="itm-2"><i class="icn icn-lv"></i><em>我的等级</em></a></li>
        <li><a href="/member" class="itm-2"><i class="icn icn-mbr"></i><em>VIP会员</em></a></li>
      </ul>
      <ul class="f-cb ltb mg">
        <li><a hidefocus="true" class="itm-2" href="/user/update"><i class="icn icn-st"></i><em>个人设置</em></a></li>
        <li><a hidefocus="true" class="itm-2" href="/login?targetUrl=%2Fst/userbasic/#/nameverify" target="_blank"><i class="icn icn-verify"></i><em>实名认证</em></a></li>
      </ul>
      <ul class="f-cb lt">
        <li><a hidefocus="true" class="itm-3" href="#"><i class="icn icn-ex"></i><em>退出</em></a></li>
      </ul><i class="arr"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopLogin",
};
</script>

<style lang='less'>
.m-tophead {
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
  background-position: right -47px;
  background-image: none;
  &:hover .link {
    color: #999;
  }
  .link,
  .link:hover {
    display: block;
    width: 28px;
    margin-top: 7px;
    color: #787878;
  }
  .head {
    margin-top: 1px;
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
    .icn {
      position: absolute;
      top: -3px;
      right: -5px;
    }
  }
  .m-topmsg {
    top: -5px;
    left: 20px;
    display: inline-block;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    box-sizing: border-box;
    background: #c20c0c;
    border-radius: 18px;
    border: 1px solid #242424;
    line-height: 16px;
    font-size: 12px;
    white-space: nowrap;
    color: #fff;
    text-align: center;
  }
  .name {
    display: inline-block;
    max-width: 100px;
    margin: 8px 0 0 8px;
    line-height: 17px;
    color: #adadad;
  }
  &:hover .name,
  .name:hover {
    color: #d3d3d3;
  }
  .m-tlist {
    position: absolute;
    top: 38px;
    right: -43px;
    width: 158px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    .ltb {
      border: 1px solid #232323;
      border-width: 1px 0;
    }
    li,
    li a {
      float: left;
      box-sizing: border-box;
      width: 100%;
    }
    a {
      position: relative;
      height: 38px;
      box-sizing: border-box;
      overflow: hidden;
      padding-left: 24px;
      color: #ccc;
      line-height: 39px;
      &:hover {
        background: #353535;
        text-decoration: none;
        color: #fff;
      }
      em {
        float: left;
        width: 100px;
      }
    }
    .m-tlist-lged a {
      height: 34px;
      line-height: 34px;
    }
  }
}

.m-tophead-simple {
  padding-right: 0;
  background: none;
}

.m-tlist .icn,
.m-tlist .arr {
  background: url(~@/assets/img/commonbg/toplist.png) no-repeat 0 9999px;
}
.m-tlist .arr {
  position: absolute;
  top: -8px;
  left: 50%;
  width: 14px;
  height: 8px;
  margin-left: -7px;
  background-position: -20px 0;
}

.m-tlist-lged .arr {
  margin-left: -8px;
}
.m-tlist .icn {
  float: left;
  width: 18px;
  height: 18px;
  margin: 10px 10px 0 -7px;
}
.m-tlist-lged .icn {
  margin: 7px 10px 0 0;
}
.m-tlist .m-topmsg {
  top: 7px;
  left: 110px;
}
.m-tlist .icn-mb {
  background-position: 0 0;
}
.m-tlist .icn-wx {
  background-position: -20px -20px;
}
.m-tlist .icn-qq {
  background-position: -20px -40px;
}
.m-tlist .icn-sn {
  background-position: 0 -20px;
}
.m-tlist .icn-wy {
  background-position: 0 -40px;
}
.m-tlist .icn-tc {
  background-position: 0 -60px;
}
.m-tlist .icn-hm {
  background-position: 0 -80px;
}
.m-tlist .icn-msg {
  background-position: -20px -120px;
}
.m-tlist .icn-lv {
  background-position: 0 -100px;
}
.m-tlist .icn-mbr {
  background-position: 0 -221px;
  margin-top: 9px;
}
.m-tlist .icn-store {
  background-position: 0 -120px;
}
.m-tlist .icn-st {
  background-position: 0 -140px;
}
.m-tlist .icn-verify {
  background-position: -20px -142px;
}
.m-tlist .icn-dj,
.m-tlist .icn-rdi {
  background-position: 0 -160px;
}
.m-tlist .icn-imt {
  background-position: 0 -180px;
}
.m-tlist .icn-ex {
  background-position: 0 -200px;
}
.m-tlist .u-icn-78 {
  float: left;
  margin: 9px 0 0 10px;
}
.m-tlist .icn-new {
  width: 26px;
  height: 15px;
  margin: 13px 0 0 11px;
  background-position: 0 -370px;
}
.m-tlist .icn-topic {
  width: 16px;
  height: 15px;
  background-position: -20px -60px;
  margin: 9px 10px 0 1px;
}
.m-tlist .icn-reward {
  width: 16px;
  height: 16px;
  background-position: -20px -80px;
  margin: 8px 10px 0 0;
}
</style>