<template>
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
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
      </div>
      <div class="sort-main">
        <div class="sort-m-list">
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
        <div class="sort-footer">
          <van-button type="primary" native-type="submit" >保存</van-button>
          <van-button type="info" @click="backtoList()">取消</van-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import iuSearch from 'coms/common/iu-search';

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
    iuSearch
  },
  methods: {
    backtoList(){
      this.$router.push('/manage/sort/list');
    }
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

.food-item-menu{

  .list{
    margin-top: 15px;
    height: calc(100% - 400px);
    overflow: hidden;
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
    justify-content: center;
    align-items: center;
  }
  .sort-main{
    background: $iu-white;
    padding: 10px;
    height: calc(100% - 90px);
    border-radius: 10px;
    position: relative;
    .sort-m-list{
      height: calc(100% - 290px);
      overflow: hidden;
    }
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
    .sort-footer{
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      .van-button{
        margin: 0 20px;
      }
    }
  }
}
</style>
