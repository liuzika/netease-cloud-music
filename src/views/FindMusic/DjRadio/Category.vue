<template>
  <div class="category-container">
    <div class="new">
      <PubHeader title="优秀新电台" :isMore='false' fSize='24px' height='40px' lineHeight='normal'></PubHeader>
      <ul class="m-rdilist">
        <li>
          <a href="/djradio?id=968247268" class="cover-rdi">
            <img src="http://p2.music.126.net/niY6PGMzmGPFxigkDZO44Q==/109951166532200394.jpg?param=200y200" alt="">
          </a>
          <h3 class="f-fs2"><a href="/djradio?id=968247268" class="s-fc1" title="失眠城市——陪你一起等天明">失眠城市——陪你一起等天明</a></h3>
          <p class="f-thide2 s-fc4">用温暖的声音治愈你</p>
        </li>
        <li>
          <a href="/djradio?id=975069" class="cover-rdi">
            <img src="http://p2.music.126.net/Lzz18amSXZzFaJRh7P0J9g==/19211766672361937.jpg?param=200y200" alt="">
          </a>
          <h3 class="f-fs2"><a href="/djradio?id=975069" class="s-fc1" title="平凡的时间里">平凡的时间里</a></h3>
          <p class="f-thide2 s-fc4">记录细碎过往和微小爱意</p>
        </li>
        <li>
          <a href="/djradio?id=959832904" class="cover-rdi">
            <img src="http://p2.music.126.net/KmrifkCXhBwgP3aNxameYw==/109951165809996678.jpg?param=200y200" alt="">
          </a>
          <h3 class="f-fs2"><a href="/djradio?id=959832904" class="s-fc1" title="人间太匆匆">人间太匆匆</a></h3>
          <p class="f-thide2 s-fc4">所有的感情都来自于偏爱</p>
        </li>
        <li>
          <a href="/djradio?id=960817725" class="cover-rdi">
            <img src="http://p2.music.126.net/L3Z3UTWrhFcDH4JTDVvdlA==/109951165894846669.jpg?param=200y200" alt="">
          </a>
          <h3 class="f-fs2"><a href="/djradio?id=960817725" class="s-fc1" title="温御之音|江奈儿陪你">温御之音|江奈儿陪你</a></h3>
          <p class="f-thide2 s-fc4">温暖你在每个难以入睡的夜晚</p>
        </li>
        <li>
          <a href="/djradio?id=960618020" class="cover-rdi">
            <img src="http://p2.music.126.net/XC9b64eR_QpfWchpUXfhrQ==/109951166564765517.jpg?param=200y200" alt="">
          </a>
          <h3 class="f-fs2"><a href="/djradio?id=960618020" class="s-fc1" title="心灵治愈殿堂">心灵治愈殿堂</a></h3>
          <p class="f-thide2 s-fc4">每一次的遇见都是上天的恩赐</p>
        </li>
      </ul>
    </div>
    <div id="allradios" class="rdimore">
      <PubHeader title="电台排行榜" :isMore='false' fSize='24px' height='40px' lineHeight='normal'>
        <div class="tab tab-r" slot="right">
          <a data-action="order" href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios" class="z-sel">上升最快</a>
          <span class="line">|</span>
          <a data-action="order" href="/discover/djradio/category?id=3&amp;order=0&amp;_hash=allradios">最热电台</a>
        </div>
      </PubHeader>
      <ul class="rdilist rdilist-2">
        <li v-for="i in 20" :key='i'>
          <CardContent :isDy='true'></CardContent>
        </li>
      </ul>
      <div class="u-page">
        <a href="javascript:void(0)" class="zbtn zprv js-disabled">上一页</a>
        <a href="javascript:void(0)" class="zpgi js-selected">1</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=30" class="zpgi">2</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=60" class="zpgi">3</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=90" class="zpgi">4</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=120" class="zpgi">5</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=150" class="zpgi">6</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=180" class="zpgi">7</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=210" class="zpgi">8</a>
        <span class="zdot">...</span>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=990" class="zpgi">34</a>
        <a href="/discover/djradio/category?id=3&amp;order=1&amp;_hash=allradios&amp;limit=30&amp;offset=30" class="zbtn znxt">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import CardContent from "@/components/CardContent/CardContent";

export default {
  name: "Category",
  components: {
    PubHeader,
    CardContent,
  },
};
</script>

<style lang='less'>
.category-container {
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .new {
    margin-top: 10px;
    .m-rdilist {
      display: flex;
      margin-top: 16px;
      justify-content: space-between;
      li {
        width: 150px;
        .cover-rdi {
          display: block;
          width: 150px;
          height: 150px;
        }
        h3 {
          margin: 13px 0 6px;
          line-height: 16px;
          font-size: 14px;
          font-weight: normal;
        }
        p {
          line-height: 18px;
        }
      }
    }
  }
  .rdimore {
    margin-top: 35px;
    .tab {
      float: right;
      margin-top: 15px;
      .z-sel {
        color: #c20c0c;
      }
    }
    .rdilist {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 435px;
        height: 120px;
        padding: 20px 0;
        border-bottom: 1px solid #e7e7e7;
      }
    }
  }
}
</style>