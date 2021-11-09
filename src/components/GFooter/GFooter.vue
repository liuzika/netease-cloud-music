<template>
  <footer class="g-ft">
    <div class="m-ft">
      <div class="wrap f-cb">
        <div class="copy">
          <p class="link" id="music-link">
            <a href="#" target="_blank" class="item s-fc4">服务条款</a>
            <span class="line">|</span>
            <a href="#" target="_blank" class="item s-fc4">隐私政策</a>
            <span class="line">|</span>
            <a href="#" target="_blank" class="item s-fc4">儿童隐私政策</a>
            <span class="line">|</span>
            <a href="#" target="_blank" class="item s-fc4">版权投诉指引</a>
            <span class="line">|</span>
            <a href="#" id="g_feedback" class="s-fc4">意见反馈</a>
            <span class="line">|</span>
            <a href="#" class="item s-fc4">广告合作</a>
          </p>
          <p class="right s-fc3">
            <span class="sep span">网易公司版权所有©1997-2021</span>
            <span class="span">杭州乐读科技有限公司运营：</span>
            <a href="#" target="_blank" class="alink s-fc3">浙网文[2021] 1186-054号</a>
          </p>
          <p class="content s-fc3">
            <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
            <span class="span">举报邮箱：</span>
            <a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p class="right s-fc3">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" class="alink s-fc3">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" class="alink s-fc3 police-link">
              <span class="police-logo"></span>
              <span class="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <ul class="enter f-fr">
          <li class="unit">
            <a class="logo logonew logo-amped f-tid" href="https://web-amped.music.163.com/" target="_blank"></a>
            <span class="tt tt-amped"></span>
          </li>
          <li class="unit">
            <a class="logo logonew logo-auth f-tid" href="//music.163.com/st/userbasic#/auth" target="_blank"></a>
            <span class="tt tt-auth"></span>
          </li>
          <li class="unit">
            <a class="logo logonew logo-musician f-tid" href="//music.163.com/musician/artist" target="_blank"></a>
            <span class="tt tt-musician"></span>
          </li>
          <li class="unit">
            <a class="logo logonew logo-reward f-tid" href="//music.163.com/web/reward" target="_blank"></a>
            <span class="tt tt-reward"></span>
          </li>
          <li class="unit">
            <a class="logo logonew logo-cash f-tid" href="//music.163.com/uservideo#/plan" target="_blank"></a>
            <span class="tt tt-cash"></span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GFooter",
};
</script>

<style lang='less'>
.g-ft {
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .m-ft {
    width: 980px;
    margin: 0 auto;
    .copy {
      float: left;
      width: 520px;
      padding-top: 15px;
      line-height: 24px;
      .line {
        margin: 0 8px 0 10px;
        color: #c2c2c2;
      }
      .s-fc4:hover {
        text-decoration: underline;
      }
      .sep {
        margin-right: 14px;
      }
      .police-link {
        margin-left: 5px;
        font-size: 0;
        .police-logo {
          width: 14px;
          height: 14px;
          background: url(~@/assets/img/gfooter/police.png) no-repeat;
          background-size: cover;
          display: inline-block;
          margin-right: 2px;
          vertical-align: -2px;
        }
        .police-text {
          font-size: 12px;
        }
      }
    }
    .enter {
      width: 420px;
      margin-top: 33px;
      .unit {
        float: left;
        width: 60px;
        height: 70px;
        margin-left: 30px;
        text-align: center;
        color: #666;
        .logo {
          float: left;
          width: 60px;
          height: 70px;
          margin-left: 30px;
          background: url(~@/assets/img/gfooter/foot_enter.png) no-repeat 0 9999px;
          &.logonew {
            background: url(~@/assets/img/gfooter/foot_enter_new.png) no-repeat;
            background-size: 110px 552px;
          }
        }
        &:first-child {
          margin-left: 0;
        }
        .logonew {
          display: block;
          float: none;
          width: 50px;
          height: 45px;
          margin: 0 auto;
          & + .tt {
            background: url(~@/assets/img/gfooter/foot_enter_tt.png) no-repeat;
            background-size: 180px 139px;
          }
          &.logo-amped {
            background-position: -63px -456.5px;
          }
          &.logo-musician {
            background-position: 0 0;
          }
          &.logo-topic {
            background-position: -60px 0;
          }
          &.logo-midea {
            background-position: 0 -50px;
          }
          &.logo-reward {
            background-position: -60px -50px;
          }
          &.logo-cash {
            background-position: 0 -101px;
          }
          &.logo-auth {
            background-position: -63px -101px;
          }
        }
        .tt {
          display: inline-block;
          margin: 5px 5px 0;
          width: 52px;
          height: 14px;

          &.tt-amped {
            background-position: 0 -108px;
            margin-left: -6px;
            width: 72px;
          }
          &.tt-musician {
            background-position: 0 0;
          }
          &.tt-topic {
            background-position: 0 -20px;
          }
          &.tt-midea {
            background-position: 0 -40px;
          }
          &.tt-reward {
            background-position: 0 -54px;
          }
          &.tt-cash {
            background-position: -1px -72px;
          }
          &.tt-auth {
            background-position: -1px -91px;
          }
        }
      }
    }
    .logo-midea {
      background-position: 0 0;
    }
    .logo-topic {
      background-position: 0 -80px;
    }
    .logo-reward {
      background-position: -60px 0;
    }
    .logo-musician {
      background-position: -60px -80px;
      margin-left: 0;
    }
    .logo-cash {
      background: url(~@/assets/img/gfooter/cash.png) no-repeat;
    }
  }
}
</style>