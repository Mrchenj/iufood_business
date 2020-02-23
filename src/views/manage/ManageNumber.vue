<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-right">
        <van-button icon="printer" type="danger">導出所有桌子</van-button>
        <van-button icon="plus" type="primary">增加桌位</van-button>
      </div>
    </ManageTop>
    <!-- 號碼列表 -->
    <div class="list-number">
      <ul>
        <li v-for="(item,index) in numberList" :key="index" >
          <span class="number-text">桌號：<b>{{item}}</b></span>
          <van-button icon="clear" type="transfer">刪除</van-button>
        </li>
      </ul>
    </div>
    <!-- 分頁 -->
    <van-pagination
      v-model="currentPage"
      :page-count="12"
      mode="simple"
    />
  </div>
</template>

<script>
import ManageTop from './childComps/manage-top'

export default{
  data(){
    return{
      numberList: [ '01','02','03','04','05','06','07','08','09','10','11','12', ],
      currentPage: 1,
    }
  },
  components: {
    ManageTop
  }
}
</script>

<style lang="scss" scoped>

.list-number{
  ul{
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    li{
      margin-right: 2%;
      display: flex;
      justify-content: space-between;
      background: #fff;
      width: 46%;
      margin-bottom: $iu-gap;
      padding: 10px 15px;
      align-items:center;
      .number-text{
        font-size: 20px;
        b{
          color: $iu-orange;
        }
      }
    }
    li:nth-child(2n){
      margin-right: 0;
    }
  }
}
</style>
