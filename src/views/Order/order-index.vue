<template>
  <div class="page">
    <!-- 顶栏 -->
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
      <!-- 侧栏 -->
      <PageSidebar :title="titleMsg" :sidebarMessage="sidebarMessageMsg" />

      <section class="iu-tent-main order">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from 'coms/content/page-header';
import PageSidebar from 'coms/content/page-sidebar';

export default {
  data() {
    return {
      activeKey: 0,
      titleMsg: '營業設置',
      memberMsg: '員工編號112',
      sidebarMessageMsg: [
        {
          sideClass: 'iu-icon-place',
          sideTitle: '下單',
          sideTo: '/order/place',
        },
        {
          sideClass: 'iu-icon-issue',
          sideTitle: '出單',
          sideTo: '/order/issue',
        },
        {
          sideClass: 'iu-icon-change',
          sideTitle: '換桌',
          sideTo: '/order/change',
        },
        {
          sideClass: 'iu-icon-bill',
          sideTitle: '結帳',
          sideTo: '/order/bill',
        },
      ],
    };
  },
  components: {
    PageHeader,
    PageSidebar,
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
