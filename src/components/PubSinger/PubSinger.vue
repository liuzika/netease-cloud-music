<template>
  <div class="pub-singer" :class="className">
    <template v-if="className != 'sml'">
      <div class="u-cover u-cover-5">
        <img
          src="http://p2.music.126.net/WFccA9g2Myc4D3TTs3RYwg==/109951165181283801.jpg?param=130y130"
        />
        <a title="Reol的音乐" href="/artist?id=13059968" class="msk"></a>
      </div>
      <p>
        <a
          href=" /artist?id=13059968"
          class="nm nm-icn f-thide s-fc0"
          title="Reol的音乐"
          >Reol</a
        >
        <a class="f-tdn" href="/user/home?id=3906344103" title="Reol的个人主页"
          ><i class="u-icn u-icn-5"></i
        ></a>
      </p>
    </template>
    <template v-else>
      <a
        href=" /artist?id=33259235"
        class="nm nm-icn f-thide s-fc0"
        title="梨冻紧的音乐"
        >梨冻紧</a
      >&nbsp;<a
        class="icn u-icn u-icn-5"
        href="/user/home?id=345757844"
        title="梨冻紧的个人主页"
      ></a>
    </template>
  </div>
</template>

<script>
export default {
  name: "PubSinger",
  props: ["classNum"],
  computed: {
    className() {
      if (this.classNum > 5 && this.classNum <= 10) {
        if (this.classNum == 10) {
          return "line last-line";
        } else {
          return "line";
        }
      } else if (this.classNum > 10) {
        return "sml";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang='less'>
.pub-singer {
  width: 130px;
  height: 154px;
  padding-bottom: 30px;
  &.line {
    padding-right: 17px;
    margin-bottom: 12px;
    border-bottom: 1px dotted #999;
    &.last-line {
      padding-right: 0;
    }
  }
  &.sml {
    height: 30px;
    width: 130px;
    padding-bottom: 0;
    line-height: 23px;
    .nm {
      float: left;
      max-width: 105px;
    }
    .icn {
      float: left;
      margin: 4px 0 0 2px;
      width: 17px;
      height: 18px;
      background: url(~@/assets/img/commonbg/icon.png) no-repeat 0 9999px;
      background-position: 0 -740px;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .u-cover {
    width: 130px;
    height: 130px;
    position: relative;
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~@/assets/img/discover/coverall.png) no-repeat;
      background-position: 0 -680px;
    }
  }
  p {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    .nm {
      max-width: 80%;
    }
    .u-icn {
      margin-top: -1px;
      width: 17px;
      height: 18px;
      background: url(~@/assets/img/commonbg/icon.png) no-repeat 0 9999px;
      background-position: 0 -740px;
    }
  }
}
</style>