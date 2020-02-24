<template>
  <div class="page">
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
      {{number}}
      <PageSidebar :title="titleMsg" :sidebarMessage="sidebarMessageMsg" @transferIndex='getIndex' />
      <section class="iu-tent-main">
        <router-view/>
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
      number: 0,
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
    getIndex(msg) {
      this.number = msg
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
