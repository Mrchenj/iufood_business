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
          <van-sidebar-item class="iu-iconfont iu-icon-open" title="開業打烊" to="/business/status" />
          <van-sidebar-item class="iu-iconfont iu-icon-time" title="時間設置" to="/business/time" />
        </van-sidebar>
      </aside>
      <section class="iu-tent-main">
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
      title: '營業設置',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home/');
    },
    onClickRight() {
      Toast('退出');
    },
  },
};
</script>


<style lang="scss" scoped>

</style>
