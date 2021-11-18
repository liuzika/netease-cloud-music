<template>
  <div class="newdish" :class="{min: isMin}">
    <div class="cover">
      <img src="http://p4.music.126.net/CNn4NS8_qH_OQnQXd236IQ==/109951166616303692.jpg?param=130y130" />
      <a href="/album?id=136082061" class="msk" title="一起向未来"></a>
      <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="136082061" data-res-action="play"></a>
    </div>
    <p class="dec">
      <a class="tit f-thide s-fc0" href="/album?id=136082061" title="一起向未来">一起向未来</a>
    </p>
    <p class="f-thide">
      <span class="nm f-thide" title="易烊千玺">
        <a class="s-fc3" href="/artist?id=939088">易烊千玺</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "NewDish",
  props: {
    isMin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='less'>
.newdish {
  .cover {
    position: relative;
    width: 130px;
    height: 130px;
    &:hover .icon-play {
      display: block;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      width: 153px;
      height: 130px;
      background: url(~@/assets/img/discover/coverall.png) no-repeat;
      background-position: 0 -845px;
    }
    .icon-play {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 28px;
      height: 28px;
      background: url(~@/assets/img/discover/iconall.png) no-repeat;
      background-position: 0 -140px;
      &:hover {
        background-position: 0 -170px;
      }
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
  .nm {
    display: inline-block;
    max-width: 85%;
    vertical-align: middle;
  }
  &.min {
    .cover {
      width: 100px;
      height: 100px;
      margin-bottom: 7px;
      .msk {
        width: 118px;
        height: 100px;
        background-position: 0 -570px;
      }
      .icon-play {
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        &:hover {
          background-position: 0 -110px;
        }
      }
    }
    .dec {
      width: 90%;
      margin: 0;
      a {
        font-size: 12px;
      }
    }
  }
}
</style>