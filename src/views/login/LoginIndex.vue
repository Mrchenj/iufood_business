<template>
  <div class="login-page">

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
