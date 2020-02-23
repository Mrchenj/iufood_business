<template>
  <div class="tent-main">
    <h3 class="status-title">當前狀態：<b>{{status}}</b></h3>
    <van-grid :column-num="2" class="operate-set">
      <van-grid-item
        v-for="(value,index) in menuList"
        :key="index"
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
          icon: 'stopen',
        },
        {
          text: '打烊',
          icon: 'stclose',
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
/*
营业开门打烊设置
*/
.status-title{
  text-align: center;
  b{color: $iu-orange;}
} 

</style>
