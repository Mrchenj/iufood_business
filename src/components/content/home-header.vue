<template>
    <header class="iu-nav">
      <van-nav-bar>
        <div slot="left">
          <span>系統到期时间：{{maturityTime}}</span>
          <van-button plain type="primary" @click="goToBuy()">购买服务/续费</van-button>
        </div>
        <div slot="right" >
          <span>{{member}}</span>
          <van-button plain type="primary" to='/login'>退出</van-button>
        </div>
      </van-nav-bar>
    </header>
</template>

<script>
export default {
  name: 'homeHeader',
  data() {
    return {

    };
  },
  props: ['maturityTime', 'member'],
  methods: {
    onClickLeft() {
      this.$router.push('/home/');
    },
    goToBuy(){
      this.$router.push('/member')
    }
  },
};
</script>


<style lang="scss" scoped>
.iu-nav{
  background: rgba(0, 0, 0, 0.2);
}
</style>
