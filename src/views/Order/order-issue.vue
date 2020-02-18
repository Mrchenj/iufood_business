<template>
  <div class="order-main">
    <!-- 搜索 -->
    <IuSearch :searchTips="searchTipsMsg" />
    <div class="order-tent">
      <van-panel v-for="item in orderList" :key="item">
        <div class="order-t-l">
          <strong class="order-title">取餐號碼：<b>{{item.orderNumber}}</b></strong>
          <span class="order-time">{{item.orderTime}}</span>
          <p class="order-text">{{item.orderTent}}</p>
        </div>
        <div class="order-t-r">
          <van-button type="primary">上菜</van-button>
        </div>
      </van-panel>
      <van-pagination
        v-model="currentPage"
        :page-count="12"
        mode="simple"
      />
    </div>


<van-button type="primary" @click="onClick">登录</van-button>
<van-dialog
   v-model="isShow"
   show-cancel-button
   :beforeClose="beforeClose"
>
   <van-field
      v-model="userName"
      label="用户名"
      placeholder="请输入姓名"
   />
   <van-field
      v-model="userPass"
      label="密码"
      placeholder="请输入密码"
   />
</van-dialog>


  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

export default {
  data() {
    return {
      searchTipsMsg: 'dfsdfsdfsdf',
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
    IuSearch,
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
