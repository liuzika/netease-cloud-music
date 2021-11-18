<template>
  <div class="music">
    <!-- 未登录显示 -->
    <NotLogin :mORp='true'></NotLogin>
  </div>
</template>

<script>
import NotLogin from "@/components/NotLogin/NotLogin";

export default {
  name: "MyMusic",
  components: {
    NotLogin,
  },
};
</script>

<style>
</style>