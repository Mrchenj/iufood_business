<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <div class="main-head">
      <div class="m-h-left"></div>
      <div class="m-h-right">
          <van-button icon="printer" type="danger">導出所有桌子</van-button>
          <van-button icon="plus" type="primary">增加桌位</van-button>
      </div>
    </div>
    <!-- 號碼列表 -->
    <div class="list-number">
      <ul>
        <li v-for="(item,index) in numberList" :key="index" >
          <span>桌號：{{item}}</span>
          <van-button icon="clear" type="transfer">刪除</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      numberList: [ '2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2' ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-head{
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid $iu-border-gary;
  padding-bottom: 10px;
  .m-h-left{

  }
  .m-h-right{
    .van-button{
      height: 40px;
      line-height: 40px;
    }
    .van-button--danger{
      margin-right: $iu-gap;
      border-color: $iu-black;
      background:$iu-black
    }
  }
}
.list-number{
  ul{
    li{
      display: flex;
      justify-content: space-between;
      background: #fff;
    }
  }
}
</style>
