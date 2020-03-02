<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-left">
        <iuSearch :searchTips="searchTipsMsg" />
      </div>
      <div slot="h-right">
        <van-button type="info">一鍵停售</van-button>
        <van-button type="primary">一鍵開售</van-button>
      </div>
    </ManageTop>

    <!-- 食物編輯列表 -->
    <div class="food-sort">
      <!-- 側欄 -->
      <div class="food-sort-side">
        <van-sidebar v-model="activeKey" >
          <van-sidebar-item v-for="(item,index) in menuList" :key="index" :title="item.title" />
        </van-sidebar>
      </div>
      <!-- 內容 -->
      <div class="food-sort-tent">
        <h3 class="tent-title">本店推薦</h3>
        <div class="tent-list">
          <div class="tent-list-m" v-for="(item,index) in sortList" :key="index" >
            <div class="list-m-l">
              <span class="price">{{item.number}}</span>
              <b class="title">{{item.title}}</b>
              <em class="surplus">剩餘數量: <span>{{item.surplus}}</span></em>
            </div>
            <div class="list-m-r">
              <div class="">

              </div>
              <van-button icon="setting" type="transfer" @click="surplusSet(index)" >修改</van-button>
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

    <!-- 確認下單对话框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="foodName"
    >
      <div class="">
        是否确认下单
      </div>
    </van-dialog>

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
          surplus: '430',
          number: 1,
        },
        {
          title: '魚香肉絲',
          surplus: '430',
          number: 2,
        },
        {
          title: '魚香肉絲',
          surplus: '43',
          number: 3,
        },
        {
          title: '魚香肉絲',
          surplus: '430',
          number: 4,
        },
        {
          title: '魚香肉絲',
          surplus: '430',
          number: 5,
        },
        {
          title: '魚香肉絲',
          surplus: '430',
          number: 5,
        },
        {
          title: '魚香肉絲',
          surplus: '430',
          number: 5,
        }

      ],
      currentPage: 0,
      isShow: false,
    }
  },
  computed:{
    foodName(){
      return "a"
    }
  },
  components: {
    ManageTop,
    IuSearch
  },
  methods: {
    surplusSet(index){
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.food-sort{
  display: flex;
}
.food-sort-side{
  border-radius: $iu-gap/2;
  background: #fff;
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
      .surplus{
        font-style: normal;
        span{
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
