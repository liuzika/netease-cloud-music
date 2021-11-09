<template>
  <div id="app">
    <!-- 头部导航 -->
    <TopBar></TopBar>
    <!-- 主体 -->
    <!-- <MyMusic></MyMusic> -->
    <router-view></router-view>
    <!-- 底部 -->
    <GFooter></GFooter>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar";
import GFooter from "@/components/GFooter/GFooter";
import MyMusic from "@/views/MyMusic/MyMusic";

export default {
  name: "App",
  components: {
    TopBar,
    GFooter,
    MyMusic,
  },
};
</script>


<style lang="less">
</style>
