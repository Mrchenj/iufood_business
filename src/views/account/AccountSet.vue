<template>
  <div class="iu-tent-main form-main">
    <!-- 拥有权限 -->
    <div class="per-select">
      <h3>擁有的權限:</h3>
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">開門</van-checkbox>
        <van-checkbox name="b">食物管理</van-checkbox>
        <van-checkbox name="c">開門</van-checkbox>
      </van-checkbox-group>
    </div>
    <!-- 創建角色 -->
    <div class="tent-main">
      <van-field label="帳號" :value="account" />
      <van-field label="密碼" :value="password" />
      <van-field label="店員名" :value="name" />
      <van-field label="聯繫方式" :value="content" />
      <van-button type="primary">創建</van-button>
      <van-button type="info" @click="gotoBack()">取消</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ['a', 'b'],
      account: '',
      password: '',
      name: '',
      content: '',
    }
  },
  methods: {
    gotoBack(){
      this.$router.push('/account/list')
    }
  }
};
</script>


<style lang="scss" scoped>
.iu-tent-main{
  height: calc(100vh - 220px);
  padding:40px;
  overflow: auto;
}

.per-select{
  .van-checkbox-group{
    display: flex;
    .van-checkbox{
      margin-right: 20px
    }
  }
  padding-bottom: 20px;
  border-bottom: 1px solid $iu-border-gary
}
</style>
