<template>
  <div class="login-page">

    <div class="option-language">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>

    <div class="login-main">
      <i class="login-logo">IUfood</i>
      <div class="login-from">
        <van-field class="l" :border="true" placeholder="請輸入賬號" type="text" left-icon="manager" />
        <van-field class="l" :border="true" placeholder="請輸入密码" left-icon="lock" type="password" />
      </div>
      <van-button type="primary" to='/home' >登陸</van-button>
    </div>

  </div>
</template>

<script>
// import { login } from "@/api/user.js"
// import {mapActions, mapState, mapGetters} from 'vuex'
// import store from '@/store/index'
// export default {
//   computed: {
//     canNext() {
//       return !(Boolean(this.user.loginId.length) && Boolean(this.user.password.length))
//     },
//   },
//   methods: {
//     ...mapActions([
//       'setUser'
//     ]),
//     onClickLeft() {
//       this.$router.go(-1)
//     },
//     register() {
//       this.$router.push('register')
//     },
//     forget() {
//       this.$router.push('forget')
//     },
//     loginNetwork() {
//       login(this.user).then(response => {
//         const { code, data } = response
//         // setUser(data.userInfo)
//         if (code === 1 ){
//           store.commit('setUserInfo', data.userInfo)
//           store.commit('setUserToken', data.token)
//           this.$router.push('/member')
//         }
//       })
//     }
//   },
//   data() {
//     return {
//       value: "",
//       checked: true,
//       autosize:{ maxHeight: 211, minHeight: 211 },
//       user: {
//         loginId: 'jianpeng',
//         password: '123abc',
//         loginType: '0',
//         userType: ''
//       }
//     }
//   }
// }

export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: '繁體中文', value: 0 },
        { text: '日文', value: 1 },
        { text: '英文', value: 2 },
      ],
    };
  },
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
    right: 0;
  }
  .login-main{
    width: 670px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
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
      .l{
        margin-bottom: 20px;
        background: #e86a3c;
        border:2px solid #fff;
        border-radius: 10px;
        height: 65px;
        padding-top: 10px
        }
    }
  }
}
</style>
