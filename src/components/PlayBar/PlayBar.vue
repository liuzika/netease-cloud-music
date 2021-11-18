<template>
  <div class="g-btmbar">
    <div
      class="m-playbar"
      :class="isLock ? 'm-playbar-lock' : 'm-playbar-unlock'"
      ref="playbar"
      @mouseleave="playBarHide"
      @mouseenter="playBarShow"
    >
      <div class="updn">
        <div class="left f-fl">
          <a
            href="#"
            class="btn"
            hidefocus="true"
            @click.prevent="changeLock"
          ></a>
        </div>
        <div class="right f-fl"></div>
      </div>
      <div class="bg"></div>
      <div class="hand" title="展开播放条" @mouseenter="playBarShow"></div>
      <div class="wrap" id="g_player" style="margin-left: -498.5px">
        <div class="btns">
          <a
            href="javascript:;"
            hidefocus="true"
            class="prv"
            title="上一首(ctrl+←)"
            >上一首</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="ply j-flag pas"
            title="播放/暂停(p)"
            >播放/暂停</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="nxt"
            title="下一首(ctrl+→)"
            >下一首</a
          >
        </div>
        <div class="head j-flag">
          <img
            src="http://p4.music.126.net/bqq6DITA5nj_yd_i6dsiTA==/109951166225429773.jpg?param=34y34"
          />
          <a href="/song?id=186453" hidefocus="true" class="mask"></a>
        </div>
        <div class="play">
          <div class="j-flag words">
            <a
              hidefocus="true"
              href="/song?id=186453"
              class="f-thide name fc1 f-fl"
              title="春夏秋冬"
              >春夏秋冬</a
            >
            <a
              hidefocus="true"
              href="/mv?id=5570704"
              class="mv f-fl"
              title="MV"
            ></a
            ><span class="by f-thide f-fl"
              ><span title="张国荣"
                ><a class="" href="/artist?id=6457" hidefocus="true"
                  >张国荣</a
                ></span
              ></span
            >
            <a
              href="/playlist?id=111221399&amp;_hash=songlist-186453"
              class="src"
              title="来自歌单"
            ></a>
          </div>
          <div class="m-pbar">
            <div class="barbg j-flag" id="auto-id-aRMIWFDbMswlw9pS">
              <div class="rdy" style="width: 20.629%"></div>
              <div class="cur" style="width: 14.7471%">
                <span class="btn f-tdn f-alpha" id="auto-id-lvlbtGwGWD44isOH"
                  ><i></i
                ></span>
              </div>
            </div>
            <span class="j-flag time"><em>00:36</em> / 04:10</span>
          </div>
        </div>
        <div class="oper f-fl">
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-pip"
            title="画中画歌词"
            >画中画歌词</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-add j-flag"
            title="收藏"
            >收藏</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-share"
            title="分享"
            >分享</a
          >
        </div>
        <div class="ctrl f-fl f-pr j-flag">
          <div
            class="m-vol"
            style="visibility: hidden"
            id="auto-id-RFlycqrxZqZLMwUF"
          >
            <div class="barbg"></div>
            <div class="vbg j-t" id="auto-id-n3De7bpgnTveerdl">
              <div class="curr j-t" style="height: 74.4px"></div>
              <span class="btn f-alpha j-t" style="top: 16.2px"></span>
            </div>
          </div>
          <a href="javascript:;" hidefocus="true" class="icn icn-vol"></a>
          <a
            href="javascript:;"
            hidefocus="true"
            class="icn icn-loop"
            title="循环"
          ></a>
          <span class="add f-pr">
            <span class="tip" v-if="isStartPlay">已开始播放</span>
            <a
              href="javascript:;"
              title="播放列表"
              hidefocus="true"
              class="icn icn-list s-fc3"
              @click="isPlayList = !isPlayList"
              >9</a
            >
          </span>
          <div class="tip tip-1" style="display: none">循环</div>
        </div>
      </div>
      <!-- 播放列表 -->
      <PlayList v-if="isPlayList" @closeList="closeList"></PlayList>
    </div>
  </div>
</template>

<script>
import PlayList from "./PlayList";

export default {
  name: "PlayBar",
  components: {
    PlayList,
  },
  data() {
    return {
      isPlayList: false, // 是否显示播放列表
      isLock: false, // 是否锁定控件
      isStartPlay: false,
    };
  },
  methods: {
    // 鼠标移入显示控件
    playBarShow() {
      // 判断播放列表没有显示，控件未锁定
      if (!this.isPlayList && !this.isLock) {
        clearTimeout(this.timer);
        this.$refs.playbar.style.top = "-53px";
      }
    },
    // 鼠标移出隐藏控件
    playBarHide() {
      // 判断播放列表没有显示，控件未锁定
      if (!this.isPlayList && !this.isLock) {
        this.timer = setTimeout(() => {
          this.$refs.playbar.style.top = "-7px";
        }, 1000);
      }
    },
    // 播放列表关闭，隐藏控件
    closeList() {
      this.isPlayList = false;
      if (!this.isLock) {
        this.playBarHide();
      }
    },
    // 锁定控件
    changeLock() {
      this.isLock = !this.isLock;
    },
  },
};
</script>

