<template>
  <div class="tent-main">
    <h3 class="status-title">當前狀態：<b>{{status}}</b></h3>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in menuList"
        :key="value"
        :icon="value.icon"
        :text="value.text"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '關閉',
      menuList: [
        {
          text: '營業設置',
          icon: 'h-sbusi',
          to: '/business',
        },
        {
          text: '營業菜單',
          icon: 'h-mbusi',
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

</style>
