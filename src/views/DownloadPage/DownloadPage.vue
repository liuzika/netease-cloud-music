<template>
  <div class="download-container" @click="isTooltip = false">
    <!-- 右边浮动二维码 -->
    <div class="qrcode m_dl">
      <img src="~@/assets/img/downloadPage/mobile_download_code.jpg" alt="移动端下载" />
      <p>扫描二维码下载</p>
    </div>
    <!-- PC，移动下载 -->
    <div class="wrapper">
      <div class="main_m-main" :class="{main_shrink: isShrink}">
        <div class="main_n-pc">
          <div class="main_title">在电脑上听</div>
          <img src="~@/assets/img/downloadPage/PC_download.png" class="main_img" />
          <div class="main_type-tip">
            <span><i class="main_icon-tip main_icon-mac"></i></span><span><i class="main_icon-tip main_icon-win"></i></span>
          </div>
          <div class="main_button">下载电脑端</div>
        </div>
        <div class="main_n-mobile">
          <div class="main_title">在手机上听</div>
          <img src="~@/assets/img/downloadPage/mobile_phone_download.png" class="main_img" />
          <div class="main_type-tip">
            <span><i class="main_icon-tip main_icon-iphone"></i></span><span><i class="main_icon-tip main_icon-android"></i></span>
          </div>
          <div class="main_button">
            <i class="main_icon-ncode"></i>下载手机端
          </div>
        </div>
      </div>
      <div class="clients" @click.stop="isTooltip = !isTooltip"><i class="icon-download"></i>其他操作系统客户端</div>
      <Tooltip v-if="isTooltip"></Tooltip>
    </div>
    <!-- 下边描述 -->
    <div>
      <Dcnt v-for="(item, i) in dcntList" :key="i" :dcnt="item"></Dcnt>
    </div>
    <!-- 底部 可以使用底部组件 -->
    <!-- <div class="footer__g-ft___OQRjG">
            <div class="footer__m-ft___2UViJ">
                <div class="f-cb">
                    <div class="footer__copy___3q4O4">
                        <p id="music-link"><a href="https://st.music.163.com/official-terms/service" target="_blank" class="s-fc4">服务条款</a><span class="footer__line___3gWV3">|</span><a href="https://music.163.com/html/web2/privacy.html" target="_blank" class="s-fc4">隐私政策</a>
                            <span class="footer__line___3gWV3">|</span><a href="//music.163.com/st/staticdeal/complaints.html" target="_blank" class="s-fc4">版权投诉指引</a></p>
                        <p class="s-fc3"><span class="footer__sep___3zDs7">网易公司版权所有©1997-2021</span><span>杭州乐读科技有限公司运营：</span><a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank" class="s-fc3">浙网文[2021] 1186-054号</a></p>
                        <p class="s-fc3 footer__mail___1KWyi"><span class="footer__sep___3zDs7">违法和不良信息举报电话：0571-89853516</span><span>举报邮箱：</span><a href="mailto:ncm5990@163.com">ncm5990@163.com</a></p>
                        <p class="s-fc3"><span class="footer__sep___3zDs7">粤B2-20090191-18</span><a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" class="s-fc3">工业和信息化部备案管理系统网站</a></p>
                    </div>
                    <ul class="f-fr footer__enter___35_lK">
                        <li class="footer__unit___2_LTc">
                            <a class="f-tid footer__logo___mxGDS footer__logonew___QHYkz footer__logo-auth___3bMUk" href="https://music.163.com/st/userbasic#/auth" target="_blank"></a><span class="footer__tt___3jqIq footer__tt-auth___HgpNg"></span></li>
                        <li class="footer__unit___2_LTc">
                            <a class="f-tid footer__logo___mxGDS footer__logonew___QHYkz footer__logo-musician___3OV1W" href="https://music.163.com/recruit" target="_blank"></a><span class="footer__tt___3jqIq footer__tt-musician___X2TOm"></span></li>
                        <li class="footer__unit___2_LTc">
                            <a class="f-tid footer__logo___mxGDS footer__logonew___QHYkz footer__logo-reward___nx1fF" href="https://music.163.com/web/reward" target="_blank"></a><span class="footer__tt___3jqIq footer__tt-reward___aOa88"></span></li>
                        <li class="footer__unit___2_LTc">
                            <a href="https://music.163.com/uservideo#/plan" target="_blank" class="footer__logo___mxGDS footer__logonew___QHYkz footer__logo-cash___2amku"></a><span class="footer__tt___3jqIq footer__tt-cash___2EIXa"></span></li>
                    </ul>
                </div>
            </div>
        </div> -->
  </div>
</template>

