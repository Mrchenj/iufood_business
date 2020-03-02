<template>
  <div class="login-page">
    <!-- 選擇語言 -->
    <div class="option-language">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" overlay="false" />
      </van-dropdown-menu>
    </div>
    <!-- 登入表單 -->
    <div class="login-main">
      <i class="login-logo">IUfood</i>
      <div class="login-from">
        <!-- vant-form 引用的時候有問題待解決 -->
        <!-- <form > -->
          <van-field
            v-model="username"
            name="請輸入賬號"
            placeholder="請輸入賬號"
            left-icon="manager" 
            type="text"
            class="login-input" 
          />
          <van-field
            v-model="password"
            name="請輸入密碼"
            placeholder="請輸入密碼"
            left-icon="lock" 
            type="password"
            class="login-input" 
          />
          <van-button type="primary" native-type="submit" @click="onSubmit" >登陸</van-button>
        <!-- </form> -->
      </div>
    </div>
    <!-- 我要開店 外跳 -->
    <div class="login-bottom">
      <van-button type="info"  class="btn-store"
       to='/home' >我要開店<van-icon name="arrow" /></van-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      option: [
        { text: '繁體中文', value: 0 },
        { text: '日文', value: 1 },
        { text: '英文', value: 2 },
      ],
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
     this.$router.push('/home');
    },
  }
};
</script>

<style lang="scss" scoped>
.login-page{
  min-height: 100%;
  position: relative;
  font-size: 16px;
  @include iu-bg;
  .option-language{
    position: absolute;
    width: 200px;
    right: 5px;
    top: 5px;
    .van-hairline--top-bottom::after{
      border: 0;
    }
  }
  .login-main{
    width: 670px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    .login-logo{
      padding-top: 160px ;
      border-bottom: 1px solid #c45026;
      background-image: url(/images/logo.png);
      background-repeat: no-repeat;
      background-position: center top;
    }
    .login-from{
      padding: 65px 65px 0;
      font-size: 16px;
      border-top: 1px solid #ff652e;
      .login-input{
        margin-bottom: 20px;
        background: #e86a3c;
        border:2px solid #fff;
        border-radius: 10px;
        height: 65px;
        padding-top: 10px
        }
      ::-webkit-input-placeholder {
        color: #f1ac99;
      }
      :-moz-placeholder {/* Firefox 18- */
        color: #f1ac99;
      }
      ::-moz-placeholder{/* Firefox 19+ */
      color: #f1ac99;
      }
      :-ms-input-placeholder {
        color: #f1ac99;
      }
    }
  }
  .login-bottom{
    position: fixed;
    left: 50%;
    bottom: $iu-gap;
    transform: translate(-50%,0);
    .btn-store{
      height: 50px;
      line-height: 50px;
      min-width: 150px;
      font-weight: bold;
      .van-icon{
        vertical-align: -2px;
        margin-left: 5px
        }
    }
  }
}
</style>
