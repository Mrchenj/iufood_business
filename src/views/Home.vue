<template>
  <div class="home">
    <h1> 首页 </h1>
    <button @click="loginAction"> 登录</button>

    <!-- 对话框测试 -->
    <div style="margin-top:100px;">
      <van-button type="info" @click="dialogShow">对话框显示</van-button>
    </div>

    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
    >
      <van-field
          v-model="userName"
          label="用户名"
          placeholder="请输入姓名"
      />
      <van-field
          v-model="userPass"
          label="密码"
          placeholder="请输入密码"
      />
    </van-dialog>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      isShow: false,
      userName:'',
      userPass:''
    };
  },
  components: {

  },
  methods: {
    loginAction() {
      this.$router.push('/login');
    },
    dialogShow(){
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.home{
    text-align: center;
}
</style>
