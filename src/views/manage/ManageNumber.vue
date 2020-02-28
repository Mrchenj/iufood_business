<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-right">
        <van-button icon="printer" type="info">導出所有桌子</van-button>
        <van-button icon="plus" type="primary" @click="addNumber()">增加桌位</van-button>
      </div>
    </ManageTop>
    <!-- 號碼列表 -->
    <div class="list-number">
      <ul>
        <li v-for="(item,index) in numberList" :key="index" >
          <span class="number-text">桌號：<b>{{item}}</b></span>
          <van-button icon="clear" type="transfer" @click="deleNumber(index)">刪除</van-button>
        </li>
      </ul>
    </div>
    <!-- 分頁 -->
    <van-pagination
      v-model="currentPage"
      :page-count="12"
      mode="simple"
    />
    <!-- 刪除桌號 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="delTitle"
    >
     <p>是否刪除桌號 <b>{{delItem}}</b></p>
    </van-dialog>
    <!-- 增加桌號 -->
    <van-dialog
      v-model="addShow"
      show-cancel-button
      :beforeClose="beforeClose"
      title="新增桌號"
    >
     <van-field v-model="value" placeholder="请输入桌號" />
    </van-dialog>
  </div>
</template>

<script>
import ManageTop from './childComps/manage-top'

export default{
  data(){
    return{
      numberList: [ '01','02','03','04','05','06','07','08','09','10','11','12', ],
      currentPage: 1,
      isShow: false,
      addShow: false,
      delItem: 0,
      value: 0,
    }
  },
  computed: {
    reverseSum() {
      return this.allSum.numberList();
    },
    delTitle(){
      return '刪除桌號' + this.delItem
    }
  },
  components: {
    ManageTop
  },
  methods: {
    deleNumber(index){
      this.delItem = this.numberList[index]
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    addNumber(){
      this.addShow = !this.addShow
    }
  },
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
.van-field__control{
  background: $iu-background-black
}
</style>
