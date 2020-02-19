<template>
  <div class="order-main">
    <!-- 搜索 -->
    <iuSearch :searchTips="searchTipsMsg" />
    <div class="order-tent">
        <!-- 桌號列表 -->
        <van-panel v-for="item in orderList" v-bind:key="item.id">
          <div class="order-t-l">
            <strong class="order-title">桌號：<b>{{item.orderNumber}}</b></strong>
            <p class="order-text">{{item.orderTent}}</p>
          </div>
          <div class="order-t-r">
            <van-button plain type="transfer">轉移<van-icon class-prefix="iu-icon" name="transfer" /></van-button>
          </div>
        </van-panel>
        <!-- 分頁 -->
        <van-pagination
          v-model="currentPage"
          :page-count="12"
          mode="simple"
        />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchTipsMsg: '請輸入卓號',
      activeKey: 0,
      title: '下單',
      unit: '¥',
      orderList: [
        {
          orderKey: '0',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderKey: '1',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、',
        },
        {
          orderKey: '2',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderKey: '3',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderKey: '4',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
      ],
      list: [],
      loading: false,
      finished: false,
      activeName: 'a',
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
.van-panel{
  margin-bottom: $iu-gap;
  padding: $iu-gap;
  border-radius: 10px;
  .van-panel__header{display: none}
  .van-panel__content{
    display: flex;
    color: $iu-black;
    .order-t-l{
      width: 80%;
      text-align: left;
      .order-title{
          b{
          color:$iu-orange;
        }
      }
      .order-time{
        float: right;
      }
      .order-text{
        margin: 0;
        margin-top: 5px;
        color: $iu-text-gary;
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap;
      }
    }
    .order-t-r{
      width: 20%;
      text-align: center;
      padding-left: $iu-gap;
      .iu-icon{
        font-size: 20px;
        color: $iu-orange;
        margin-left: 3px;
      }
    }
  }
}
.van-pagination{
  width: 350px;
  margin: 40px auto;
  font-size: 18px;
}
</style>
