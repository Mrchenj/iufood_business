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
        <div class="menu-detail" >
            <ul>
              <li v-for="item in attribute" :key="item.key">
                <div class="food-inf">
                  <b class="food-name">{{item.name}}</b>
                  <span class="food-number">編號:{{item.number}}</span>
                  <span class="food-cprice">{{unit}}{{item.currentPrice}}</span>
                  <span class="food-oprice">{{unit}}{{item.originalPrice}}</span>
                  <van-button type="default" class="btn-join">加入購物車</van-button>
                </div>
              </li>
            </ul>
        </div>
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
        <div class="order-f-middle">
          <ul>
            <li>
              <van-card
                price="2.00"
                origin-price="2.00"
                desc="描述信息"
                title="商品标题"
              >
                <div slot="footer">
                  <van-checkbox v-model="checked"></van-checkbox>
                  <van-stepper v-model="value" min="1" max="8" />
                </div>
              </van-card>
            </li>
          </ul>
        </div>
        <!-- 提交訂單 -->
        <van-submit-bar
          :price="3050"
          button-text="提交订单"
          @submit="dialogShow"
        />
    </div>
    <!-- 订单对话框 -->
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
          key: '0',
        },
        {
          name: '壽司套餐Kebab壽司套餐bab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
          key: '1',
        },
        {
          name: '壽司套餐Kebabebab',
          number: '45865841',
          originalPrice: '212',
          currentPrice: '34',
          key: '2',
        },
        {
          name: '壽司套餐Kebab壽司套餐Kebab壽司套餐Kebabl',
          number: '45865841',
          originalPrice: '126',
          currentPrice: '34',
          key: '3',
        },
      ],
      checked: true,
      value: 1,
      list: [],
      loading: false,
      finished: false,
      activeName: 'a',
      isShow: false,
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
    .van-sidebar{
      .van-sidebar-item{
        border:0px;
        border-bottom: 1px solid $iu-border-gary;
        background: none;
        padding: 15px;
        font-weight: bold
      }
      .van-sidebar-item--select{
        color: $iu-orange;
        .van-sidebar-item__text:before{
          content: "\e611"
        }
      }
    }
    .order-tent{
      display: flex;
      margin-top: $iu-gap;
      .van-sidebar{
        width: 150px;
        padding-top: 10px;
        border-radius: $iu-gap/2;
        overflow: hidden;
        background:$iu-white;
      }
      .menu-detail{
        margin-left: 15px;
        flex: 1;
        .food-inf{
          background: $iu-white;
          text-align: left;
          border-radius: $iu-gap/2;
          padding: 15px;
          position: relative;
          span,b{
            display: block
          }
          .food-name{
            font-size: 18px;
            max-height: 50px;
            margin-bottom: 5px;
            color: $iu-text-black;
          }
          .food-number{
            color: $iu-text-gary;
            margin-bottom: 5px;
          }
          .food-cprice{
            font-size: 22px;
            font-weight: bold;
            color: $iu-orange;
            margin-bottom: 5px;
          }
          .food-oprice{
            display: inline-block;
            padding: 0 10px;
            position: relative;
            text-decoration:line-through;
          }
          .van-button--default{
            position: absolute;
            right: 15px;
            bottom: 15px;
          }
          .btn-join{
            height: 38px;
            line-height: 38px;
            font-size: 16px;
            color: $iu-text-black;
          }
        }
        ul li{
          margin-top: 15px;
        }
        ul li:first-child{
          margin-top: 0;
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
          .van-icon{
            font-size: 23px;
            margin-right: 5px;
            vertical-align: -6px;
          }
        }
      } 
    }
    .order-f-middle{
      background: $iu-white;
      padding: 20px;
      ul{
        li{
          border-bottom:1px solid $iu-border-gary;
        }
      }
      .van-card{
        display: flex;
        padding:0;
        padding-left: 35px;
        background: none;
        .van-card__header{
          flex: 1;
          padding-right: 15px;
          .van-card__title{
            font-size: 18px;
            line-height: 20px;
            height: 40px;
            overflow:hidden; 
            text-overflow:ellipsis; 
            white-space:nowrap;
          }
          .van-card__desc{
            font-size: 16px;
          }
          .van-card__content{
            flex-direction: row;
            padding-right: 10px;
            min-height: 70px;
            div:first-child{
              color: $iu-orange;
              width: auto;
            }
            .van-card__bottom{
              display: flex;
              flex-direction: column;
              .van-card__price,.van-card__price-currency,.van-card__price-integer{
                font-size: 22px;
              }
              .van-card__origin-price{
                font-size: 20px;
                margin-top: 10px;
              }
            }
          }
        }
        .van-card__footer{
          width: 100px;
          display: flex;
          justify-content: center; /* 水平居中 */
          align-items: center;     /* 垂直居中 */
          .van-checkbox{
            position: absolute;
            left: 0;
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
</style>
