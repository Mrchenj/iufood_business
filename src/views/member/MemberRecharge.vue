<template>
  <div class="recharge">
    <!-- 有效期 -->
    <div class="expiration-date">
      帳號有效期至<b>{{expirationDate}}</b>
    </div>
    <!-- 套餐列表 -->
    <div class="package-list">
      <h2>選擇續費類型</h2>
      <ul class="list-tent">
        <li v-for="(item,index) in packageList" :key="index" :class="{active: index === currenIndex}" @click="itemClick(index)" >
          <b>{{item.packageName}}</b>
          <span>{{item.packagePrice}}</span>
          <em>{{item.packageDiscount}}</em>
        </li>
      </ul>
      <p>到期按每年300自動續費，可隨時取消</p>
      <van-button type="primary" native-type="submit" >保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expirationDate: '2019/03/05',
      packageList: [
        {
          packageName: '連續包年',
          packagePrice: '20,000',
          packageDiscount: '省200',
        },
        {
          packageName: '連續包季',
          packagePrice: '20,000',
          packageDiscount: '省200',
        },
        {
          packageName: '連續包月',
          packagePrice: '20,000',
          packageDiscount: '省200',
        },
        {
          packageName: '12個月',
          packagePrice: '20,000',
          packageDiscount: '省200',
        },
        {
          packageName: '3個月',
          packagePrice: '20,000',
          packageDiscount: '省200',
        },
        {
          packageName: '1個月',
          packagePrice: '20,000',
          packageDiscount: '省200',
        }
      ],
      currenIndex: 0 ,
    };
  },
  methods: {
    itemClick(index){
      this.currenIndex = index;
    }
  }
};
</script>


<style lang="scss" scoped>
.recharge{
  width: 740px;
  margin: 40px auto;
}
.expiration-date{
  margin: 0 auto;
  max-width: 740px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background: #f2f2f2;
  border-radius: 100px;
  font-size: 20px;
  b{
    color: $iu-orange;
    margin-left: 10px
  }
}
.package-list{
  text-align: left;
  .list-tent{
    display: flex;
    flex-grow: 4;
    flex-wrap: wrap;
    li{
      background: #e0e0e0;
      height: 160px;
      width: 160px;
      border-radius: 10px;
      margin: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 20px;
      cursor: pointer;
      b{
        font-size: 22px;
        margin-bottom: 10px;
      }
      span{
        font-size: 30px;
        margin-bottom: 10px;
      }
      em{
        font-style: normal;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        background: #efefef;
      }
    }
    li.active{
      background: $iu-orange;
      color:#fff
    }
  }
}
</style>
