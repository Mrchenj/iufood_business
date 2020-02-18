<template>
  <div class="home">
    <!-- 頂欄 -->
    <HomeHeader :maturityTime="maturityTimeMsg" :member="memberMsg" />
    <!-- 主頁列表 -->
    <van-grid :column-num="3" class="home-menu">
      <van-grid-item
        v-for="value in tabList"
        v-bind:key="value.id"
        :icon="value.icon"
        :text="value.text"
        :to="value.to"
      />
    </van-grid>
  </div>
</template>

<script>
import HomeHeader from 'coms/content/home-header';

export default {
  data() {
    return {
      maturityTimeMsg: '2019.01.02',
      tabList: [
        {
          text: '營業設置',
          icon: 'sbusi',
          to: '/business',
        },
        {
          text: '營業菜單',
          icon: 'mbusi',
          to: '/order',
        },
        {
          text: '後廚菜單',
          icon: 'mchef',
          to: '/kitchen'
        },
        {
          text: '店面管理',
          icon: 'mshop',
        },
        {
          text: '財務管理',
          icon: 'mfin',
        },
        {
          text: '帳號管理',
          icon: 'macco',
        },
      ],
    };
  },
  components: {
    HomeHeader,
  },
};

</script>


<style lang="scss" scoped>

</style>
