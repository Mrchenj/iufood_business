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
          to: '/login',
        },
        {
          text: '營業菜單',
          icon: 'h-mbusi',
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

.home{
  min-height: 100%;
  position: relative;
  font-size: 16px;
  @include iu-bg;
}

.iu-nav{
  background: rgba(0, 0, 0, 0.2);
  .van-nav-bar{
    background: none;
    max-width: 1200px;
    height: 65px;
    line-height: 65px;
    margin: 0 auto;
    border: 0;
    color: $iu-white;
    font-weight: bold;
  }
  .van-hairline--bottom::after{border: 0}
}

.van-hairline--top::after{border: 0}


</style>