<style>
.m-playbar .updn .left,
.m-playbar .updn .right,
.m-playbar .updn .btn,
.m-playbar .bg,
.m-playbar .btns a,
.m-playbar .head .mask,
.m-playbar .icn,
.m-playbar .ctrl,
.m-playbar .tip,
.m-vol .curr,
.m-playbar .words .mv,
.m-vol .barbg,
.m-playbar .words .src {
  background: url(~@/assets/img/playBar/playbar.png) no-repeat 0 9999px;
}

.m-pbar .barbg,
.m-pbar .cur,
.m-pbar .rdy,
.m-pbar .left {
  background: url(~@/assets/img/playBar/statbar.png) no-repeat 0 9999px;
}

.m-pbar .btn,
.m-vol .btn {
  background: url(~@/assets/img/playBar/iconall.png) no-repeat;
}
#g_player .play {
  width: 581px;
}

#g_player .play .m-pbar,
#g_player .play .m-pbar .barbg {
  width: 466px;
}

#g_player .oper {
  width: 87px;
}

.m-playbar .icn-pip {
  position: relative;
  background: url(~@/assets/img/playBar/DLVi.png) no-repeat 0 0;
}

.m-playbar .icn-pip:hover,
.m-playbar .icn-pip.active {
  background-position-y: -25px;
}

.m-playbar .icn-pip video {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.g-btmbar {
  position: fixed;
  _position: absolute;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
}

.m-playbar {
  position: absolute;
  zoom: 1;
  top: -7px;
  left: 0;
  width: 100%;
  height: 53px;
  margin: 0 auto;
  transition: top 0.5s;
}

.m-playbar .hand {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 20px;
  cursor: pointer;
}

.m-playbar .bg {
  height: 53px;
  zoom: 1;
  margin-right: 67px;
  background-position: 0 0;
  background-repeat: repeat-x;
}

.m-playbar .updn {
  position: relative;
  z-index: 11;
}

.m-playbar .updn .left {
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px;
}

.m-playbar .updn .right {
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px;
  pointer-events: none;
}

.m-playbar .updn .btn {
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
}

.m-playbar-unlock .updn .btn {
  background-position: -80px -380px;
}

.m-playbar-unlock .updn .btn:hover {
  background-position: -80px -400px;
}

.m-playbar-lock .updn .btn {
  background-position: -100px -380px;
}

.m-playbar-lock .updn .btn:hover {
  background-position: -100px -400px;
}

.m-playbar-hide .updn .btn {
  background-position: -120px -380px;
}

.m-playbar-hide .hand {
  display: block;
}

.m-playbar .wrap {
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
  margin-left: -490px;
}

.m-playbar .btns,
.m-playbar .head,
.m-playbar .play,
.m-playbar .volum,
.m-playbar .oper {
  float: left;
}

.m-playbar .btns {
  width: 137px;
  padding: 6px 0 0 0;
}

.m-playbar .btns a {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 5px;
  text-indent: -9999px;
}

.m-playbar .btns .prv {
  background-position: 0 -130px;
}

.m-playbar .btns .prv:hover {
  background-position: -30px -130px;
}

.m-playbar .btns .ply {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-position: 0 -204px;
}

.m-playbar .btns .ply:hover {
  background-position: -40px -204px;
}

.m-playbar .btns .pas {
  background-position: 0 -165px;
}

.m-playbar .btns .pas:hover {
  background-position: -40px -165px;
}

.m-playbar .btns .nxt {
  background-position: -80px -130px;
}

.m-playbar .btns .nxt:hover {
  background-position: -110px -130px;
}

.m-playbar .head,
.m-playbar .head img {
  width: 34px;
  height: 34px;
}

.m-playbar .head {
  position: relative;
  *zoom: 1;
  margin: 6px 15px 0 0;
}

.m-playbar .head .mask {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 34px;
  height: 35px;
  background-position: 0 -80px;
}

.m-playbar .play {
  position: relative;
  *zoom: 1;
  width: 608px;
}

.m-playbar .words {
  height: 28px;
  overflow: hidden;
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;
}

.m-playbar .words .fc1 {
  color: #e8e8e8;
}

.m-playbar .words .mv {
  width: 19px;
  height: 17px;
  margin: 6px 0 0 3px;
  background-position: 0 -57px;
}

.m-playbar .words .mv:hover {
  background-position: -20px -57px;
}

.m-playbar .words .name {
  max-width: 300px;
}

.m-playbar .words .by {
  max-width: 220px;
  margin-left: 15px;
  color: #9b9b9b;
}

.m-playbar .words .by a {
  color: #9b9b9b;
}

.m-playbar .words .src {
  float: left;
  width: 14px;
  height: 15px;
  margin: 7px 0 0 13px;
  background-position: -110px -103px;
}

.m-playbar .words .src:hover {
  background-position: -130px -103px;
}

.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
}

.m-playbar .icn-zan,
.m-playbar .icn-yizan {
  margin-top: 12px;
  width: 26px;
  background-position: -60px -502px;
}

.m-playbar .icn-zan:hover {
  background-position: -90px -502px;
}

