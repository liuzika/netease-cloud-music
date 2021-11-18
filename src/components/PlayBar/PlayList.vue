<template>
  <div class="list-container">
    <!-- 头部 收藏 清除 -->
    <div class="listhd">
      <div class="listhdc">
        <h4>播放列表(9)</h4>
        <a href="javascript:;" class="addall">
          <span class="ico ico-add"></span>
          收藏全部
        </a>
        <span class="line"></span>
        <a href="javascript:;" class="clear">
          <span class="ico icn-del"></span>
          清除
        </a>
        <p class="lytit f-ff0 f-thide">春夏秋冬</p>
        <span class="close" @click="closeList">关闭</span>
      </div>
    </div>
    <!-- 播放列表 歌词列表 -->
    <div class="listbd">
      <!-- 列表背景图片 -->
      <img
        class="imgbg"
        src="https://p2.music.126.net/XleebDbcd4EcBx9USy2GFQ==/109951166232388966.jpg"
        style="top: -405px"
      />
      <div class="msk"></div>
      <!-- 播放列表 -->
      <div class="listbdc">
        <!-- 播放列表为空显示 -->
        <div class="nocnt" v-if="isListNull">
          <i class="ico ico-face"></i> 你还没有添加任何歌曲<br />去首页<a
            href="/discover/"
            class="f-tdu"
            >发现音乐</a
          >，或在<a href="/my/" class="f-tdu">我的音乐</a>收听自己收藏的歌单。
        </div>
        <ul class="f-cb" v-else>
          <li class="z-sel">
            <div class="col col-1">
              <div class="playicn"></div>
            </div>
            <div class="col col-2">春夏秋冬</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="张国荣"
                ><a class="" href="/artist?id=6457" hidefocus="true"
                  >张国荣</a
                ></span
              >
            </div>
            <div class="col col-5">04:10</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-186453"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">梦里人</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="陈百强"
                ><a class="" href="/artist?id=2115" hidefocus="true"
                  >陈百强</a
                ></span
              >
            </div>
            <div class="col col-5">04:16</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-66042"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">沉默是金</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="张国荣"
                ><a class="" href="/artist?id=6457" hidefocus="true"
                  >张国荣</a
                ></span
              >
            </div>
            <div class="col col-5">04:06</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-188204"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">那有一天不想你</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="黎明"
                ><a class="" href="/artist?id=3701" hidefocus="true"
                  >黎明</a
                ></span
              >
            </div>
            <div class="col col-5">04:41</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-114020"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">夕阳之歌(Live)</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="梅艳芳"
                ><a class="" href="/artist?id=8918" hidefocus="true"
                  >梅艳芳</a
                ></span
              >
            </div>
            <div class="col col-5">05:00</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-276225"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">遇到了</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="Mr."
                ><a class="" href="/artist?id=12266" hidefocus="true"
                  >Mr.</a
                ></span
              >
            </div>
            <div class="col col-5">04:21</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-366024"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">披星戴月</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="张敬轩"
                ><a class="" href="/artist?id=6462" hidefocus="true"
                  >张敬轩</a
                ></span
              >
            </div>
            <div class="col col-5">04:03</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-188376"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">性情中人</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="苏永康/王灏儿"
                ><a class="" href="/artist?id=4948" hidefocus="true">苏永康</a
                >/<a class="" href="/artist?id=8229" hidefocus="true"
                  >王灏儿</a
                ></span
              >
            </div>
            <div class="col col-5">03:46</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-28828440"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
          <li>
            <div class="col col-1"></div>
            <div class="col col-2">歌·颂</div>
            <div class="col col-3">
              <div class="icns">
                <i class="ico icn-del" title="删除">删除</i
                ><i class="ico ico-dl" title="下载">下载</i
                ><i class="ico ico-share" title="分享">分享</i>
                <i class="j-t ico ico-add" title="收藏">收藏</i>
              </div>
            </div>
            <div class="col col-4">
              <span title="陈奕迅"
                ><a class="" href="/artist?id=2116" hidefocus="true"
                  >陈奕迅</a
                ></span
              >
            </div>
            <div class="col col-5">03:46</div>
            <div class="col col-6">
              <a
                href="/playlist?id=111221399&amp;_hash=songlist-64874"
                class="ico ico-src"
                title="来自歌单"
                >来源</a
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- 滚动条 -->
      <div class="bline">
        <span
          class="scrol"
          hidefocus="true"
          style="height: 260px; display: none; top: 0px"
        ></span>
      </div>
      <!-- ？号按钮 -->
      <div class="ask">
        <a class="ico ico-ask" @click="showUpload"></a>
      </div>
      <!-- 报错按钮 -->
      <div class="upload" v-if="isUpload">
        <a target="_blank" href="/#/wiki/song?songId=1445964817&amp;type=2"
          >上传歌词</a
        >
        <a href="/lyric/report?id=186453">报错</a>
      </div>
      <div class="msk2"></div>
      <!-- 歌词列表 -->
      <div class="listlyric">
        <p data-time="0">作词 : 林振强</p>
        <p data-time="1">作曲 : 叶良俊</p>
        <p data-time="2">编曲 : Adrian Chan</p>
        <p data-time="14">秋天该很好 你若尚在场</p>
        <p data-time="22">秋风即使带凉 亦漂亮</p>
        <p data-time="29">深秋中的你填密我梦想</p>
        <p class="z-sel" data-time="36">就像落叶飞 轻敲我窗</p>
        <p data-time="43">冬天该很好 你若尚在场</p>
        <p data-time="50">天空多灰 我们亦放亮</p>
        <p data-time="57">一起坐坐谈谈来日动向</p>
        <p data-time="64">漠视外间低温 这样唱</p>
        <p data-time="70">能同途偶遇在这星球上</p>
        <p data-time="76">燃亮飘渺人生</p>
        <p data-time="80">我多么够运</p>
        <p data-time="84">无人如你逗留我思潮上</p>
        <p data-time="90">从没再疑问</p>
        <p data-time="94">这个世界好得很</p>
        <p data-time="100">暑天该很好 你若尚在场</p>
        <p data-time="106">火一般的太阳在脸上</p>
        <p data-time="113">烧得肌肤如情 痕极又痒</p>
        <p data-time="120">滴着汗的一双 笑着唱</p>
        <p data-time="147">能同途偶遇在这星球上</p>
        <p data-time="153">燃亮飘渺人生</p>
        <p data-time="157">我多么够运</p>
        <p data-time="161">无人如你逗留我思潮上</p>
        <p data-time="167">从没再疑问</p>
        <p data-time="170">这个世界好得很</p>
        <p data-time="175">能同途偶遇在这星球上</p>
        <p data-time="182">是某种缘份</p>
        <p data-time="186">我多么庆幸</p>
        <p data-time="189">如离别 你亦长处心灵上</p>
        <p data-time="195">宁愿有遗憾</p>
        <p data-time="199">亦愿和你远亦近</p>
        <p data-time="205">春天该很好 你若尚 在场</p>
        <p data-time="212">春风仿佛爱情</p>
        <p data-time="215">在酝酿</p>
        <p data-time="219">初春中的你 撩动我幻想</p>
        <p data-time="226">就像嫩绿草使</p>
        <p data-time="232">春雨香</p>
      </div>
      <!-- 滚动条 -->
      <div class="bline bline-1">
        <span
          class="scrol scrol-1"
          hidefocus="true"
          style="height: 45.625px; display: block; top: 20px"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayList",
  data() {
    return {
      isUpload: false, // 显示错误按钮
      isListNull: false, // 播放列表是否为空
    };
  },
  methods: {
    showUpload() {
      if (!this.isListNull) {
        this.isUpload = !this.isUpload;
      }
    },
    closeList() {
      this.$emit("closeList");
    },
  },
};
</script>

