<template>
  <div id="app">
    <!-- 头部导航 -->
    <TopBar></TopBar>
    <!-- 主体 -->
    <div style="overflow: hidden;">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <GFooter></GFooter>
    <!-- 音频控件 -->
    <PlayBar></PlayBar>
    <!-- <LoginBox></LoginBox> -->
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar";
import GFooter from "@/components/GFooter/GFooter";
import PlayBar from "@/components/PlayBar/PlayBar";
import LoginBox from "@/components/LoginBox/LoginBox";

export default {
  name: "App",
  components: {
    TopBar,
    GFooter,
    PlayBar,
    LoginBox,
  },
};
</script>


<style lang="less">
body {
  background-color: #f5f5f5;
  overflow-y: scroll;
}
</style>
