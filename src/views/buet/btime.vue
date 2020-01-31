<template>
  <div class="tent-main">
    <van-field label="營業時間" :value="openTime" readonly />
    <van-field label="打烊時間" :value="closeTime" readonly />
    <van-button type="primary">保存</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTime: '09/00',
      closeTime: '22/00',
    };
  },
};
</script>


<style lang="scss" scoped>

</style>
