<template>
  <div class="home">
    <div class="iu-nav">
      <van-nav-bar>
        <div slot="left"><span>員工編號112</span><button>购买服务/续费</button></div>
        <div slot="right" ><span>員工編號112</span><button>退出</button></div>
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
        },
        {
          text: '營業菜單',
          icon: 'h-sbusi',
        },
        {
          text: '後廚菜單',
          icon: 'h-sbusi',
        },
        {
          text: '店面管理',
          icon: 'h-sbusi',
        },
        {
          text: '財務管理',
          icon: 'h-sbusi',
        },
        {
          text: '帳號管理',
          icon: 'h-sbusi',
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
    margin: 0 auto;
    border: 0;
    color: $iu-white;
  }
  .van-hairline--bottom::after{border: 0}
}

.van-hairline--top::after{border: 0}


</style>
