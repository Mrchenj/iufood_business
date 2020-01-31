<template>
  <div class="home">
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
    <van-grid :column-num="3" class="home-menu">
      <van-grid-item
        v-for="value in tabList"
        :key="value"
        :icon="value.icon"
        :text="value.text"
        :to="value.to"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          text: '營業設置',
          icon: 'h-sbusi',
          to: '/business',
        },
        {
          text: '營業菜單',
          icon: 'h-mbusi',
          to: '/order',
        },
        {
          text: '後廚菜單',
          icon: 'h-mchef',
        },
        {
          text: '店面管理',
          icon: 'h-mshop',
        },
        {
          text: '財務管理',
          icon: 'h-mfin',
        },
        {
          text: '帳號管理',
          icon: 'h-macco',
        },
      ],
    };
  },
};

</script>


<style lang="scss" scoped>

</style>
