<template>
  <div class="level-container container">
    <div class="my-level">
      <div class="level">
        <div class="h3">
          当前等级：<span class="level-big"><i></i>7</span><span class="level-tips">等级数据每天下午2点更新</span>
        </div>
        <div class="sub">
          <div class="subbg">
            <div style="width: 627.96px"><span></span></div>
            <!-- /宽度为25+81x等级x70% -->
          </div>
          <div class="subnum">
            <div class="divison">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="divnum">
              <ul>
                <li class="z-ov">0</li>
                <li class="z-ov">1</li>
                <li class="z-ov">2</li>
                <li class="z-ov">3</li>
                <li class="z-ov">4</li>
                <li class="z-ov">5</li>
                <li class="z-ov">6</li>
                <li class="z-on">7</li>
                <li class="">8</li>
                <li class="">9</li>
                <li class="">10</li>
              </ul>
            </div>
            <!-- / .ov已过等级样式 .on达到等级样式 -->
          </div>
        </div>
      </div>
      <div class="pow">
        <div class="h3">当前等级特权：</div>
        <div class="telist">
          <ul class="j-flag">
            <li>60G音乐云盘免费容量</li>
            <li>黑名单上限80</li>
            <li>云音乐商城满100减9元优惠券</li>
            <li>价值400云贝</li>
          </ul>
        </div>
        <div class="aboutmore">
          <a href="/level/details">了解等级特权&gt;</a>
        </div>
      </div>
      <div class="nextlv">
        <div class="h4">
          距离下一个等级：<span class="next-level"><i></i>8</span><span class="iconpoint"><a href="javascript:void(0)" class="icon u-icn2 u-icn2-5 j-flag"></a>
            <div class="tip">
              <!-- icon在hover的时候显示tip -->
              <p>
                听歌量是指累计播放的歌曲数量而非播放次数，并且实际播放时间过短的歌曲将不纳入计算，每天最多计算300首。
              </p>
              <p>
                登录天数是指使用云音乐的天数，在多端同时使用不会被重复计算。
              </p>
            </div>
          </span>
        </div>
        <div class="uitl">
          <span class="tit">听歌：</span>
          <div class="bar">
            <div class="barbox"><span style="width: 59.95%"></span></div>
          </div>
          还需听歌801首
        </div>
        <div class="uitl">
          <span class="tit">登录：</span>
          <div class="bar">
            <div class="barbox"><span style="width: 100%"></span></div>
          </div>
          还需登录0天
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLevel",
};
</script>

