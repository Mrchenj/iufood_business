<template>
  <div class="page">
    <div class="iu-nav">
      <van-nav-bar>
        <div slot="left">
          <span>系統到期时间：2019.01.02</span>
          <van-button plain type="primary">购买服务/续费</van-button>
        </div>
        <div slot="right" >
          <span>員工編號112</span>
          <van-button plain type="primary" to='/login'>退出</van-button>
        </div>
      </van-nav-bar>
    </div>
    營業設置首頁

    <router-link to="/business/status">開業打烊</router-link>
    <router-link to="/business/time">營業時間設置</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'bindex',
};
</script>


<style lang="scss" scoped>

</style>
