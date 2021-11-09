<template>
  <div class="m-srch f-pr j-suggest" id="g_search">
    <div class="srchbg">
      <span class="parent">
        <input type="text" name="srch" id="srch" class="txt j-flag" value="" style="opacity: 1;">
        <label class="ph j-flag" id="auto-id-Dh9oGHbBociEu1eB" style="">音乐/视频/电台/用户</label>
      </span>
    </div>
    <div class="j-showoff u-showoff f-hide">
      <p>现在支持搜索MV啦~</p>
    </div>
    <span class="j-flag" style="display:none;" id="auto-id-2xHS2VvTC1rifhSO">&nbsp;</span>
    <div class="u-lstlay j-flag" style="display: none;" id="auto-id-MW9GLs6o2rQmBPtT">
      <div class="m-schlist">
        <p class="note s-fc3"><a class="s-fc3 xtag" href="/search/#/?s=a&amp;type=1002">搜“a” 相关用户</a> &gt;</p>
        <div class="rap">
          <div class="itm f-cb">
            <h3 class="hd"><i class="icn u-icn u-icn-26"></i><em class="f-fl">单曲</em></h3>
            <ul class=" f-cb">
              <li><a class="s-fc0 f-thide xtag" href="/song?id=1500569811">阿拉斯加海湾-蓝心羽&nbsp;</a></li>
              <li><a class="s-fc0 f-thide xtag" href="/song?id=512376326">阿衣莫-阿吉太组合&nbsp;</a></li>
              <li><a class="s-fc0 f-thide xtag" href="/song?id=1368754688">爱人错过-告五人&nbsp;</a></li>
              <li><a class="s-fc0 f-thide xtag" href="/song?id=1828026086">爱就一个字-王赫野&nbsp;</a></li>
            </ul>
          </div>
          <div class="itm f-cb">
            <h3 class="hd"><i class="icn u-icn u-icn-27"></i><em class="f-fl">歌手</em></h3>
            <ul class="odd f-cb">
              <li><a class="s-fc0 f-thide xtag" href="/artist?id=46487"><span class="s-fc7 f-tdn">A</span>dele</a></li>
            </ul>
          </div>
          <div class="itm f-cb">
            <h3 class="hd"><i class="icn u-icn u-icn-28"></i><em class="f-fl">专辑</em></h3>
            <ul class=" f-cb">
              <li><a class="s-fc0 f-thide xtag" href="/album?id=99035308">阿拉斯加海湾-蓝心羽</a></li>
              <li><a class="s-fc0 f-thide xtag" href="/album?id=36530066">阿衣莫-阿吉太组合</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.m-srch,
.m-srch .srchbg {
  float: right;
  width: 158px;
  height: 32px;
}
.m-srch {
  .srchbg {
    background: url(~@/assets/img/commonbg/topbar.png) no-repeat 0 9999px;
    margin-top: 19px;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
    .parent {
      display: block;
      position: relative;
      margin: 8px 0 0 30px;
      input {
        width: 95%;
        margin: 0;
        padding: 0;
        background: transparent;
        color: #fff;
      }
      input {
        color: #333;
        line-height: 16px;
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
  }
  .u-lstlay {
    clear: both;
    top: 59px;
    width: 240px;
    position: absolute;
    z-index: 120;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
    .m-schlist {
      .note {
        height: 42px;
        height: 17px;
        padding: 11px 10px;
        border-bottom: 1px solid #e2e2e2;
      }
      .hd {
        float: left;
        width: 52px;
        margin-right: -100px;
        padding: 10px 0 0 10px;
        *padding-top: 9px;
        border-right: 1px solid #e2e2e2;
        line-height: 17px;
        *line-height: 19px;
        font-weight: normal;
        .icn {
          float: left;
          margin: 2px 4px 0 0;
        }
      }
      ul {
        margin-left: 62px;
        margin-top: -1px;
        padding: 6px 0 5px;
        border-top: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;
        li {
          width: 100%;
          float: left;
          a {
            display: block;
            width: 100%;
            text-indent: 12px;
            line-height: 24px;
            &.slt {
              background-color: #e3e5e7;
              cursor: pointer;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .u-showoff {
    position: absolute;
    top: 108px;
    left: 16px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    background-color: #fe5555;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    font-size: 16px;
    &:before {
      position: absolute;
      top: -50px;
      left: 88px;
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fe5555;
    }
    &:after {
      position: absolute;
      top: -43px;
      left: 91px;
      content: "";
      width: 2px;
      height: 45px;
      background: #fe5555;
    }
  }
}

.m-schlist ul.odd {
  background: #f9f8f8;
}

.u-icn,
.u-title-1 .out .icon {
  background: url(~@/assets/img/commonbg/icon.png) no-repeat 0 9999px;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-26,
.u-icn-27,
.u-icn-28,
.u-icn-29 {
  width: 14px;
  height: 15px;
  background-position: -35px -300px;
}
.u-icn-27 {
  background-position: -50px -300px;
}
.u-icn-28 {
  background-position: -35px -320px;
}
</style>