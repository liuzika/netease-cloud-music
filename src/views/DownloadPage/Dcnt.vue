<template>
  <div class="dcnt-container" :class="{ 'dcnt_n-dncnt2': dcnt.isDcnt2 }">
    <div class="f-cb d_wrap" :class="'dcnt_cnt' + dcnt.id">
      <div :class="dcnt.isFloatLeft ? 'dcnt_left' : 'dcnt_right'">
        <h3 class="f-ff2 dcnt_title">{{ dcnt.title }}</h3>
        <p class="f-ff2 dcnt_des" v-html="dcnt.describe"></p>
      </div>
      <div :class="!dcnt.isFloatLeft ? 'dcnt_left' : 'dcnt_right'">
        <img :src="require(`/src/assets/img/downloadPage/${dcnt.imgUrl}`)" :alt="dcnt.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dcnt",
  props: ["dcnt"],
};
</script>

<style lang='less'>
.dcnt-container {
  background: #fff;
  height: 437px;
  border-bottom: 1px solid #e3e3e3;
  &.dcnt_n-dncnt2 {
    background: #f8f8f8;
  }
  .d_wrap {
    width: 982px;
    margin: 0 auto;
    .dcnt_left {
      float: left;
      margin-left: 30px;
    }
    .dcnt_right {
      float: right;
    }
    .dcnt_title {
      font-size: 40px;
      font-weight: normal;
      padding: 45px 0 5px 0;
    }
    .dcnt_des {
      font-size: 16px;
      color: #666;
      line-height: 24px;
      em {
        color: #cc0000;
      }
    }
    &.dcnt_cnt1 {
      padding-top: 120px;
      .dcnt_right {
        margin-right: 57px;
        _margin-right: 20px;
      }
    }
    &.dcnt_cnt2 {
      padding-top: 106px;
    }

    &.dcnt_cnt3 {
      padding-top: 72px;
    }

    &.dcnt_cnt4 {
      padding-top: 95px;
    }

    &.dcnt_cnt5 {
      padding-top: 53px;
      .dcnt_title {
        margin-top: 96px;
      }
    }
  }
}
</style>