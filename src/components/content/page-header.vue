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
      member: '員工編號113332',
    };
  },
  props: ['title'],
  methods: {
    onClickLeft() {
      this.$router.push('/home/');
    },
  },
};
</script>


<style lang="scss" scoped>

</style>