<style lang='less'>
.level-container {
  .my-level {
    padding: 70px 68px;
    .h3 {
      position: relative;
      zoom: 1;
      height: 32px;
      line-height: 32px;
      font-size: 22px;
      margin-bottom: 4px;
      font-family: "Microsoft YaHei";
    }
    .h4 {
      height: 22px;
      line-height: 22px;
      font-size: 14px;
      color: #333;
      margin-bottom: 20px;
    }
    .level {
      margin-bottom: 52px;
      .level-big {
        position: relative;
        z-index: 1;
        height: 32px;
        line-height: 32px;
        margin-left: 30px;
        zoom: 1;
        font-family: Arial;
        font-size: 24px;
        font-weight: 700;
        color: #e03a24;
        font-style: italic;
        i {
          position: absolute;
          left: -30px;
          top: 0px;
          width: 30px;
          height: 30px;
          background: url(~@/assets/img/commonbg/mylevel.png) no-repeat;
          background-position: left 5px;
        }
      }
      .level-tips {
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 101px;
        font-size: 12px;
        color: #999999;
        font-family: Arial, Helvetica, sans-serif;
      }
      .sub {
        width: 100%;
        position: relative;
        z-index: 1;
        padding-top: 31px;
        height: 34px;
        overflow: hidden;
        .subbg {
          width: 835px;
          height: 10px;
          position: absolute;
          left: 0px;
          bottom: 0px;
          z-index: 2;
          border-radius: 10px;
          background: rgb(220, 223, 230);
          span {
            background: url("~@/assets/img/commonbg/mylevelbar.png") 0px 0px repeat-y;
            width: 100%;
            height: 10px;
            display: block;
            border-radius: 10px;
            animation: 2s ease 0s 1 normal none running subbar;
          }
        }
        .subnum {
          width: 100%;
          height: 40px;
          left: 0px;
          bottom: 0px;
          position: absolute;
          z-index: 2;
          .divison {
            position: absolute;
            left: 13px;
            bottom: 0px;
            width: 100%;
            height: 10px;
            span {
              float: left;
              display: inline;
              width: 1px;
              background: rgb(255, 255, 255);
              height: 10px;
              margin-left: 80px;
            }
          }
          .divnum {
            position: absolute;
            left: 0px;
            top: 0px;
            font-family: "Microsoft YaHei";
            font-size: 18px;
            color: rgb(196, 198, 204);
            width: 980px;
            li {
              float: left;
              width: 25px;
              height: 28px;
              line-height: 24px;
              display: inline;
              margin-right: 56px;
              text-align: center;
              &.z-ov {
                color: #ed5757;
                animation: show 3s;
              }
              &.z-on {
                color: #fff;
                background: url("~@/assets/img/commonbg/mylevel.png") no-repeat;
                background-position: 0 -50px;
                animation: show1 2s;
              }
            }
          }
        }
      }
    }
    .pow {
      border-bottom: solid 1px #ddd;
      margin-bottom: 36px;
      .telist {
        padding-bottom: 10px;
        li {
          height: 30px;
          line-height: 30px;
          color: #666;
          padding-left: 13px;
          background: url("~@/assets/img/commonbg/mylevel.png") no-repeat;
          background-position: -17px -82px;
          font-size: 14px;
        }
      }
      .aboutmore {
        color: #0e73ba;
        margin-top: 28px;
        padding-left: 4px;
        margin-bottom: 26px;
        height: 20px;
        line-height: 20px;
        a {
          color: #0e73ba;
        }
      }
    }
    .nextlv {
      .h4 {
        .next-level {
          position: relative;
          margin-left: 25px;
          zoom: 1;
          font-family: Arial;
          font-size: 18px;
          font-weight: 700;
          color: #e03a24;
          font-style: italic;
          i {
            position: absolute;
            left: -25px;
            top: 0;
            width: 25px;
            height: 22px;
            background: url("~@/assets/img/commonbg/mylevel.png") no-repeat;
            background-position: 0 -25px;
          }
        }
        .iconpoint {
          position: relative;
          margin-left: 10px;
          left: -5px;
          top: -2px;
          z-index: 2;
          a {
            width: 18px;
            height: 18px;
            display: inline-block;
            vertical-align: middle;
            background: url(~@/assets/img/commonbg/icon2.png) no-repeat;
            background-position: 0 -50px;
            &:hover {
              background-position: -20px -50px;
              & + .tip {
                display: block;
              }
            }
          }
          .tip {
            position: absolute;
            left: -33px;
            top: 30px;
            display: none;
            width: 295px;
            font-size: 12px;
            line-height: 20px;
            border: 1px solid #c6c6c6;
            border-radius: 3px;
            box-shadow: 0 0 5px 2px #e7e7e7;
            padding: 8px 6px 8px 10px;
            z-index: 2;
            color: #666;
            &::before {
              content: "";
              position: absolute;
              top: -6px;
              left: 35px;
              width: 12px;
              height: 12px;
              border-top: 1px solid #c6c6c6;
              border-right: 1px solid #c6c6c6;
              background-color: #ffffff;
              transform: rotate(-45deg);
              border-radius: 4px;
            }
          }
        }
      }
      .uitl {
        font-size: 12px;
        color: #999;
        height: 32px;
        line-height: 32px;
        .tit {
          line-height: 32px;
          color: #666;
        }
        .bar {
          display: inline-block;
          width: 160px;
          height: 12px;
          margin-right: 6px;
          position: relative;
          zoom: 1;
          .barbox {
            position: absolute;
            top: 7px;
            left: 0;
            z-index: 1;
            width: 160px;
            height: 4px;
            line-height: 0;
            background: #dcdfe6;
            border-radius: 4px;
            span {
              width: 100%;
              height: 100%;
              background: #f75757;
              border-radius: 4px;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>