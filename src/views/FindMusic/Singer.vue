<template>
  <div class="artist-container container">
    <div class="list-left">
      <div class="sgernav">
        <h2 class="tit">推荐</h2>
        <ul class="nav f-cb">
          <li>
            <a href="/discover/artist/" class="cat-flag z-slt">推荐歌手</a>
          </li>
          <li>
            <a href="/discover/artist/signed/" class="cat-flag" data-cat="5001">入驻歌手</a>
          </li>
        </ul>
        <div class="blk">
          <h2 class="tit">华语</h2>
          <ul class="nav f-cb">
            <li>
              <a href="/discover/artist/cat?id=1001" class="cat-flag" data-cat="1001">华语男歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=1002" class="cat-flag" data-cat="1002">华语女歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=1003" class="cat-flag" data-cat="1003">华语组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">欧美</h2>
          <ul class="nav f-cb">
            <li>
              <a href="/discover/artist/cat?id=2001" class="cat-flag" data-cat="2001">欧美男歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=2002" class="cat-flag" data-cat="2002">欧美女歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=2003" class="cat-flag" data-cat="2003">欧美组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">日本</h2>
          <ul class="nav f-cb">
            <li>
              <a href="/discover/artist/cat?id=6001" class="cat-flag" data-cat="6001">日本男歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=6002" class="cat-flag" data-cat="6002">日本女歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=6003" class="cat-flag" data-cat="6003">日本组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">韩国</h2>
          <ul class="nav f-cb">
            <li>
              <a href="/discover/artist/cat?id=7001" class="cat-flag" data-cat="7001">韩国男歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=7002" class="cat-flag" data-cat="7002">韩国女歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=7003" class="cat-flag" data-cat="7003">韩国组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">其他</h2>
          <ul class="nav f-cb">
            <li>
              <a href="/discover/artist/cat?id=4001" class="cat-flag" data-cat="4001">其他男歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=4002" class="cat-flag" data-cat="4002">其他女歌手</a>
            </li>
            <li>
              <a href="/discover/artist/cat?id=4003" class="cat-flag" data-cat="4003">其他组合/乐队</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-right">
      <div class="wrap">
        <PubHeader title="入驻歌手" fSize="24px" height="40px">
          <a slot="right" href="/discover/artist/signed/" data-cat="5001" class="singer-more s-fc3">更多 &gt;</a>
        </PubHeader>
        <div class="m-sgerlist">
          <ul class="m-cvrlst">
            <li v-for="i in 10" :key="i">
              <PubSinger></PubSinger>
            </li>
          </ul>
        </div>
        <PubHeader title="热门歌手" fSize="24px" height="40px"></PubHeader>
        <div class="m-sgerlist">
          <ul class="m-cvrlst">
            <li v-for="i in 100" :key="i">
              <PubSinger :classNum="i"></PubSinger>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import PubSinger from "@/components/PubSinger/PubSinger";

export default {
  name: "Singer",
  components: {
    PubHeader,
    PubSinger,
  },
};
</script> 

<style lang='less'>
.artist-container {
  display: flex;
  .list-left {
    position: relative;
    width: 179px;
    background-color: #f9f9f9;
    border-right: 1px solid #d3d3d3;
    .sgernav {
      padding: 0 10px 40px;
      margin-top: 51px;
      .tit {
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        font-family: "Microsoft Yahei";
      }
      ul li {
        margin-bottom: 2px;
        float: left;
        width: 160px;
        height: 29px;
        line-height: 29px;
        a {
          width: 133px;
          padding-left: 27px;
          background: url(~@/assets/img/commonbg/singer.png) no-repeat 0 9999px;
          background-position: 0 -30px;
          color: #333;
          float: left;
          height: 29px;
          line-height: 29px;
          &.z-slt {
            background-position: 0 0;
            text-decoration: none;
            color: #c20c0c;
          }
        }
      }
      .blk {
        margin: 5px 0 0;
        padding-top: 16px;
        border-top: 1px solid #d3d3d3;
      }
    }
  }
  .list-right {
    flex: 1;
    .wrap {
      padding: 40px;
      .singer-more {
        float: right;
        margin-top: 14px;
      }
      .m-sgerlist {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>