<template>
  <div class="tent-main">
    <h3 class="status-title">當前狀態：<b>{{status}}</b></h3>
    <van-grid :column-num="2" class="operate-set">
      <van-grid-item
        v-for="value in menuList"
        :key="value"
        :icon="value.icon"
        :text="value.text"
      />
    </van-grid>
    <van-icon class-prefix="my-icon" name="extra1" />
  </div>

</template>

<script>
export default {
  data() {
    return {
      status: '營業中',
      menuList: [
        {
          text: '開門營業',
          icon: 'open',
        },
        {
          text: '打烊',
          icon: 'close',
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

</style>
