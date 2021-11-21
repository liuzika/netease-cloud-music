<template>
  <div>
    <PubHeader title="@我的" :isMore='false' fSize='14px' height='35px' lineHeight='35px' fontWeight='700'></PubHeader>
    <div v-if="isAt">我的信息</div>
    <NoMsg text='暂时还没有收到@' v-else></NoMsg>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import NoMsg from "@/components/NoMsg/NoMsg";

export default {
  name: "MsgAt",
  components: {
    PubHeader,
    NoMsg,
  },
  data() {
    return {
      isAt: false,
    };
  },
};
</script>

<style>
</style>