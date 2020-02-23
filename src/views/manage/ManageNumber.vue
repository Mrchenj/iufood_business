<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop/>
    <!-- 號碼列表 -->
    <div class="list-number">
      <ul>
        <li v-for="(item,index) in numberList" :key="index" >
          <span class="number-text">桌號：<b>{{item}}</b></span>
          <van-button icon="clear" type="transfer">刪除</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ManageTop from './childComps/manage-top'

export default{
  data(){
    return{
      numberList: [ '2','2','2','2','2','2','2','2','2','2','2','2','2' ],
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
      padding: 15px;
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
