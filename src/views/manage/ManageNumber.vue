<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop>
      <div slot="h-right">
        <van-button icon="printer" type="info" >導出所有桌子</van-button>
        <van-button icon="plus" type="primary" @click="addNumber()">增加桌位</van-button>
      </div>
    </ManageTop>
    <!-- 號碼列表 -->
    <div class="list-number">
      <ul>
        <li v-for="(item,index) in numberList" :key="index" >
          <span class="number-text">桌號：<b>{{item}}</b></span>
          <div>
            <van-button icon="setting" type="transfer" @click="exportNumber(index)">修改</van-button>
            <van-button icon="clear" type="transfer" @click="deleNumber(index)">刪除</van-button>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分頁 -->
    <van-pagination
      v-model="currentPage"
      :page-count="12"
      mode="simple"
    />
    <!-- 刪除桌號對話框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="delTitle"
    >
     <p>是否刪除桌號 <b>{{delItem}}</b></p>
    </van-dialog>
    <!-- 增加桌號對話框 -->
    <van-dialog
      v-model="addShow"
      show-cancel-button
      :beforeClose="beforeClose"
      title="新增桌號"
      className="add-number"
    >
     <van-field v-model="value" label="桌號" placeholder="请输入桌號" />
    </van-dialog>
    <!-- 編輯桌號對話框 -->
    <van-dialog
      v-model="exportShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="exportTitle"
      className="export-number"
    >
     <div class="export-line">
       <label>更改桌號</label>
       <div class="line-tent">
         <van-field v-model="value" placeholder="请输入桌號" />
       </div>
     </div>
     <div class="export-line">
       <label>二維碼</label>
       <div class="line-tent">
         <img class="code" src="https://img.yzcdn.cn/vant/ipad.jpeg" >
       </div>
     </div>
      <div class="export-line">
       <label>操作</label>
       <div class="line-tent">
         <van-button type="primary">導出信息</van-button>
       </div>
     </div>
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
      exportShow: false,
      delItem: 0,
      value: 0,
      number: 0,
    }
  },
  computed: {
    reverseSum() {
      return this.allSum.numberList();
    },
    delTitle(){
      return '刪除桌號' + this.delItem
    },
    exportTitle(){
      return '桌號' + this.number
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
    },
    exportNumber(index){
      this.number = this.numberList[index]
      this.exportShow = !this.exportShow
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
      div{
        .van-button{
          margin: 0 5px;
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
.add-number{
  .van-cell{
    background: $iu-text-black;
    border-radius: 40px;
    color: #fff;
    font-size: 20px;
    padding-left: 30px;
  }
}
.export-number{
  .export-line{
    display: flex;
    width: 100%;
    label{
      width: 130px;
    }
    .code{
      width: 170px;
      height: 170px;
    }
    .van-button{
      min-width: 150px;
    }
  }
}
</style>
