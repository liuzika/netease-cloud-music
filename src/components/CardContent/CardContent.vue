<template>
  <div class="cnt-container">
    <div>
      <a href="/djradio?id=965843227" class="cvr f-fl">
        <img src="http://p1.music.126.net/JPk2s9W9m7R0-9z3H_IkFg==/109951166338983011.jpg?param=200y200" alt="" />
      </a>

      <div class="cnt">
        <h3 class="f-fs3" :class="{s: !isDy}"><a href="/djradio?id=347317067" title="动漫唯美风">动漫唯美风</a></h3>

        <template v-if="isDy">
          <p class="note">
            <i class="u-icn u-icn-27"></i>
            <a href="/user/home?id=54683451" class="sep f-brk" title="动漫唯美风">动漫唯美风</a>
            <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340168/ccce/35dd/ab2d/1a7c8ee0f6bb1fc2760cbb570dfee34f.png">
          </p>
          <p class="s-fc4">共352期&nbsp;&nbsp;&nbsp;&nbsp;订阅384475次</p>
        </template>
        <p class="note s-fc4" v-else>御姐音治愈你的失眠</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CardContent",
  props: ["isDy"],
};
</script>

<style lang='less'>
.cnt-container {
  .cvr {
    width: 120px;
    height: 120px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .cnt {
    float: left;
    margin-left: 20px;
    max-width: 295px;
    h3 {
      &.s {
        height: auto;
        line-height: normal;
        margin: 16px 0 20px;
      }
      line-height: 64px;
      height: 64px;
      a {
        display: inline-block;
        line-height: normal;
        vertical-align: middle;
      }
    }
    .note {
      margin-bottom: 6px;
      line-height: 20px;
      .sep {
        margin: 0 5px;
      }
      img {
        height: 13px;
        width: 13px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>