<template>
  <div class="order-main">
    <div class="order-menu">
      <!-- 搜索 -->
      <iuSearch :searchTips="searchTipsMsg" />
      <div class="order-tent">
        <!-- 食物類別 -->
        <van-sidebar v-model="activeKey" >
          <van-sidebar-item v-for="(item,index) in menuList" :key="index" :title="item.title" />
        </van-sidebar>
        <!-- 食物類別 對應品項 -->
        <MenuDetial v-bind:attribute="attribute" :unit="unit" />
      </div>
    </div>
    <div class="order-form">
        <!-- 已點菜單頭部 -->
        <div class="order-f-top">
          <van-nav-bar>
            <span slot="left"><van-icon class-prefix="iu-icon" name="issue" />已點點菜</span>
            <van-button slot="right" plain type="primary"><van-icon name="close" />一鍵清空</van-button>
          </van-nav-bar>
        </div>
        <!-- 已點菜單列表 -->
        <MenuOrdered :checked="checked" :value="value" />
        <!-- 提交訂單 -->
        <van-submit-bar
          :price="3050"
          button-text="生成订单"
          @submit="dialogShow"
        />
    </div>

     <!-- 食物選項彈窗 -->
    <van-dialog
      v-model="isShowFood"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="foodTitle"
      width="600px"
      className="add-food"
    >
      <div class="options">
        <div class="option-line">
          <label>規格</label>
          <ul>
            <li><a>1-2人</a></li>
            <li><a>3-4人</a></li>
          </ul>
        </div>
        <div class="option-line">
          <label>口味</label>
          <ul>
            <li class="active"><a>不辣</a></li>
            <li><a>中辣</a></li>
            <li><a>香辣</a></li>
          </ul>
        </div>
        <div class="option-line describe-line">
          <label>食物描述</label>
          <p>
            大虾和海胆海苔卷天妇罗真的大爱 口感恰到好处不会油腻 特级八品生鱼片拼盘 每壹样品种都非常新鲜
          </p>
        </div>
        <div class="option-line price-line">
          <div>
            <span class="food-cprice">¥34</span>
            <span class="food-oprice">¥212</span>
          </div>
          <div>
             <van-stepper v-model="dialogValue" min="1" max="8" />
          </div>
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
import iuSearch from 'coms/common/iu-search'
import Scroll from 'coms/common/scroll/Scroll'

import MenuDetial from './childComps/MenuDetial'
import MenuOrdered from './childComps/MenuOrdered'

export default {
  data() {
    return {
      searchTipsMsg: '請輸入菜的ID或者菜名',
      activeKey: 0,
      title: '下單',
      unit: '¥',
      menuList: [
        {
          title: '本店推薦',
          key: '0',
        },
        {
          title: '刺身',
          key: '1',
        },
        {
          title: '火鍋',
          key: '3',
        },
        {
          title: '粥',
          key: '4',
        },
      ],
      attribute: [
        {
          name: '壽司套餐Kebab壽司套餐Kab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
        },
        {
          name: '壽司套餐Kebab壽司套餐bab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
        },
        {
          name: '壽司套餐Kebabebab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
        },
        {
          name: '壽司套餐Kebabebab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
        },
        {
          name: '壽司套餐Kebabebab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
        },
        {
          name: '壽司套餐Kebab壽司套餐Kebab壽司套餐Kebabl',
          number: '45865841',
          originalPrice: '126',
          currentPrice: '34',
        },
      ],
      checked: true,
      value: 1,
      dialogValue: 1,
      list: [],
      loading: false,
      finished: false,
      activeName: 'a',
      isShow: false,
      isShowFood: false,
      foodTitle: '',
    };
  },
  components: {
    iuSearch,
    Scroll,
    MenuDetial,
    MenuOrdered
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('退出');
    },
    dialogShow(){
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    addFood(index){
      this.foodTitle =  this.attribute[index].name
      this.isShowFood = !this.isShowFood
    }
  },
};
</script>


<style lang="scss" scoped>
.order-main{
  display: flex;
  .order-menu{
    width: 550px;
    .van-search{
      border-radius: 10px 10px 0 0;
    }
    .order-tent{
      display: flex;
      margin-top: $iu-gap;
      .van-sidebar{
        width: 170px;
        padding-top: 10px;
        border-radius: $iu-gap/2;
        overflow: hidden;
        background:$iu-white;
        .van-sidebar-item{
          border:0px;
          border-bottom: 1px solid $iu-border-gary;
          background: none;
          padding: 15px;
          font-weight: bold
        }
        .van-sidebar-item--select{
          color: $iu-orange;
        }
      }
    }
  }
  .order-form{
    flex: 1;
    margin-left: $iu-gap;
    background:$iu-white;
    border-radius: 10px;
    position: relative;
    .order-f-top{
      color: #fff;
      .van-nav-bar{
        height: 50px;
        line-height: 50px;
        background: $iu-orange;
        border-radius: 10px 10px 0 0;
        .van-nav-bar__left{
          font-size: 18px;
          font-weight: bold;
          .iu-icon{
            margin-right: 5px;
            font-size: 18px;
          }
        }
        .van-button--plain.van-button--primary{
          font-size: 15px;
          border:0;
          height: 35px;
          line-height: 35px;
          .van-icon{
            font-size: 23px;
            margin-right: 5px;
            vertical-align: -6px;
            color: $iu-orange
          }
        }
      } 
    }

    .van-submit-bar{
      position: absolute;
      background: #e5e5e5;
      border-radius: 0 0 10px 10px;
      padding: 10px 0;
      justify-content: space-between;
      .van-submit-bar__text{text-align: left}
    }
  }
}

.scroll2{
  height: calc(100vh - 260px);
  overflow: hidden;
}

.add-food{
  .option-line{
    display: flex;
    margin-bottom: 5px;
    label{
      font-weight: bold;
      min-width: 70px;
      padding-top: 14px
    }
    ul{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    li{
    margin: 5px 10px;
      a{
        display: block;
        padding: 5px;
        min-width: 100px;
        border-radius: 10px;
        height: 35px;
        line-height: 35px;
        border: 1px solid $iu-border-gary;
        border-radius: 10px;
        text-align: center
      }
    }
    .active{
      a{
        background: $iu-orange;
        border-color: $iu-orange;
        color: $iu-white;
      }
  }
    }
  }
  .describe-line{
    flex-direction: column;
    label{
      padding-top: 8px
    }
    p{
      margin: 10px 0;
      color: $iu-text-black;
    }
  }
  .price-line{
    border-top: 1px solid $iu-border-gary;
    padding: 25px 20px 0;
    justify-content: space-between;
    .food-cprice{
      color: $iu-orange;
      font-size: 33px;
      font-weight: bold
    }
    .food-oprice{
      color: $iu-text-gary;
      text-decoration:line-through;
      margin-left: 20px;
    }
  }
}
</style>
