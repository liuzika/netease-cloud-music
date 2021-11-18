<template>
  <router-view></router-view>
</template>

<script>
import { IS_SHOW_SUB_NAV } from "@/store/mutation-types.js";

export default {
  name: "Home",
  mounted() {
    this.$store.commit(IS_SHOW_SUB_NAV, true);
  },
  destroyed() {
    this.$store.commit(IS_SHOW_SUB_NAV, false);
  },
};
</script>

<style>
</style>