<template>
  <div class="order-main">

  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      activeKey: 0,
      title: '下單',
    };
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

</style>