.m-playbar .icn-yizan {
  background-position: -60px -532px;
}

.m-playbar .icn-yizan:hover {
  background-position: -90px -532px;
}

.m-playbar .icn-add {
  background-position: -88px -163px;
}

.m-playbar .icn-add:hover {
  background-position: -88px -189px;
}

.m-playbar .icn-add-dis {
  background-position: -88px -213px;
}

.m-playbar .icn-share {
  background-position: -114px -163px;
}

.m-playbar .icn-share:hover {
  background-position: -114px -189px;
}

.m-playbar .icn-share-dis {
  background-position: -114px -213px;
}

.m-playbar .icn-vol {
  background-position: -2px -248px;
}

.m-playbar .icn-vol:hover {
  background-position: -31px -248px;
}

.m-playbar .icn-volno {
  background-position: -104px -69px;
}

.m-playbar .icn-volno:hover {
  background-position: -126px -69px;
}

.m-playbar .icn-shuffle {
  background-position: -66px -248px;
}

.m-playbar .icn-shuffle:hover {
  background-position: -93px -248px;
}

.m-playbar .icn-loop {
  background-position: -3px -344px;
}

.m-playbar .icn-loop:hover {
  background-position: -33px -344px;
}

.m-playbar .icn-one {
  background-position: -66px -344px;
}

.m-playbar .icn-one:hover {
  background-position: -93px -344px;
}

.m-playbar .icn-list {
  display: block;
  float: none;
  width: 38px;
  padding-left: 21px;
  background-position: -42px -68px;
  line-height: 27px;
  text-align: center;
  color: #666;
  text-shadow: 0 1px 0 #080707;
  text-indent: 0;
  text-decoration: none;
}

.m-playbar .icn-list:hover {
  background-position: -42px -98px;
  text-decoration: none;
}

.m-playbar .oper {
  width: 60px;
}

.m-playbar .ctrl {
  position: relative;
  z-index: 10;
  width: 113px;
  padding-left: 13px;
  background-position: -147px -238px;
}

.m-playbar .add {
  float: left;
  width: 59px;
  height: 36px;
}

.m-playbar .tip {
  position: absolute;
  top: -51px;
  left: -65px;
  clear: both;
  width: 152px;
  height: 49px;
  background-position: 0 -287px;
  text-align: center;
  color: #fff;
  line-height: 37px;
}

.m-playbar .tip-1 {
  top: -35px;
  left: 12px;
  width: 81px;
  height: 39px;
  line-height: 34px;
  background-position: 0 -457px;
}

.m-pbar {
  position: relative;
  *zoom: 1;
}

.m-pbar,
.m-pbar .barbg {
  width: 493px;
}

.m-pbar-vol,
.m-pbar-vol .barbg {
  width: 78px;
}

.m-pbar .barbg,
.m-pbar .cur,
.m-pbar .rdy {
  height: 9px;
  background-position: right 0;
}

.m-pbar .rdy {
  background-position: right -30px;
}

.m-pbar .cur {
  position: absolute;
  top: 0;
  left: 0;
  width: 1%;
  background-position: left -66px;
}

.m-pbar .left {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 11px;
  background-position: 0 -46px;
}

.m-pbar .btn {
  position: absolute;
  top: -7px;
  right: -13px;
  width: 22px;
  height: 24px;
  margin-left: -11px;
  background-position: 0 -250px;
  _background-position: 0 0;
}

.m-pbar .btn:hover {
  background-position: 0 -280px;
  _background-position: 0 0;
}

.m-pbar .btn i {
  visibility: hidden;
  position: absolute;
  left: 5px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: url(~@/assets/img/playBar/loading.gif);
}

.m-pbar .z-load:hover {
  background-position: 0 -250px;
  _background-position: 0 0;
  cursor: default;
}

.m-pbar .z-load i {
  visibility: visible;
  cursor: default;
}

.m-pbar .time {
  position: absolute;
  top: -3px;
  right: -84px;
  color: #797979;
  text-shadow: 0 1px 0 #121212;
}

.m-pbar .time em {
  color: #a1a1a1;
}

.m-vol {
  position: absolute;
  top: -113px;
  left: 9px;
  clear: both;
  width: 32px;
  height: 113px;
}

.m-vol .barbg {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 113px;
  background-position: 0 -503px;
}

.m-vol .vbg,
.m-vol .curr {
  position: absolute;
  top: 11px;
  left: 14px;
  width: 4px;
  height: 93px;
}

.m-vol .vbg {
  padding: 4px 0;
  top: 7px;
}

.m-vol .curr {
  top: auto;
  bottom: 4px;
  left: 0;
  background-position: -40px bottom;
  overflow: hidden;
}

.m-vol .btn {
  position: absolute;
  top: 0;
  left: -7px;
  display: block;
  width: 18px;
  height: 20px;
  background-position: -40px -250px;
  _background-position: 0 0;
  cursor: pointer;
}

.m-vol .btn:hover {
  background-position: -40px -280px;
  _background-position: 0 0;
}

.m-vol .btm {
  display: block;
  width: 4px;
  height: 3px;
  background-position: -40px -440px;
}
</style>