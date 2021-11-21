<template>
  <div class="no-msg">
    <h3>
      <i></i>
      {{text}}
    </h3>
  </div>
</template>

<script>
export default {
  name: "NoMsg",
  props: ["text"],
};
</script>

<style lang='less'>
.no-msg {
  padding: 105px 0;
  text-align: center;
  h3 {
    padding-bottom: 38px;
    font-size: 18px;
    i {
      display: inline-block;
      margin-right: 15px;
      width: 64px;
      height: 50px;
      background: url(~@/assets/img/commonbg/icon.png) no-repeat;
      background-position: 0 -347px;
      vertical-align: middle;
    }
  }
}
</style>