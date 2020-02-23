<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-left">
        <iuSearch :searchTips="searchTipsMsg" />
      </div>
      <div slot="h-right">
        <van-button type="danger">一鍵停售</van-button>
        <van-button type="primary">一鍵開售</van-button>
      </div>
    </ManageTop>

    <!-- 食物編輯列表 -->
    <div class="food-sort">
      <!-- 側欄 -->
      <div class="food-sort-side">
        <h3 class="side-title"><van-icon name="wap-nav" />分類</h3>
        <ul class="side-menu">
          <li v-for="(item,index) in menuList" :key="index">
              <van-button type="icon"><van-icon name="clear" /></van-button>
              <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <!-- 內容 -->
      <div class="food-sort-tent">
        <h3 class="tent-title">本店推薦</h3>
        <div class="tent-list">
          <div class="tent-list-m" v-for="(item,index) in sortList" :key="index" >
            <div class="list-m-l">
              <span class="price">{{item.number}}</span>
              <b class="title">{{item.title}}</b>
            </div>
            <div class="list-m-r">
              <div class="">

              </div>
              <van-button icon="setting" type="transfer">修改</van-button>
            </div>
          </div>
        </div>
        <!-- 分頁 -->
        <van-pagination
          v-model="currentPage"
          :page-count="12"
          mode="simple"
        />
      </div>
    </div>

  </div>
</template>

<script>
import IuSearch from 'coms/common/iu-search'

import ManageTop from './childComps/manage-top'

export default{
  data(){
    return{
      searchTipsMsg: '請輸入菜的ID或者菜名',
      activeKey: 0,
      menuList: [
        {
          title: '本店推薦',
        },
        {
          title: '刺身',
        },
        {
          title: '火鍋',
        },
        {
          title: '粥',
        },
      ],
      sortList: [
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80',
          number: 1,
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80',
          number: 2,
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80',
          number: 3,
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80',
          number: 4,
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80',
          number: 5,
        }

      ],
      currentPage: 0,
    }
  },
  components: {
    ManageTop,
    IuSearch
  }
}
</script>


<style lang="scss" scoped>
.food-sort{
  display: flex;
}
.food-sort-side{
  background: #fff;
  border-radius: 10px;
  min-height: 100%;
  width: 200px;
  .side-title{
    background: $iu-background-black;
    height: 50px; 
    line-height: 50px;
    color: #fff;
    padding-left: 20px;
    border-radius: 10px 10px 0 0;
    margin: 0;
    .van-icon{
      margin-right: 5px;
    }
  }
  .side-menu{
    li{
      border-bottom: 1px solid $iu-border-gary;
      height: 52px; 
      line-height: 52px;
    }
    li.active{
      color: $iu-orange;
    }
    li:last-child{
      border-bottom: 0;
    }
  }
  .van-button--icon{
    border: 0;
    min-width: 0;
    font-size: 24px;
    color: $iu-orange;
    vertical-align: -5px;
  }
}
.food-sort-tent{
  margin-left: 20px;
  flex: 1;
  .tent-title{
    color: $iu-orange;
  }
  .tent-list-m{
    margin-bottom: 10px;
    background: $iu-white;
    display: flex;
    padding: 10px 15px;
    justify-content: space-between;
    .list-m-l{
      display: flex;
      align-items: center;
      b{
        min-width: 200px;
      }
      .price{
        color: $iu-orange;
        min-width: 100px;
        margin-right: 20px;
      }
      .origin-price{
        text-decoration: line-through;
      }
    }
  }
}
</style>
