<template>
  <div class="page">
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
      <PageSidebar :title="titleMsg" :sidebarMessage="sidebarMessageMsg">
        <van-button slot="sidebar-bottom" type="danger">一鍵清空</van-button>
      </PageSidebar>
      <section class="iu-tent-main bg-off">
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
          sideClass: 'iu-icon-call',
          sideTitle: '來單提醒',
          sideTo: '/kitchen/call',
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
.bg-off{background: none}
.iu-sidebar{
  position: relative;
  .van-button--danger{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%,0);
    background: $iu-black;
    border: $iu-black;
    border-radius: 20px;
    font-weight: bold;
    min-width: 100px
  }
}

</style>
