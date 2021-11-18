<template>
  <div class="song-container">
    <div class="cover">
      <img src="http://p1.music.126.net/48D-ZddU-LshHRGMCDiXGw==/109951164978760131.jpg?param=140y140">
      <a title="适合开随机播放的多情态歌单(手动滑稽)" href="/playlist?id=711638485" class="msk"></a>
      <div class="bottom">
        <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="711638485" data-res-action="play"></a>
        <span class="icon-headset"></span>
        <span class="nb">49万</span>
      </div>
    </div>
    <p class="dec">
      <a title="适合开随机播放的多情态歌单(手动滑稽)" href="/playlist?id=711638485" class="tit f-thide s-fc0">适合开随机播放的多情态歌单(手动滑稽)</a>
    </p>
    <p>
      <span class="s-fc4">by</span>
      <a title="Frozen_BF" href="/user/home?id=393071332" class="nm nm-icn f-thide s-fc3">Frozen_BF</a>
      <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340159/e2c1/6fb5/f49b/353e6d1857f7c5f46426beb533427e53.png">
    </p>
  </div>
</template>

<script>
export default {
  name: "SongSheet",
};
</script>

<style lang='less'>
.song-container {
  width: 100%;
  .cover {
    width: 140px;
    height: 140px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    .bottom .icon-play,
    .bottom .icon-headset {
      background: url(~@/assets/img/discover/iconall.png) no-repeat;
    }
    .msk,
    .bottom {
      background: url(~@/assets/img/discover/coverall.png) no-repeat;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-position: 0 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;
      .icon-play {
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        &:hover {
          background-position: 0 -60px;
        }
      }
      .icon-headset {
        float: left;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin: 9px 5px 9px 10px;
      }
      .nb {
        float: left;
        margin: 7px 0 0 0;
      }
    }
  }
  p {
    width: 100%;
    .nm {
      max-width: 76%;
      vertical-align: middle;
    }
    img {
      width: 13px;
      vertical-align: middle;
    }
  }
  .dec {
    margin: 8px 0 3px;
    font-size: 14px;
    .tit {
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
    }
  }
}
</style>