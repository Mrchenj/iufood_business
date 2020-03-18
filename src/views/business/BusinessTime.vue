<template>
  <div class="tent-main">
    <van-cell-group>
      <van-field v-model="openTime" label="營業开始時間"  />
      <van-field v-model="openTime" label="營業结束時間"  />
    </van-cell-group>
    <van-button type="info" class="add"><van-icon name="plus" /></van-button>
    <van-button type="primary">保存</van-button>
    <van-datetime-picker
      v-model="currentTime"
      type="time"
      :min-hour="10"
      :max-hour="20"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTime: '09:00',
      closeTime: '22:00',
    };
  },
};
</script>


<style lang="scss" scoped>

</style>
