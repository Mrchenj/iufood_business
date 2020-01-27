<template>
  <div class="login-page">
    <div class="login-main">
      <i class="login-logo">IUfood</i>
      <div class="login-from">
        <van-field class="l" :border="true" placeholder="請輸入賬號" type="text" left-icon="manager" />
        <van-field class="l" :border="true" placeholder="請輸入密码" left-icon="lock" type="password" />
      </div>
      <van-button type="default" to='/home' >默认按钮</van-button>
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
</script>

<style lang="scss" scoped>
.login-page{
  min-height: 100%;
  position: relative;
  font-size: 16px;
  @include iu-bg;
}

.login-main{
  width: 670px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .login-logo{
    padding-top: 150px ;
    border-bottom: 1px solid #c45026;
    background-image: url(/images/logo.png);
    background-repeat: no-repeat;
    background-position: center;
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
      }
  }
}

.van-field__left-icon .van-icon {font-size: 30px}

.other-box {
  padding: 13px 0px;
  margin: 0px 13px;
  display: flex;
  align-items: flex-end ;
  justify-content: space-between;

  border-bottom: 1px solid #BABABA
}
.third-box {
  margin: 0px 13px;

  display: flex;
  align-items: flex-end ;
  justify-content: center;

  padding: 13px 0px;
  button:first-child {
    margin-right: 20px;
  }
  .van-button--small {
    padding: 0px 20px;
  }
}
</style>
