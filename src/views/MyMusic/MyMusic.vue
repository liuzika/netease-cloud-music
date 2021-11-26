<template>
  <div class="music-contaner container">
    <!-- 未登录显示 -->
    <NotLogin :showWhich='music'></NotLogin>
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