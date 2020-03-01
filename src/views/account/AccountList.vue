<template>
  <div class="finance">
    <div class="form-header line-between">
      <div class="header-left">
      </div>
      <div class="header-right">
      <van-button type="info" @click="goto()"><van-icon name="plus" />添加店員帳號</van-button>
      </div>
    </div>
    <div class="form-main">
      <table>
        <thead>
          <tr>
            <th v-for="(item, index) in financeType" :key="index" >{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in financeDate" :key="index" >
            <td>{{item.number}}</td>
            <td>{{item.name}}</td>
            <td>{{item.account}}</td>
            <td>{{item.state}}</td>
            <td>{{item.time}}</td>
            <td>
              <van-button plain type="primary" @click="gotoSet()">查看/編輯</van-button>
              <van-button plain type="delete" @click="deleAccount(index)">刪除</van-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="form-footer line-between">
      
      <!-- 分頁 -->
      <van-pagination
        v-model="currentPage"
        :page-count="12"
        mode="simple"
      />
    </div>
    <!-- 刪除帳號 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="delTitle"
    >
     <p>是否刪除桌號 <b>{{delName}}</b></p>
    </van-dialog>
  </div>
</template>

<script>
import PageHeader from 'coms/content/page-header';

export default {
  data() {
    return {
      titleMsg: '營業設置',
      memberMsg: '員工編號112',
      totalAmount: '545,248',
      financeType: ['序列號', '店員名', '帳號', '狀態', '創建時間', '操作'],
      financeDate: [
        {
          number: 1,
          name: '李冰冰',
          account: 5625685452,
          state: '正常',
          time: 20190101
        }, 
        {
          number: 1,
          name: '李冰冰',
          account: 5625685452,
          state: '正常',
          time: 20190101
        }, 
        {
          number: 1,
          name: '李冰冰',
          account: 5625685452,
          state: '正常',
          time: 20190101
        }, 
        {
          number: 1,
          name: '李冰冰',
          account: 5625685452,
          state: '正常',
          time: 20190101
        }
      ],
      currentPage: 0,
      delName: '',
      isShow: false,
    };
  },
  computed: {
    delTitle(){
      return '刪除帳號' + this.delName
    }
  },
  components: {
    PageHeader,
  },
  methods: {
    onClickRight() {
      
    },
    goto(){
      this.$router.push('/account/add')
    },
    gotoSet(){
      this.$router.push('/account/set')
    },
    deleAccount(index){
      this.delName = this.financeDate[index].name
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.finance{
  width: 100%;
}
.form-header{
  align-items: center;
  height: 45px;
  line-height: 45px;
  margin-top: 20px;
  width: 100%;
  .option-food{
    display: flex;
  }
  .header-left{
    display: flex;
    flex: 1;
    .option-food{
      .van-dropdown-menu__item{
        border:1px solid $iu-border-gary;
      }
      .van-dropdown-item{
        top: 10px!important;
      }
    }
  }
  .header-right{
    .van-button{
      min-width: 200px;
      .van-icon{
        vertical-align: -2px;
        margin-right: 5px;
      }
    }

  }
}

.form-main{
  td{
    padding-top: 5px;
    vertical-align: center;
  }
  th:last-child{
    width: 320px;
  }
  .van-button{
    margin: 0 10px;
  }
}


.form-footer{
  margin-top: 20px;
  .van-button--info{
    min-width: 250px;
  }
  .van-pagination{
    margin-top: 0;
  }
}

</style>
