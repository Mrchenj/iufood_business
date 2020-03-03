<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-left">
        <iuSearch :searchTips="searchTipsMsg" />
      </div>
      <div slot="h-right">
        <van-button type="info" @click="saleEmpty()">一鍵停售</van-button>
        <van-button type="primary" @click="setAll()">一鍵開售</van-button>
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

    <!-- 一鍵清空对话框 -->
    <van-dialog
      v-model="isShowEmpty"
      show-cancel-button
      :beforeClose="beforeClose"
      title="一鍵賣完"
    >
      <div class="">
        是否把所有商品設置為賣空狀態
      </div>
    </van-dialog>

    <!-- 一鍵設定对话框 -->
    <van-dialog
      v-model="isShowAll"
      show-cancel-button
      :beforeClose="beforeClose"
      title="一鍵設定"
      className="all-set"
    >
      <div>
      <p>您將把所有菜的數量設定為</p>
      <van-field v-model="value"  placeholder="请输入數量" />
      </div>
    </van-dialog>

    <!-- 確認下單对话框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="foodName"
      className="surplus-set"
      width="850px"
    >
      <div class="set-main">
        <h3>請給不同規格設置剩餘數量</h3>
        <ul>
          <!-- <li v-for="(item, index) in sortList" :key="index">
            <label for="">{{item.surplusDetial}}</label>
          </li> -->
          <li>
            <van-field v-model="number" type="number" label="不辣" placeholder="輸入剩餘數量" />
          </li>
          <li>
            <van-field v-model="number2" type="number" label="中辣" placeholder="輸入剩餘數量" />
          </li>
          <li>
            <van-field v-model="number3" type="number" label="香辣" placeholder="輸入剩餘數量" />
          </li>
        </ul>
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
          surplusDetial: [
            {
              formatName: '不辣',
              formatNumber: 323,
            },
            {
              formatName: '中辣',
              formatNumber: 323,
            },
            {
              formatName: '香辣',
              formatNumber: 323,
            },
          ],
        }

      ],
      currentPage: 0,
      isShow: false,
      isShowEmpty: false,
      isShowAll: false,
      foodName: '',
      number: 100,
      number2: 100,
      number3: 100,
      value: '',
    }
  },
  computed:{

  },
  components: {
    ManageTop,
    IuSearch
  },
  methods: {
    surplusSet(index){
      this.foodName = this.sortList[index].title
      this.isShow = !this.isShow
    },
    saleEmpty(){
      this.isShowEmpty = !this.isShowEmpty
    },
    setAll(){
      this.isShowAll = !this.isShowAll
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
.surplus-set{
  .set-main{
    text-align: left;
    ul{
      display: flex;
      li{
        .van-field__label{
          height: 50px;
          line-height: 50px;
        }
        .van-field__control{
          width: 100px;
        }
      }
    }
    
  }
}
.all-set{
  .van-cell{
    background: $iu-text-black;
    border-radius: 40px;
    color: #fff;
    font-size: 20px;
    padding-left: 30px;
  }
  .van-field__control{
    color: #fff
  }
}
</style>
