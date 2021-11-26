<template>
  <div class="newdis-container container">
    <div class="new-wrap n-alblist f-pr">
      <PubHeader title="热门新碟" fSize="24px" height="40px"></PubHeader>
      <ul class="m-cvrlst">
        <li v-for="i in 10" :key="i">
          <NewDish></NewDish>
        </li>
      </ul>
      <PubHeader title="全部新碟" fSize="24px" height="40px">
        <div class="tab" slot="left">
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
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import NewDish from "@/components/NewDish/NewDish";
import Pagination from "@/components/Pagination/Pagination";

export default {
  name: "NewDisc",
  components: {
    PubHeader,
    NewDish,
    Pagination,
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