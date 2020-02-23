<template>
  <div class="call-list">
      <van-panel  v-for="item in calllist" v-bind:key="item.id" :title="item.foodName" desc="" status="">
        <ul class="food-spec">
          <li>{{item.format}}</li>
          <li>{{item.taste}}</li>
        </ul>
      </van-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calllist: [
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
        {
          foodName: '魚香肉絲',
          format: '大',
          taste: '香辣',
          foodDesc: ''
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.call-list{
  display: flex;
  flex-wrap: wrap;
  .van-panel{
    width: 20%;
    margin: 0px 10px 10px;
    border-radius: 10px;
    .van-panel__header{
      background: none;
      .van-cell__title{
        font-weight: bold;
        font-size: 20px
      }
    }
    .van-panel__content{
      padding: 0px 5px 15px 5px;
      .food-spec{
        display: flex;
        li{
          border: 1px solid $iu-orange;
          border-radius: 3px;
          padding: 5px 10px;
          margin: 0 10px;
          color: $iu-orange;
        }
      }
    }
      

  }
}
</style>
