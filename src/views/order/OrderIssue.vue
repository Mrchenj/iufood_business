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
          <van-button type="primary" @click="serveFood(index)">上菜</van-button>
        </div>
      </van-panel>
      <!-- 分頁 -->
      <van-pagination
        v-model="currentPage"
        :page-count="12"
        mode="simple"
      />
    </div>
    <!-- 食物選項彈窗 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="numberTitle"
      width="1100px"
      className="serve-food"
    >
      <h3>選擇要上的菜</h3>
      <div class="serve-food-list">
        <ul>
          <!-- <li class="active"><a>手撕包菜</a></li> -->
          <li v-for="(item , index) in orderList.orderTent" 
              :key="index" 
              :class="{active: index === currentIndex}" 
              @click="itemClick(index)" >
              {{item}}
          </li>
        </ul>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

export default {
  data() {
    return {
      searchTipsMsg: '請輸入單號',
      isShow: false,
      activeKey: 0,
      title: '下單',
      unit: '¥',
      orderList: [
        {
          orderKey: '0',
          orderNumber: '12',
          orderTime: '12:50:30',
          orderTent: [
            '蜂蜜面包棍',
            '蜂蜜面包棍',
            '蜂蜜面包棍',
            '蜂蜜面包棍',
            '蜂蜜面包棍',
          ],
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
      isShow: false,
      number: '',
    };
  },
  computed: {
    numberTitle(){
      return '桌號:' + this.number
    }
  },
  components: {
    iuSearch,
  },
  methods: {
    serveFood(index){
      this.number = this.orderList[index].orderNumber
      this.isShow = !this.isShow
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
    itemClick(index){
      this.currentIndex = index;
    }
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
.serve-food{
  .van-dialog__content{
    h3{margin-bottom: 10px;}
    .serve-food-list{
      padding: 0 20px 20px;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          margin: 13px;
          a{
            width: 120px;
            height: 90px;
            padding: 10px 15px;
            border-radius: 10px;
            background: #dedede;
            display: block;
          }
        }
        .active{
          a{
            background: $iu-orange;
            color:#fff;
          }
        }
      }
    }
  }
}
</style>
