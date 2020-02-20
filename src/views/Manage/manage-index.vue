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
      titleMsg: '營業菜單',
      memberMsg: '員工編號112',
      sidebarMessageMsg: [
        {
          sideClass: 'iu-icon-number',
          sideTitle: '桌號管理',
          sideTo: '/manage/number',
        },
        {
          sideClass: 'iu-icon-food',
          sideTitle: '食物管理',
          sideTo: '/manage/food',
        },
        {
          sideClass: 'iu-icon-sort',
          sideTitle: '食物分類',
          sideTo: '/manage/sort',
        },
        {
          sideClass: 'iu-icon-stock',
          sideTitle: '庫存管理',
          sideTo: '/manage/stock',
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
