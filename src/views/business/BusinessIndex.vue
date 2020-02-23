<template>
  <div class="page">
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
      <PageSidebar :title="titleMsg" :sidebarMessage="sidebarMessageMsg" />
      <section class="iu-tent-main">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import PageHeader from 'coms/content/page-header';
import PageSidebar from 'coms/content/page-sidebar';

export default {
  data() {
    return {
      titleMsg: '營業設置',
      memberMsg: '員工編號112',
      sidebarMessageMsg: [
        {
          sideClass: 'iu-icon-open',
          sideTitle: '開業打烊',
          sideTo: '/business/status',
        },
        {
          sideClass: 'iu-icon-time',
          sideTitle: '時間設置',
          sideTo: '/business/time',
        },
      ],
    };
  },
  components: {
    PageHeader,
    PageSidebar,
  },
  methods: {

    onClickRight() {
      Toast('退出');
    },
  },
};
</script>


<style lang="scss" scoped>

</style>