<style lang='less'>
.list-container {
  position: absolute;
  left: 50%;
  bottom: 47px;
  _bottom: 46px;
  width: 986px;
  _width: 982px;
  height: 301px;
  margin-left: -493px;
  .listhd,
  .listbd {
    background: url(~@/assets/img/playBar/playlist_bg.png) no-repeat;
  }

  .close,
  .playicn,
  .ico {
    background: url(~@/assets/img/playBar/playlist.png) no-repeat 0 9999px;
  }
  .ico {
    height: 16px;
  }
  .listhd {
    padding: 0 5px;
    background-position: 0 0;
    height: 41px;
    .listhdc {
      position: relative;
      height: 40px;
      h4 {
        position: absolute;
        left: 25px;
        top: 0;
        height: 39px;
        line-height: 39px;
        font-size: 14px;
        color: #e2e2e2;
      }
      a {
        color: #ccc;
        .ico {
          float: left;
          margin: 1px 6px 0 0;
          *margin-top: 0;
        }
        &:hover {
          color: #e2e2e2;
        }
      }
      .clear,
      .addall {
        position: absolute;
        left: 490px;
        top: 12px;
        height: 15px;
        line-height: 15px;
        cursor: pointer;
      }
      .clear:hover .icn-del {
        background-position: -51px -20px;
      }
      .icn-del {
        width: 13px;
        background-position: -51px 0;
      }
      .addall {
        left: 398px;
        &:hover .ico-add {
          background-position: -24px -20px;
        }
        .ico-add {
          width: 16px;
          background-position: -24px 0;
        }
      }
      .line {
        position: absolute;
        top: 13px;
        left: 477px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
      }
      .lytit {
        position: absolute;
        left: 595px;
        top: 0;
        width: 346px;
        text-align: center;
        height: 39px;
        line-height: 39px;
        color: #fff;
        font-size: 14px;
      }
      .close {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        text-indent: -999px;
        cursor: pointer;
        background-position: -195px 9px;
        &:hover {
          background-position: -195px -21px;
        }
      }
    }
  }
  .listbd {
    padding: 0 5px;
    position: absolute;
    left: 0;
    top: 41px;
    width: 976px;
    _width: 972px;
    height: 260px;
    overflow: hidden;
    background-position: -1014px 0;
    _background-position: -1018px 0;
    background-repeat: repeat-y;
    .imgbg {
      position: absolute;
      left: 2px;
      _left: 0;
      top: -1px;
      z-index: 1;
      width: 980px;
      height: auto;
      opacity: 0.2;
      filter: Alpha(opacity=20);
    }
    .msk {
      position: absolute;
      left: 2px;
      _left: 0;
      top: 0;
      z-index: 2;
      width: 558px;
      height: 260px;
      background: #121212;
      opacity: 0.5;
      filter: Alpha(opacity=50);
    }
    .msk2 {
      position: absolute;
      left: 560px;
      _left: 560px;
      top: 0;
      z-index: 3;
      width: 420px;
      height: 250px;
      background: #121212;
      opacity: 0.01;
      filter: Alpha(opacity=1);
    }
    .bline {
      position: absolute;
      left: 555px;
      _left: 553px;
      top: -1px;
      z-index: 2;
      width: 6px;
      height: 260px;
      background: #000;
      opacity: 0.5;
      filter: Alpha(opacity=50);
      &.bline-1 {
        left: auto;
        right: 2px;
        _right: 0;
      }
      .scrol {
        position: absolute;
        left: 0;
        top: 0px;
        width: 4px;
        border-radius: 5px;
        height: 100px;
        cursor: pointer;
        background: #868686;
        border: 1px solid #a6a6a6;
        opacity: 0.8;
        filter: Alpha(opacity=80);
        &.scrol-1 {
          left: auto;
          right: 0;
        }
      }
    }
    .listbdc {
      position: absolute;
      left: 2px;
      _left: 0;
      top: 0;
      z-index: 4;
      height: 260px;
      width: 553px;
      overflow: hidden;
      .nocnt {
        padding-top: 85px;
        text-align: center;
        line-height: 43px;
        color: #aaa;
        a {
          color: #aaa;
        }
        .ico {
          float: none;
          display: inline-block;
          position: relative;
          top: -4px;
          width: 36px;
          height: 29px;
          margin-right: 3px;
          background-position: -138px 0;
          vertical-align: middle;
        }
      }
      ul {
        overflow: hidden;
        color: #ccc;
        li {
          float: left;
          width: 100%;
          &:hover .col,
          &:hover .col a,
          &:hover .col a:hover,
          &.z-sel .col,
          &.z-sel .col a,
          &.z-sel .col a:hover {
            color: #fff;
          }
          &.z-sel .playicn,
          &:hover .col .icns {
            display: block;
          }
          &.z-sel {
            background-color: rgba(0, 0, 0, 0.3);
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            _background-color: #1a1a1a;
          }
          &.js-dis * {
            color: #333;
            .col a:hover {
              color: #333;
            }
          }
          .col {
            float: left;
            padding-left: 10px;
            height: 28px;
            line-height: 28px;
            _line-height: 29px;
            overflow: hidden;
            cursor: pointer;
            a {
              color: #9b9b9b;
            }
            .icn-migu {
              width: 16px;
              height: 16px;
              margin: 6px 7px 0 0;
              background-position: -100px -50px;
              cursor: default;
            }
            &.col-2,
            &.col-4 {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            &.col-1 {
              width: 10px;
            }
            &.col-2 {
              width: 256px;
            }
            &.col-3 {
              width: 78px;
              position: relative;
            }
            &.col-4 {
              width: 70px;
            }
            &.col-5 {
              width: 35px;
              color: #666;
            }
            &.col-6 {
              width: 37px;
              padding-left: 6px;
            }
            .icns {
              display: none;
              position: absolute;
              right: 0;
              top: 0;
              width: 100px;
              height: 23px;
              .icn-del {
                width: 13px;
                background-position: -51px 0px;
                &:hover {
                  background-position: -51px -20px;
                }
              }
              .ico-add {
                width: 16px;
                background-position: -24px 0;
                &:hover {
                  background-position: -24px -20px;
                }
              }
              .ico-share {
                width: 14px;
                background-position: 0 0;
                &:hover {
                  background-position: 0 -20px;
                }
              }

              .ico-dl {
                width: 14px;
                background-position: -57px -50px;
                &:hover {
                  background-position: -80px -50px;
                }
              }
            }
            .ico {
              float: right;
              overflow: hidden;
              margin: 7px 0 0 10px;
              text-indent: -9999px;
            }
            .ico-src {
              width: 14px;
              margin-left: 0;
              background-position: -80px 0px;
              &:hover {
                background-position: -80px -20px;
              }
            }
          }
          .playicn {
            display: none;
            margin-top: 8px;
            width: 10px;
            height: 13px;
            background-position: -182px 0;
          }
        }
      }
    }
    .listlyric {
      position: absolute;
      right: 40px;
      top: 0;
      z-index: 4;
      margin: 21px 0 20px 0;
      height: 219px;
      width: 354px;
      overflow: hidden;
      p {
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        height: auto !important;
        height: 32px;
        min-height: 32px;
        -webkit-transition: color 0.7s linear;
        -moz-transition: color 0.7s linear;
        -o-transition: color 0.7s linear;
        transition: color 0.7s linear;
        &.z-sel {
          color: #fff;
          font-size: 14px;
          -webkit-transition: color 0.7s linear;
          -moz-transition: color 0.7s linear;
          -o-transition: color 0.7s linear;
          transition: color 0.7s linear;
        }
      }
    }
    .ask {
      position: absolute;
      right: 25px;
      top: 12px;
      z-index: 5;
      .ico-ask {
        display: inline-block;
        width: 21px;
        height: 21px;
        background-position: 0 -50px;
        text-indent: 0;
        _background: none;
        //   _filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../../style/web2/img/frame/playlist_ask.png', sizingMethod='scale');
        &:hover {
          background-position: -24px -50px;
          _background: none;
          //   _filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../../style/web2/img/frame/playlist_ask_hover.png', sizingMethod='scale');
        }
      }
    }
    // 报错按钮
    .upload {
      position: absolute;
      right: 12px;
      top: 40px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.75);
      width: 81px;
      z-index: 5;
      a {
        display: block;
        text-align: center;
        padding: 8px 0;
        color: #666;
        background: #ebebeb;
        text-shadow: 0 1px 0 #fff;
        &:hover {
          text-decoration: none;
          background: #dedede;
        }
      }
    }
  }
}
</style>