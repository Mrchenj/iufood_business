<template>
  <div class="page">
    <header class="iu-nav">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <div slot="right" >
          <span>員工編號112</span>
          <van-button plain type="primary" to='/login'>退出</van-button>
        </div>
      </van-nav-bar>
    </header>
    <div class="iu-page-main">
      <aside class="iu-sidebar">
        <h2 class="iu-siderbar-title">{{status}}</h2>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item class="iu-icon-place" title="下單" to="/order/place" />
          <van-sidebar-item class="iu-icon-issue" title="出單" to="/order/issue" />
          <van-sidebar-item class="iu-icon-change" title="換桌" to="/order/change" />
          <van-sidebar-item class="iu-icon-bill" title="結帳" to="/order/pay" />
        </van-sidebar>
      </aside>
      <section class="iu-tent-main order">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      activeKey: 0,
      title: '下單',
      status: '营业中',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('退出');
    },
  },
};
</script>


<style lang="scss" scoped>
  .order{background: none}
</style>
