<template>
  <div class="page">
    <PageHeader :title="titleMsg" :member="memberMsg" />
    <div class="iu-page-main">
     <div class="finance">
       <div class="form-header line-between">
         <div class="header-left">
            <!-- 菜品 -->
            <div class="option-food">
              <label>菜品:</label>
              <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" overlay="false" />
                <van-dropdown-item v-model="value2" :options="option2" overlay="false" />
              </van-dropdown-menu>
            </div>
            <div class="option-date">
              <label>日期:</label>
            </div>
         </div>
         <div class="header-right">
           <div class="total-amount">
             總金額：{{totalAmount}}
           </div>
         </div>
       </div>
       <div class="form-main">
          <table>
            <thead>
              <tr>
                <th>序列號</th>
                <th>菜名</th>
                <th>金額</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in financeDate" :key="index">
                <td>{{item.number}}</td>
                <td>{{item.title}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.date}}</td>
              </tr>
            </tbody>
          </table>
       </div>
       <div class="form-footer line-between">
          <van-button type="info">導出所查數據</van-button>
          <!-- 分頁 -->
          <van-pagination
            v-model="currentPage"
            :page-count="12"
            mode="simple"
          />
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import PageHeader from 'coms/content/page-header';

export default {
  data() {
    return {
      titleMsg: '營業設置',
      memberMsg: '員工編號112',
      // totalAmount: '545,248',
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部菜品', value: 0 },
        { text: '川菜', value: 1 },
        { text: '粵菜', value: 2 }
      ],
      option2: [
        { text: '香辣火鍋', value: 'a' },
        { text: '香辣火鍋', value: 'b' },
        { text: '香辣火鍋', value: 'c' },
      ],
      financeDate: [
        {
          number: '502',
          title: '香辣火鍋',
          amount: 5414,
          date: '20160502',
        }, 
        {
          number: '502',
          title: '香辣火鍋',
          amount: 5414,
          date: '20160502',
        }, 
        {
          number: '502',
          title: '香辣火鍋',
          amount: 5414,
          date: '20160502',
        }, 
        {
          number: '502',
          title: '香辣火鍋',
          amount: 5414,
          date: '20160502',
        }
      ],
      currentPage: 0,
    }
  },
  computed: {
    totalAmount: function(){
      let result = 0
      for(let financedate of this.financeDate){
        result += financedate.amount
      }
      return result
    }
  },
  components: {
    PageHeader,
  },
  methods: {
    onClickRight() {
      
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
    .total-amount{
      background: $iu-orange;
      color: #fff;
      border-radius: 100px;
      padding: 0 20px;
      font-size: 20px;
      font-weight: bold;
    }

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
