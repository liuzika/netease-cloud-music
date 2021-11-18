<template>
  <div class="playlist-container" id="m-disc-pl-c">
    <div class="playlist-wrap p-pl f-pr">
      <DisHeader title="全部" fSize='24px' height="40px" :isMore="false"></DisHeader>
      <div class="u-title f-cb">
        <h3><span class="f-ff2 d-flag">全部</span><a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag" id="cateToggleLink"><i>选择分类<em class="u-icn u-icn-38"></em></i></a></h3>
        <div class="u-btn f-fr u-btn-hot d-flag">
          <a href="/discover/playlist/?order=hot" class="a1" data-order="hot">热门</a>
        </div>
      </div>
      <div id="cateListBox" class="n-sltlyr d-flag" style="left:0;">
        <div class="hd"><i class="icn"></i></div>
        <div class="bd">
          <h3><a href="/discover/playlist/" class="j-flag u-btn u-btn-g s-fc1" data-cat="全部"><em>全部风格</em></a></h3>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-71"></i>语种</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" data-cat="华语">华语</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E" data-cat="欧美">欧美</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD" data-cat="日语">日语</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD" data-cat="韩语">韩语</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD" data-cat="粤语">粤语</a><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-6"></i>风格</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" data-cat="流行">流行</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" data-cat="摇滚">摇滚</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" data-cat="民谣">民谣</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" data-cat="电子">电子</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2" data-cat="舞曲">舞曲</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1" data-cat="说唱">说唱</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90" data-cat="轻音乐">轻音乐</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB" data-cat="爵士">爵士</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91" data-cat="乡村">乡村</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=R%26B%2FSoul" data-cat="R&amp;B/Soul">R&amp;B/Soul</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8" data-cat="古典">古典</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F" data-cat="民族">民族</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6" data-cat="英伦">英伦</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E" data-cat="金属">金属</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83" data-cat="蓝调">蓝调</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC" data-cat="雷鬼">雷鬼</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90" data-cat="世界音乐">世界音乐</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81" data-cat="拉丁">拉丁</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=New%20Age" data-cat="New Age">New Age</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E" data-cat="古风">古风</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=Bossa%20Nova" data-cat="Bossa Nova">Bossa Nova</a><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-7"></i>场景</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8" data-cat="清晨">清晨</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A" data-cat="夜晚">夜晚</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0" data-cat="学习">学习</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C" data-cat="工作">工作</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91" data-cat="午休">午休</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6" data-cat="下午茶">下午茶</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81" data-cat="地铁">地铁</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6" data-cat="驾车">驾车</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8" data-cat="运动">运动</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C" data-cat="旅行">旅行</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5" data-cat="散步">散步</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%85%92%E5%90%A7" data-cat="酒吧">酒吧</a><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-8"></i>情感</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%80%E6%97%A7" data-cat="怀旧">怀旧</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0" data-cat="清新">清新</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB" data-cat="浪漫">浪漫</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F" data-cat="伤感">伤感</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88" data-cat="治愈">治愈</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE" data-cat="放松">放松</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC" data-cat="孤独">孤独</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8" data-cat="感动">感动</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B" data-cat="兴奋">兴奋</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90" data-cat="快乐">快乐</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99" data-cat="安静">安静</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5" data-cat="思念">思念</a><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-9"></i>主题</dt>
            <dd class="last">
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BB%BC%E8%89%BA" data-cat="综艺">综艺</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0" data-cat="影视原声">影视原声</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=ACG" data-cat="ACG">ACG</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5" data-cat="儿童">儿童</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD" data-cat="校园">校园</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F" data-cat="游戏">游戏</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=70%E5%90%8E" data-cat="70后">70后</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=80%E5%90%8E" data-cat="80后">80后</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=90%E5%90%8E" data-cat="90后">90后</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2" data-cat="网络歌曲">网络歌曲</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=KTV" data-cat="KTV">KTV</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8" data-cat="经典">经典</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1" data-cat="翻唱">翻唱</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%89%E4%BB%96" data-cat="吉他">吉他</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4" data-cat="钢琴">钢琴</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90" data-cat="器乐">器乐</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95" data-cat="榜单">榜单</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=00%E5%90%8E" data-cat="00后">00后</a><span class="line">|</span>
            </dd>
          </dl>
        </div>
        <div class="ft"></div>
      </div>
      <ul class="cvrlst">
        <li v-for="i in 35" :key="i">
          <SongSheet></SongSheet>
        </li>
      </ul>
      <div id="m-pl-pager">
        <div class="u-page">
          <a href="javascript:void(0)" class="zbtn zprv js-disabled">上一页</a>
          <a href="javascript:void(0)" class="zpgi js-selected">1</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35" class="zpgi">2</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=70" class="zpgi">3</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=105" class="zpgi">4</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=140" class="zpgi">5</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=175" class="zpgi">6</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=210" class="zpgi">7</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=245" class="zpgi">8</a>
          <span class="zdot">...</span>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=1295" class="zpgi">38</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35" class="zbtn znxt">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisHeader from "@/components/DisHeader/DisHeader";
import SongSheet from "@/components/SongSheet/SongSheet";

export default {
  name: "PlayList",
  components: {
    DisHeader,
    SongSheet,
  },
};
</script>

<style lang='less'>
.playlist-container {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .playlist-wrap {
    padding: 40px;
    .cvrlst {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: -40px;
      li {
        width: 140px;
        height: 188px;
        margin-bottom: 30px;
        padding-left: 40px;
      }
    }
  }
}
</style>