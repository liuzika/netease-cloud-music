<template>
  <div>
    <PubHeader title="通知" fSize='14px' height='35px' lineHeight='35px' fontWeight='700'></PubHeader>
    <div v-if="isNotify">通知</div>
    <NoMsg text='暂时还没收到通知' v-else></NoMsg>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import NoMsg from "@/components/NoMsg/NoMsg";

export default {
  name: "MsgNotify",
  components: {
    PubHeader,
    NoMsg,
  },
  data() {
    return {
      isNotify: false,
    };
  },
};
</script>

<style>
</style>