<template>
  <div class="newdis-container container">
    <div class="new-wrap n-alblist f-pr">
      <PubHeader title="热门新碟" :isMore="false" fSize="24px" height="40px"></PubHeader>
      <ul class="m-cvrlst">
        <li v-for="i in 10" :key="i">
          <NewDish></NewDish>
        </li>
      </ul>
      <PubHeader title="全部新碟" :isMore="false" fSize="24px" height="40px">
        <div class="tab" slot="tab">
          <a href="/discover/album/#/?area=ALL" class="s-fc6">全部</a><span class="line">|</span>
          <a href="/discover/album/#/?area=ZH" class="s-fc3">华语</a><span class="line">|</span>
          <a href="/discover/album/#/?area=EA" class="s-fc3">欧美</a><span class="line">|</span>
          <a href="/discover/album/#/?area=KR" class="s-fc3">韩国</a><span class="line">|</span>
          <a href="/discover/album/#/?area=JP" class="s-fc3">日本</a>
        </div>
      </PubHeader>
      <ul class="m-cvrlst">
        <li v-for="i in 35" :key="i">
          <NewDish></NewDish>
        </li>
      </ul>
      <!-- 分页器 -->
      <div id="m-pl-pager">
        <div class="auto-1637202035327 u-page">
          <a href="#" class="zbtn zprv js-p-1637202035325 js-disabled" id="auto-id-8lDFHJHITnE3zmdM">上一页</a><a href="#" class="zpgi zpg1 js-i-1637202035325 js-selected" id="auto-id-z8DEo82d1fIRofSi">1</a><a href="#" class="zpgi zpg2 js-i-1637202035325" id="auto-id-BC8qiEzbk8F3trgB">2</a><a href="#" class="zpgi zpg3 js-i-1637202035325" id="auto-id-izEySMqpbD091Mfb">3</a><a href="#" class="zpgi zpg4 js-i-1637202035325" id="auto-id-asKfZWai3Jhby9Wu">4</a><a href="#" class="zpgi zpg5 js-i-1637202035325" id="auto-id-8KWkd5F56SRTHm49">5</a><a href="#" class="zpgi zpg6 js-i-1637202035325" id="auto-id-EvkhCeSnu8ZcNhbD">6</a><a href="#" class="zpgi zpg7 js-i-1637202035325" id="auto-id-MW2TEXmbh885Pz9g">7</a><a href="#" class="zpgi zpg8 js-i-1637202035325" id="auto-id-inv4lvZ0Mu10Z7zf">8</a><span class="zdot">...</span><a href="#" class="zpgi zpg9 js-i-1637202035325" id="auto-id-BIPX55sK5FaIiV8f">15</a><a href="#" class="zbtn znxt js-n-1637202035325" id="auto-id-cux17ixSl2uLbnbb">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import NewDish from "@/components/NewDish/NewDish";

export default {
  name: "NewDisc",
  components: {
    PubHeader,
    NewDish,
  },
};
</script>

<style lang='less'>
.newdis-container {
  .new-wrap {
    padding: 40px;
    .m-cvrlst {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      li {
        width: 153px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>