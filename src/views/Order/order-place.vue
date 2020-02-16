<template>
  <div class="order-main">
    <div class="order-menu">
      <van-search
        v-model="value"
        shape="round"
        background="#595959"
        placeholder="請輸入菜的id或者菜名"
      />
      <div class="order-tent">
        <van-sidebar v-model="activeKey" >
          <van-sidebar-item v-for="value in menuList" :key="value.key" :title="value.title" />
        </van-sidebar>

        <!-- <van-tabs v-model="activeName">
          <van-tab title="标签 1" name="a">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
          </van-tab>
          <van-tab title="标签 2" name="b">内容 2</van-tab>
          <van-tab title="标签 3" name="c">内容 3</van-tab>

        </van-tabs> -->

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

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
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
        width: 150px;
        padding-top: 10px;
        border-radius: $iu-gap/2;
        overflow: hidden;
        background:$iu-white;
      }
      .menu-detail{
        margin-left: $iu-gap/2;
        .food-inf{
          background: $iu-white;
          text-align: left;
          margin-bottom: $iu-gap;
          border-radius: $iu-gap/2;
          padding: 10px;
          position: relative;
          span,b{
            display: block
          }
          .van-button--default{
            position: absolute;
            right: 10px;
            bottom: 10px;
          }
        }
      }

    }
  }

}
</style>
