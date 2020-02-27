<template>
  <div class="page">
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
      <PageSidebar :title="titleMsg" :sidebarMessage="sidebarMessageMsg" @transferIndex='getIndex' />
      <section class="iu-tent-main">
        <router-view/>
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
      titleMsg: '會員中心',
      memberMsg: '員工編號112',
      sidebarMessageMsg: [
        {
          sideClass: 'iu-icon-open',
          sideTitle: '充值續費',
          sideTo: '/member/recharge',
        },
        {
          sideClass: 'iu-icon-time',
          sideTitle: '充值紀錄',
          sideTo: '/member/history',
        },
      ],
    };
  },
  components: {
    PageHeader,
    PageSidebar,
  },
  methods: {
    getIndex(msg) {
      this.titleMsg = this.sidebarMessageMsg[msg].sideTitle
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
