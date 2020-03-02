<template>
  <div class="manage-main">

    <div style="display:none">
      <!-- 頂部 -->
      <ManageTop>
        <div slot="h-right">
          <van-button icon="plus" type="info">增加菜的分類</van-button>
          <van-button icon="plus" type="primary">增加菜品</van-button>
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
          <h3 class="tent-title">當前分類：本店推薦</h3>
          <div class="tent-list">
            <div class="tent-list-m" v-for="(item,index) in sortList" :key="index" >
              <div class="list-m-l">
                <b class="title">{{item.title}}</b>
                <span class="price">{{item.price}}</span>
                <span class="origin-price">{{item.originPrice}}</span>
              </div>
              <div class="list-m-r">
                <van-button icon="clear" type="transfer">刪除</van-button>
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

    <div class="sort-add line-between">
      <!-- 菜品項列表 -->
      <div class="food-item-menu">
        <!-- 搜索 -->
        <iuSearch :searchTips="searchTipsMsg" />
        <ul class="list">
          <li v-for="(item , index) in foodMenu" :key="index" class="line-between">
            <div>
              <b>{{item.number}}</b>
              <span>{{item.title}}</span>
            </div>
            <div>
              <van-icon name="arrow" />
            </div>
          </li>
        </ul>
        <!-- 分頁 -->
        <van-pagination
          v-model="currentPage"
          :page-count="12"
          mode="simple"
        />
      </div>
      <!-- 菜品項列表 -->
      <div class="food-sort-menu">
        <div class="sort-top">
          <label>將已選擇的食物加入到:</label>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" overlay="false" />
          </van-dropdown-menu>
        </div>
        <div class="sort-main">
          <div>
            <ul>
              <li v-for="(item , index) in foodMenu" :key="index" class="line-between">
                <div>
                  <b class="number">{{item.number}}</b>
                  <span class="title">{{item.title}}</span>
                  <span class="price">{{item.price}}</span>
                  <span class="origin-price">{{item.originPrice}}</span>
                </div>
                <div>
                  <van-button plain type="clear">刪除</van-button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sort-footer">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

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
          originPrice: '80'
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        }

      ],
      foodMenu: [
        {
          number: 1,
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          number: 2,
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          number: 3,
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          number: 4,
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        },
        {
          number: 5,
          title: '魚香肉絲',
          price: '43',
          originPrice: '80'
        }

      ],
      currentPage: 0,
      value: 0,
      option: [
        { text: '全部菜品', value: 0 },
        { text: '川菜', value: 1 },
        { text: '粵菜', value: 2 }
      ],
    }
  },
  components: {
    ManageTop,
    iuSearch
  }
}
</script>


<style lang="scss" scoped>
.manage-main,.sort-add{
  height: 100%;
}
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
.food-item-menu{

  .list{
    margin-top: 15px;
    li{
      height: 55px;
      line-height: 55px;
      background: $iu-white;
      margin-bottom: 15px;
      padding: 0 15px;
      b{
        color: $iu-orange;
        margin-right: 20px;
      }
      .van-icon{
        font-size: 20px;
        color: $iu-orange
      }
    }
  }
}
.food-sort-menu{
  flex:1;
  margin-left: 20px;
  .sort-top{
    display: flex;
    margin-bottom: 15px;
  }
  .sort-main{
    background: $iu-white;
    padding: 10px;
    height: calc(100% - 50px);
    ul li{
      padding: 15px 15px;
      border-bottom: 1px solid $iu-border-gary;
      align-items: center;
      .number{
        color: $iu-orange;
        margin-right: $iu-gap
      }
      .title{
         margin-right: $iu-gap
      }
      .price{
        margin-right: 10px;
        color: $iu-orange;
      }
    }
    .van-button--clear{
      height: 30px;
      line-height: 30px;
      min-width: 90px;
    }
  }
}
</style>
