<template>
  <div>
    <!-- 未登录显示 -->
    <NotLogin :mORp='false'></NotLogin>
  </div>
</template>

<script>
import NotLogin from "@/components/NotLogin/NotLogin";

export default {
  name: "MyFriend",
  components: {
    NotLogin,
  },
};
</script>

<style>
</style>