<template>
  <div class="order-main">
    <!-- 搜索 -->
    <iuSearch :searchTips="searchTipsMsg" />
    <div class="order-tent">
      <!-- 訂單列表 -->
      <van-panel v-for="(item,index) in orderList" :key="index">
        <div class="order-t-l">
          <strong class="order-title">取餐號碼：<b>{{item.orderNumber}}</b></strong>
          <span class="order-time">下單時間：{{item.orderTime}}</span>
          <p class="order-text">{{item.orderTent}}</p>
        </div>
        <div class="order-t-r">
          <van-button type="primary" @click="dialogPay(index)">結帳</van-button>
        </div>
      </van-panel>
      <!-- 分頁 -->
      <van-pagination
        v-model="currentPage"
        :page-count="12"
        mode="simple"
      />
    </div>

    <!-- 訂單彈窗 -->
    <van-dialog
      v-model="isShowOrder"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="orderTitle"
      width="1000px"
      className="pay-food"
      confirmButtonText="付款"
    >
      <div class="pay-line">
        <label>已經上的菜</label>
        <p>炒米粉*1 / 炒面*1 / 炒浪粉*1 / 炒桂林粉*1</p>
      </div>
      <div class="pay-line">
        <label>未上的菜</label>
        <p>炒河粉*1</p>
      </div>
      <div class="pay-line last-line">
        <div class="line-left compute-paid">
          <div class="compute-main">應付金額<b>$200</b>已優惠<b>$20</b></div>
          <div class="compute-bottom"><van-field v-model="tel" type="tel" label="加減項" /></div>
        </div>
        <div class="line-right actually-paid">
          實付金額<b>$180</b>
        </div>
      </div>
    </van-dialog>

    <!-- 確認下單对话框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      title="下单"
    >
      <div class="">
        是否确认下单
      </div>
    </van-dialog>

  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

export default {
  data() {
    return {
      searchTipsMsg: '請輸入桌號',
      isShow: false,
      isShowOrder: false,
      activeKey: 0,
      title: '下單',
      unit: '¥',
      orderList: [
        {
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、',
        },
        {
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
        {
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: '蜂蜜面包棍、乐蔬沙拉、松露雜菌湯、桂圆灵芝汤、牛油果慕斯、爽脆青酱意粉、桂花圣女果、草莓牛油果慕斯',
        },
      ],
      currentPage: 1,
      number: '',
      tel: '',
    };
  },
  computed: {
    orderTitle(){
      return '桌號:' + this.number
    }
  },
  components: {
    iuSearch,
  },
  methods: {
    dialogPay(index){
      this.number = this.orderList[index].orderNumber
      this.isShowOrder = !this.isShowOrder
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    onClickRight() {
      
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
.pay-food{
  .van-dialog__content{
    .pay-line{
      display: flex;
      justify-content: left;
      flex-direction: column;
      padding-bottom: 10px;
      label{
        font-weight: bold;
      }
      p{
        color: $iu-text-gary;
        margin: 10px 0;
      }
    }
    .pay-line:first-child{
      border-bottom: 1px solid $iu-border-gary;
      margin-bottom: 15px;
    }
    .last-line{
      justify-content: space-between;
      flex-direction: row;
      position: absolute;
      left: 40px;
      right: 40px;
      bottom: 20px;
      background: #f3f3f3;
      padding: 20px;
      font-size: 24px;
      border-radius: 10px;
      b{
        color: $iu-orange;
        margin: 0 10px;
      }
      .compute-paid{
        width: 50%;
        .compute-main{
          padding-bottom: 10px;
          border-bottom: 1px solid $iu-border-gary;
        }
        .van-cell{
          width: 300px;
          display: inline-block;
          background: none;
          .van-field__control{width: 50px;}
          .van-field__label{
            font-size: 20px;
          }
        }
      }

    }
  }
}
</style>