<script>
import Dcnt from "./Dcnt";
import Tooltip from "./Tooltip";

export default {
  name: "DownloadPage",
  components: {
    Dcnt,
    Tooltip,
  },
  data() {
    return {
      isTooltip: false, // 显示下载列表
      isShrink: false, // 分辨率在1920以下
      // 模拟描述数据
      dcntList: [
        {
          id: 1,
          title: "千万曲库 首首CD音质",
          describe: "囊括百万无损SQ音乐，你在用手机听歌时，<br>也能感受到纤毫毕现的CD音质，更能免费离线收听",
          imgUrl: "dcnt-01.jpg",
          isFloatLeft: true,
          isDcnt2: false,
        },
        {
          id: 2,
          title: "千位明星  亲自推荐音乐",
          describe: "韩红，戴佩妮等<em>千位明星已入驻</em>，亲自创建私房歌单，录制独<br />家DJ节目，推荐他们心中的好音乐",
          imgUrl: "dcnt-02.jpg",
          isFloatLeft: false,
          isDcnt2: true,
        },
        {
          id: 3,
          title: "社交关系 发现全新音乐",
          describe: "你可以<em>关注明星</em>、DJ和好友，通过浏览他们的动态、收藏和<br />分享，发现更多全新好音乐",
          imgUrl: "dcnt-03.jpg",
          isFloatLeft: true,
          isDcnt2: false,
        },
        {
          id: 4,
          title: "手机电脑  歌单实时同步",
          describe: "只要一个帐号，你就可以同步在手机、电脑上创建、收藏<br />的歌单，<em>随时随地畅享好音乐</em>",
          imgUrl: "dcnt-04.jpg",
          isFloatLeft: false,
          isDcnt2: true,
        },
        {
          id: 5,
          title: "听歌识曲 助你疯狂猜歌",
          describe: "歌曲很动听却不知道歌名，歌名在嘴边却想不起来……<br />用<em>听歌识曲</em>功能，几秒钟就知道歌名",
          imgUrl: "dcnt-05.jpg",
          isFloatLeft: true,
          isDcnt2: false,
        },
      ],
    };
  },
  mounted() {
    // 如果分辨率在1920以下
    const screenW = screen.width;
    const screenH = screen.height;
    if (screenW < 1920 || screenH < 1080) {
      this.isShrink = true;
    }
  },
};
</script>

