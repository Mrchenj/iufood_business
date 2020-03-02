<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-left">
        <iuSearch :searchTips="searchTipsMsg" />
      </div>
      <div slot="h-right">
        <van-button icon="plus" type="primary" @click="onClick">新增食物</van-button>
      </div>
    </ManageTop>
    <!-- 食物編輯列表 -->
    <div class="list-food">
      <ul>
        <li v-for="(item,index) in listFood" :key='index'>
          <van-card
            :price="item.foodPrice"
            :title="item.foodTitle"
            :thumb="item.foodImage"
          >
            <div slot="desc" class="van-card__desc">
              簡約描述：{{item.foodDescri}}
            </div>
            <div slot="tags" class="van-card__tag" >
              <van-tag plain type="danger">{{item.foodSpec}}</van-tag>
            </div>
            <div slot="footer">
              <van-button type="edit">編輯</van-button>
              <van-button size="delete" @click="deleteFood(index)">刪除</van-button>
            </div>
          </van-card>
        </li>
      </ul>
    </div>
    <!-- 分頁 -->
    <van-pagination
      v-model="currentPage"
      :page-count="12"
      mode="simple"
    />
    <!-- 刪除食物對話框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="delTitle"
    >
     <p>是否刪除食物 <b>{{delItem}}</b></p>
    </van-dialog>
  </div>
</template>

<script>
import IuSearch from 'coms/common/iu-search'

import ManageTop from '../childComps/manage-top'

export default{
  data(){
    return{
      searchTipsMsg: '請輸入菜的ID或者菜名',
      listFood: [
        {
          foodTitle: '壽司套餐Kebab壽司套餐Kebab',
          foodDescri: '小炒牛肉 牛肉、干红辣椒、姜、蒜、青椒、酱油、生抽、胡椒粉、生粉、花椒、料酒 ...',
          foodSpec: '大小、辣度、規格1、規格2',
          foodPrice: '12',
          foodImage: 'https://img.yzcdn.cn/vant/ipad.jpeg'
        },
        {
          foodTitle: '壽司套餐Kebab壽司套餐Kebab',
          foodDescri: '小炒牛肉 牛肉、干红辣椒、姜、蒜、青椒、酱油、生抽、胡椒粉、生粉、花椒、料酒 ...',
          foodSpec: '大小、辣度、規格1、規格2',
          foodPrice: '12',
          foodImage: 'https://img.yzcdn.cn/vant/ipad.jpeg'
        },
        {
          foodTitle: '壽司套餐Kebab壽司套餐Kebab',
          foodDescri: '小炒牛肉 牛肉、干红辣椒、姜、蒜、青椒、酱油、生抽、胡椒粉、生粉、花椒、料酒 ...',
          foodSpec: '大小、辣度、規格1、規格2',
          foodPrice: '12',
          foodImage: 'https://img.yzcdn.cn/vant/ipad.jpeg'
        }
      ],
      currentPage: 1,
      delItem: '',
      isShow: false,
    }
  },
  components: {
    ManageTop,
    IuSearch,
  },
  computed: {
    delTitle(){
      return '刪除食物';
    }
  },
  methods: {
    onClick() {
     this.$router.push('/manage/food/add');
    },
    deleteFood(index){
      this.delItem = this.listFood[index].foodTitle;
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-food{
    ul{
      li{
        margin-bottom: 20px;
      }
    }
  }
  .van-card{
    border-radius: 10px;
    padding: 15px;
    display: flex;
    .van-card__thumb{
      width: 150px;
      height: 150px;
      border: 1px solid $iu-border-gary;
      border-radius: 10px;
      margin-right: 15px;
    }
    .van-card__content{
      flex: 1;
      .van-card__title{
        font-size: 20px;
        max-height: 50px;
        line-height: 40px
      }
      .van-card__desc{
        font-size: 16px;
        max-height: 100px;
        line-height: 22px;
      }
      .van-card__tag{
        position: relative;
        top: 8px;
      }
      .van-card__price{
        font-size: 20px;
        color: $iu-orange;
        .van-card__price-integer{
          font-size: 24px
        }
      }
    }
    .van-card__footer > div{
      position: relative;
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 260px;
      margin-left: 10px;
    }
  }
</style>
