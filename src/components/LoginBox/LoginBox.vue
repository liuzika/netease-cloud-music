<template>
  <div class="login-box">
    <div class="zbar">
      <div class="ztitle">登录</div>
      <div class="close" title="关闭窗体">X</div>
    </div>
    <!-- 扫码登陆 -->
    <div class="log-code" v-if="isLogin == 'code'">
      <div class="main">
        <div class="phone"></div>
        <div class="right">
          <div class="title">扫码登录</div>
          <div class="qr">
            <div class="tip">
              <p>二维码已失效</p>
              <a class="u-btn2">点击刷新</a>
            </div>
            <div class="canvas" title="#">
              <canvas width="130" height="130"></canvas>
              <!-- <img alt="Scan me!" style="display: none;"> -->
            </div>
          </div>
          <p class="txt">
            使用&nbsp;
            <a class="download-link" href="/download" target="_blank"
              >网易云音乐APP</a
            >
            &nbsp;扫码登录
          </p>
        </div>
      </div>
      <div class="opt-mode">
        <button class="opt-btn" @click="changeMode('mode')">
          选择登录方式
        </button>
      </div>
    </div>
    <!-- 选择登陆方式 -->
    <div class="log-mode" v-else-if="isLogin == 'mode'">
      <div class="log-list f-cb">
        <div class="main f-fl">
          <div class="plt"></div>
          <div class="phone-login">
            <button class="phone-btn" @click="changeMode('phone')">手机号登陆</button>
          </div>
          <div class="log-reg">
            <button class="reg-btn" @click="changeMode('register')">注&nbsp;&nbsp;册</button>
          </div>
        </div>
        <div class="alt f-fr">
          <ul>
            <li>
              <a
                href="https://music.163.com/api/sns/authorize?snsType=10&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                ><i class="mlg mlg-wx"></i>微信登录</a
              >
            </li>
            <li>
              <a
                href="https://music.163.com/api/sns/authorize?snsType=5&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                ><i class="mlg mlg-qq"></i>QQ登录</a
              >
            </li>
            <li>
              <a
                href="https://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                ><i class="mlg mlg-sn"></i>微博登录</a
              >
            </li>
            <li>
              <a href="javascript:;" @click="changeMode('email')"
                ><i class="mlg mlg-wy"></i>网易邮箱帐号登录</a
              >
            </li>
          </ul>
        </div>
        <div class="official-terms f-fl">
          <input type="checkbox" />
          <label for="j-official-terms">同意</label>
          <a
            href="http://st.music.163.com/official-terms/service"
            target="_blank"
            >《服务条款》</a
          ><a
            href="http://st.music.163.com/official-terms/privacy"
            target="_blank"
            >《隐私政策》</a
          ><a
            href="https://st.music.163.com/official-terms/children"
            target="_blank"
            >《儿童隐私政策》</a
          >
        </div>
      </div>
      <div class="log-scan"  @click="changeMode('code')"></div>
    </div>
    <!-- 邮箱登陆 -->
    <div class="log-email" v-else-if="isLogin == 'email'">
      邮箱登录
      <button class="opt-btn" @click="changeMode('mode')">选择登录方式</button>
    </div>
    <!-- 手机号登陆 -->
    <div class="log-phone" v-else-if="isLogin == 'phone'">
      手机号登录
      <button class="opt-btn" @click="changeMode('register')">注册</button>
      <button class="opt-btn" @click="changeMode('mode')">选择登录方式</button>
    </div>
    <!-- 注册 -->
    <div class="log-register" v-else-if="isLogin == 'register'">
      注册
      <button class="opt-btn" @click="changeMode('mode')">选择登录方式</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      isLogin: "mode",
    };
  },
  methods: {
    changeMode(val) {
      this.isLogin = val;
    },
  },
};
</script>

<style lang='less'>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 528px;
  height: 372px;
  z-index: 9998;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  background-color: #fff;
  .zbar {
    height: 38px;
    background-color: #2d2d2d;
    color: #fff;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 20px;
    cursor: move;
    .close {
      cursor: pointer;
    }
  }
  // 扫码登录
  .log-code {
    padding: 38px 20px 20px;
    .main {
      display: flex;
      justify-content: space-evenly;
      .phone {
        width: 125px;
        height: 220px;
        background: url(~@/assets/img/loginBox/qr_guide.png) no-repeat;
        background-size: 125px 220px;
      }
      .right {
        width: 200px;
        height: 205px;
        .title {
          text-align: center;
          font-size: 18px;
        }
        .qr {
          margin: 13px 35px;
          .tip {
            display: none;
          }
          .canvas {
            width: 130px;
            height: 130px;
            background: url(~@/assets/img/loginBox/logincode.png) no-repeat;
          }
        }
        .txt {
          text-align: center;
          a {
            color: #0c73c2;
          }
        }
      }
    }
    .opt-mode {
      text-align: center;
      margin-top: 20px;
      .opt-btn {
        width: 120px;
        height: 30px;
        border: 1px solid #979797;
        border-radius: 15px;
        background-color: #fff;
        &:hover {
          background-color: #fafafa;
        }
      }
    }
  }
  // 选择登陆方式
  .log-mode {
    .log-list {
      padding: 40px 40px 0 40px;
      .main {
        padding-right: 35px;
        border-right: 1px dotted #cccccc;
        .plt {
          width: 224px;
          height: 120px;
          background: url(~@/assets/img/loginBox/platform.png) no-repeat center;
        }
        .phone-login,
        .log-reg {
          width: 224px;
          margin-top: 10px;
          button {
            width: 224px;
            height: 30px;
            border-radius: 4px;
            &.phone-btn {
              border: 1px solid #3984ce;
              color: #fff;
              background: linear-gradient(#4493dc, #1d6ebe);
              &:hover {
                background: linear-gradient(#5ea3e3, #3382ce);
              }
            }
            &.reg-btn {
              border: 1px solid #c4c4c4;
              background: linear-gradient(#ffffff, #fbfbfb);
              &:hover {
                border-color: #dedddd;
                background: linear-gradient(#ffffff, #fdfdfd);
              }
            }
          }
        }
      }
      .alt {
        ul {
          width: 148px;
          li {
            height: 40px;
            line-height: 40px;
            margin-bottom: 15px;
            .mlg {
              display: inline-block;
              width: 38px;
              height: 38px;
              margin-right: 14px;
              background: url(~@/assets/img/loginBox/logo.png) no-repeat;
              vertical-align: middle;
              &.mlg-wx {
                background-position: -150px -670px;
              }
              &.mlg-qq {
                background-position: -190px -670px;
              }
              &.mlg-sn {
                background-position: -230px -670px;
              }
              &.mlg-wy {
                background-position: -270px -670px;
              }
            }
          }
        }
      }
      .official-terms {
        margin-top: 30px;
        input {
          margin-right: 4px;
          vertical-align: middle;
        }
        label {
          color: #999999;
        }
        a {
          color: #507daf;
        }
      }
    }
    .log-scan{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 52px;
      height: 52px;
      background: url(~@/assets/img/loginBox/qr_login_icon.png) no-repeat;
      background-size: 52px;
      cursor: pointer;
    }
  }
}
</style>