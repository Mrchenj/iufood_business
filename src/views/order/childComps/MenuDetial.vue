<template>
  <div class="menu-detail" >
    <Scroll class="scroll">
      <ul>
        <li v-for="(item, index) in attribute" :key="index">
          <div class="food-inf">
            <b class="food-name">{{item.name}}</b>
            <span class="food-number">編號:{{item.number}}</span>
            <span class="food-cprice">{{unit}}{{item.currentPrice}}</span>
            <span class="food-oprice">{{unit}}{{item.originalPrice}}</span>
            <van-button type="default" class="btn-join" @click="addFood(index)">加入訂單</van-button>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'coms/common/scroll/Scroll'
export default {
  name: 'MenuDetial',
  props: ['unit','attribute'],
  data() {
    return {
      
    };
  },
  components: {
    Scroll,
  }
};
</script>


<style lang="scss" scoped>
.menu-detail{
  margin-left: 15px;
  flex: 1;
  padding-right: 10px;
  .food-inf{
    background: $iu-white;
    text-align: left;
    border-radius: $iu-gap/2;
    padding: 15px;
    position: relative;
    span,b{
      display: block
    }
    .food-name{
      font-size: 18px;
      max-height: 50px;
      margin-bottom: 5px;
      color: $iu-text-black;
    }
    .food-number{
      color: $iu-text-gary;
      margin-bottom: 5px;
    }
    .food-cprice{
      font-size: 22px;
      font-weight: bold;
      color: $iu-orange;
      margin-bottom: 5px;
    }
    .food-oprice{
      display: inline-block;
      padding: 0 5px;
      position: relative;
      text-decoration:line-through;
      color: $iu-text-gary;
    }
    .van-button--default{
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
    .btn-join{
      height: 38px;
      line-height: 38px;
      font-size: 16px;
      color: $iu-text-black;
    }
  }
  ul li{
    margin-top: 15px;
  }
  ul li:first-child{
    margin-top: 0;
  }
}
.scroll{
  height: calc(100vh - 180px);
  overflow: hidden;
}
</style>
