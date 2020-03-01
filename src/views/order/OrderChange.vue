<template>
  <div class="order-main">
    <!-- 搜索 -->
    <iuSearch :searchTips="searchTipsMsg" />
    <div class="order-tent">
        <!-- 桌號列表 -->
        <van-panel v-for="(item,index) in orderList" :key="index">
          <div class="order-t-l">
            <strong class="order-title">桌號：<b>{{item.orderNumber}}</b></strong>
            <p class="order-text">{{item.orderTent}}</p>
          </div>
          <div class="order-t-r">
            <van-button plain type="transfer" @click="dialogChange(index)" >轉移<van-icon class-prefix="iu-icon" name="transfer"/></van-button>
          </div>
        </van-panel>
        <!-- 分頁 -->
        <van-pagination
          v-model="currentPage"
          :page-count="12"
          mode="simple"
        />
    </div>
    <!-- 换桌对话框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      title="將把您的桌號更換為"
      className="changeNumber"
    >
      <div class="">
        <van-field v-model="number" type="number" label="桌號" placeholder="請輸入桌號"/>
        <div class="">

        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

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
      currentPage: 1,
      value1: 0,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      isShow: false,
      number: "",
    };
  },
  components: {
    iuSearch,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {

    },
    dialogChange(){
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
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
      flex: 1;
      text-align: left;
      padding-right: $iu-gap;
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
      .iu-icon{
        font-size: 20px;
        color: $iu-orange;
        margin-left: 3px;
      }
    }
  }
}
.changeNumber{
  .van-cell{
    background: $iu-text-black;
    border-radius: 40px;
    color: #fff;
    font-size: 20px;
    padding-left: 30px;
  }
}
</style>
