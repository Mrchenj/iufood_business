<template>
  <div class="order-main">
    <!-- 搜索 -->
    <iuSearch :searchTips="searchTipsMsg" />
    <div class="order-tent">
      <!-- 訂單列表 -->
      <van-panel v-for="item in orderList" v-bind:key="item.id">
        <div class="order-t-l">
          <strong class="order-title">取餐號碼：<b>{{item.orderNumber}}</b></strong>
          <span class="order-time">下單時間：{{item.orderTime}}</span>
          <p class="order-text">{{item.orderTent}}</p>
        </div>
        <div class="order-t-r">
          <van-button type="primary">結帳</van-button>
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
import iuSearch from 'coms/common/iu-search';

export default {
  data() {
    return {
      searchTipsMsg: '請輸入桌號',
      isShow: false,
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
  components: {
    iuSearch,
  },
  methods: {
    onClick() {
      // this.$dialog.alert({
      //     message: "hello world",
      // })
      this.isShow = !this.isShow;
    },
    onClickRight() {
      // Toast('退出');
    },
  },
};
</script>


<style lang="scss" scoped>
.order-main{
  .van-panel{
    margin-bottom: $iu-gap;
    padding: $iu-gap;
    border-radius: 10px;
    .van-panel__header{display: none}
    .van-panel__content{
      display: flex;
      color: $iu-black;
      .order-t-l{
        flex: 1;
        padding-right: $iu-gap;
        text-align: left;
        .order-title{
          font-size: 18px;
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
        width: 18%;
        text-align: center;
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
