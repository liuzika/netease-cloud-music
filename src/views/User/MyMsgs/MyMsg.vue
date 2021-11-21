<template>
  <div class="msg-container container">
    <div class="msg-left">
      <h2 class="msgtit f-ff2">我的消息</h2>
      <ul id="tab-box" class="msgtab f-cb">
        <li>
          <router-link to="/user/msg/at" active-class="slt"><i class="u-icn u-icn-44"></i><span>我的</span><i class="u-bub" style="display: none"></i></router-link>
        </li>
        <li>
          <router-link to="/user/msg/private" active-class="slt"><i class="u-icn u-icn-45"></i><span>私信</span><i class="u-bub u-bub-1" style="display: block"><b class="f-alpha"></b><em>29</em></i></router-link>
        </li>
        <li>
          <router-link to="/user/msg/comment" active-class="slt"><i class="u-icn u-icn-46"></i><span>评论</span><i class="u-bub" style="display: none"></i></router-link>
        </li>
        <li>
          <router-link to="/user/msg/notify" active-class="slt"><i class="u-icn u-icn-47"></i><span>通知</span><i class="u-bub" style="display: none"></i></router-link>
        </li>
      </ul>
      <div class="readall">
        一键已读
      </div>
    </div>
    <div class="msg-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMsg",
};
</script>

<style lang='less'>
.msg-container {
  display: flex;
  .msg-left {
    position: relative;
    background-color: #fcfcfc;
    width: 184px;
    .msgtit {
      height: 30px;
      padding: 32px 0 14px 40px;
      font-size: 20px;
      font-weight: normal;
      line-height: 30px;
    }
    .msgtab {
      border-top: 1px solid #ddd;
      li {
        float: left;
        width: 184px;
        border-bottom: 1px solid #ddd;
        a {
          display: block;
          width: 144px;
          height: 53px;
          padding-left: 40px;
          background: #f7f7f7;
          border-top: 1px solid #fff;
          line-height: 53px;
          &.slt {
            background: #fff;
            border-right: 1px solid #fff;
          }
          &:hover {
            background-color: #fff;
          }
          i {
            float: left;
            margin-top: 17px;
            &.u-icn-44,
            &.u-icn-45,
            &.u-icn-46,
            &.u-icn-47 {
              width: 22px;
              height: 21px;
            }
            &.u-icn-44 {
              background-position: -64px -164px;
            }
            &.u-icn-45 {
              background-position: -64px -193px;
            }
            &.u-icn-46 {
              background-position: -64px -245px;
            }
            &.u-icn-47 {
              background-position: -58px -400px;
            }
          }
          span {
            float: left;
            margin: 0 8px 0 6px;
          }
          .u-bub {
            position: relative;
            zoom: 1;
            width: 22px;
            height: 22px;
            color: #fff;
            text-align: center;
            line-height: 23px;
            font-weight: bold;
            b {
              position: absolute;
              top: 0;
              left: 0;
              height: 22px;
              width: 22px;
            }
            em {
              position: relative;
              z-index: 2;
              border-radius: 50%;
              background-color: #d93131;
              padding: 1px;
            }
          }
        }
      }
    }
    .readall {
      width: 112px;
      height: 28px;
      line-height: 28px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      text-align: center;
      margin: 20px auto 0;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }
  .msg-right {
    width: 715px;
    padding: 40px;
    border-left: 1px solid #d3d3d3;
  }
}
</style>