<style lang='less'>
.download-container {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/downloadPage/download_bg.jpg) no-repeat;
  background-color: #222;
  background-size: cover;
  font-family: PingFangSC-Regular;
  // 右边二维码下载
  .qrcode {
    position: fixed;
    z-index: 10;
    top: 395px;
    right: 25px;
    padding: 16px 18px 9px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #333;
    font-size: 12px;
    text-align: center;
    &.m_dl {
      top: 325px;
    }
    p {
      margin-top: 10px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
  // 主体下载
  .wrapper {
    position: relative;
    width: 1100px;
    margin: 0 auto;
    .clients {
      position: absolute;
      line-height: 60px;
      height: 60px;
      top: 0;
      right: 0;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      .icon-download {
        float: left;
        width: 20px;
        height: 20px;
        margin-top: 20px;
        margin-right: 6px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA5RJREFUWAnNmbtvE0EQh23zCFLsIoWlVEgIQXhTEMlVqECKAkkU/lEggSgFFalSpOARwAUFnaUUIJwUPM3v2+xd7s57593zBWek0e7tzsx+OxffPlKvlZTBYDAj1znprLQpbdlSRe1A2rdlT2W3Xq9/VRks9RAPQQFyTwpYO8RXtvvSrnRXsEzAS7wABTalaB2r570i5xv9VNcOKtAf+WZHPSMBBXdNpovS6VHBAvsPZb8lyE9FfrmAAqNvwWpRjHH7thVgW6ADVyAnoODOyXhZet3ldAJtHxVzQ5C/srHPZhts5lbUzqsNkc8y3rQOSyovBzibRGjsp9lMNhxBeK2hcITZVPDvKHUaAgVIxk5JClAzAGzIKOWR82DBTG+ynmOe17xgGeL+GFAdfEr4tU5aFi2L4YgB9cR3rupPSZnJwgCLEQMoYlaIuNH2TbLoWKZalMF50Yy7QlQ5IVhYUmPAq1VGrygW632toVSyKwld+CtiKAzTho1XbEgLTSfXOQcg+7nTKrMA8gs+rdJkLWYnXCRf1PlC+lv6UHpDOo7syfmVlLHZkFyU5knLJ4Ps2b5J2QU/l77Li+bR/oYYxCKm6lsjfJoAeouC/pUx2Xzv7XRs+FZVNhTOfd+xWboGIJkpkgf6uZ+JDCzkhp55Vb7ChF5aX+OjmLxi/mSK5ADAfpGF+tjXrTkg19X+YYQv3UyEzSjZN2JjPdHDJduUV/R9Mogz30oXJH+T7IbzhAmsO+DW1H4lzynRbjLYSzQUVYFcdWQSSNfBB3B+ENnMAee7OPTIIGdVX2HXuyJI/IwI4I8qz+xjsnDBrcrAF45Y3YYG4MTPodpX+A66IFP+Fty02Qlxzgk5hO3DFmUiJIsMelOagqTRJQm40A+8YYoAdxWcE3+IALmcfN1ZZ9vHaoFtiMAC09F+UKnkW7hDQ6Dckv0jF6Rte6x+bEKFaxHzfY4ySAAAD0Mjyf6OdElA8SWArXM2vl0iHgxxsmJAEXORM2ptzBvvrjr4BF1AqUtpKyOs/bAYiWcdNWiA+6qXOhtHMcYouaN5nfSPM5ho5DKnaHVImFZaZUzGTskQoGbAboPNwP+EZCzW66GdztArjvDtHzqv+qRfN1kLu36LICkFyn0NVyLTPFco/FrLX2AmQQQ5peeO1XEP+NVeAWdAOWDNSznot5N9HvV92bB8VX+J7hpcWZ1ROzsTjq2At2yporp/Q/wDYZIaqIRbHggAAAAASUVORK5CYII=)
          no-repeat;
        background-size: contain;
        vertical-align: text-bottom;
      }
      &:hover {
        opacity: 0.7;
      }
    }
    .main_m-main {
      width: 1100px;
      margin: 0 auto;
      padding: 112px 0;
      .main_n-pc {
        display: inline-block;
        width: 556px;
        height: 100%;
        text-align: center;
        .main_img {
          width: 557px;
          height: 328px;
          margin: 0 auto 3px;
        }
      }
      .main_n-mobile {
        position: relative;
        display: inline-block;
        margin-left: 220px;
        width: 300px;
        height: 100%;
        text-align: center;
        .main_img {
          width: 299px;
          height: 331px;
          margin: 0 auto;
        }
      }
      .main_title {
        margin-bottom: 33px;
        width: 100%;
        text-align: center;
        font-size: 22px;
        opacity: 0.8;
        color: #ffffff;
      }
      .main_type-tip {
        width: 100%;
        margin: 26px auto;
        font-size: 16px;
        color: #eee;
        text-align: center;
        span {
          display: inline-block;
          height: 28px;
          line-height: 24px;
          &:last-child {
            padding-left: 40px;
          }
        }
        .main_icon-tip {
          float: left;
          width: 24px;
          height: 24px;
          &.main_icon-mac {
            width: 154px;
            height: 44px;
            background: url(~@/assets/img/downloadPage/mac_app_store.png) no-repeat;
            background-size: contain;
          }

          &.main_icon-win {
            width: 140px;
            height: 44px;
            background: url(~@/assets/img/downloadPage/windows_download.png) no-repeat;
            background-size: contain;
          }

          &.main_icon-iphone {
            width: 120px;
            height: 44px;
            background: url(~@/assets/img/downloadPage/app_store.png) no-repeat;
            background-size: contain;
          }

          &.main_icon-android {
            width: 120px;
            height: 44px;
            background: url(~@/assets/img/downloadPage/android_download.png) no-repeat;
            background-size: contain;
          }
        }
      }
      .main_button {
        width: 300px;
        height: 65px;
        margin: 0 auto;
        border-radius: 65px;
        background-color: #fff;
        color: #d10000;
        font-size: 22px;
        line-height: 65px;
        text-align: center;
        cursor: pointer;
        box-sizing: content-box;
        &:hover {
          opacity: 0.7;
        }
        .main_icon-ncode {
          display: inline-block;
          width: 21px;
          height: 21px;
          margin-right: 3px;
          background: url(~@/assets/img/downloadPage/phone_min_code.png) no-repeat center;
          background-size: contain;
          vertical-align: -3px;
        }
      }
      // 分辨率在1920以下
      &.main_shrink {
        padding: 80px 0 112px;
        .main_n-pc .main_img {
          width: 464px;
          height: 273px;
        }
        .main_n-mobile .main_img {
          width: 246px;
          height: 273px;
        }
        .main_title {
          margin-bottom: 23px;
        }
        .main_type-tip {
          width: 100%;
          height: 44px;
          margin: 20px auto;
        }
      }
    }
  }
}
</style>