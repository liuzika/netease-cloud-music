<template>
  <div>
    <PubHeader title="评论" :isMore='false' fSize='14px' height='35px' lineHeight='35px' fontWeight='700'></PubHeader>
    <div v-if="isComment">评论</div>
    <NoMsg text='暂时还没收到评论' v-else></NoMsg>
  </div>
</template>

<script>
import PubHeader from "@/components/PubHeader/PubHeader";
import NoMsg from "@/components/NoMsg/NoMsg";

export default {
  name: "MsgComment",
  components: {
    PubHeader,
    NoMsg,
  },
  data() {
    return {
      isComment: false,
    };
  },
};
</script>

<style>
</style>