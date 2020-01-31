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
        <h2 class="iu-siderbar-title">{{title}}</h2>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item class="iu-licon-open" title="下單" to="/business/status" />
          <van-sidebar-item class="iu-licon-time" title="出單" to="/business/time" />
          <van-sidebar-item class="iu-licon-time" title="換桌" to="/business/time" />
          <van-sidebar-item class="iu-licon-time" title="結帳" to="/business/time" />
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
