<template>
  <div class="page">
    <div class="iu-nav">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <div slot="right" >
          <span>員工編號112</span>
          <van-button plain type="primary" to='/login'>退出</van-button>
        </div>
      </van-nav-bar>
    </div>
    <div class="iu-page-main">
      <div class="iu-sidebar">
        <h2>{{title}}</h2>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="開業打烊" to="/business/status" />
          <van-sidebar-item title="營業時間設置" to="/business/time" />
        </van-sidebar>
      </div>
      <div class="iu-tent-main">
        <router-view></router-view>
      </div>
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
      Toast('返回');
    },
    onClickRight() {
      Toast('退出');
    },
  },
};
</script>


<style lang="scss" scoped>

</style>
