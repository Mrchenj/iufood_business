<template>
    <header class="iu-nav">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft">
        <div slot="left">
            <van-icon name="wap-home" />
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
  name: 'pageHeader',
  data() {
    return {

    };
  },
  props: ['title', 'member'],
  methods: {
    onClickLeft() {
      this.$router.push('/home/');
    },
  },
};
</script>


<style lang="scss" scoped>
.iu-nav{background: $iu-background-orange;}
</style>
