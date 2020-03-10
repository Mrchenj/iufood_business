<template>
  <div class="ordered-menu">
    <Scroll>
      <ul>
        <li>
          <van-card
            price="2.00"
            origin-price="2.00"
            desc="描述信息"
            title="商品标题"
          >
            <div slot="footer">
              <van-checkbox v-model="checked"></van-checkbox>
              <van-stepper v-model="value" min="1" max="8" />
            </div>
          </van-card>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'coms/common/scroll/Scroll'
export default {
  name: 'OrderedMenu',
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
.ordered-menu{
  background: $iu-white;
  padding: 20px;
  ul{
    li{
      border-bottom:1px solid $iu-border-gary;
    }
  }
  .van-card{
    display: flex;
    padding:0;
    padding-left: 35px;
    background: none;
    .van-card__header{
      flex: 1;
      padding-right: 15px;
      .van-card__title{
        font-size: 18px;
        line-height: 20px;
        height: 40px;
        overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap;
      }
      .van-card__desc{
        font-size: 16px;
      }
      .van-card__content{
        flex-direction: row;
        padding-right: 10px;
        min-height: 70px;
        div:first-child{
          color: $iu-orange;
          width: auto;
        }
        .van-card__bottom{
          display: flex;
          flex-direction: column;
          .van-card__price,.van-card__price-currency,.van-card__price-integer{
            font-size: 22px;
          }
          .van-card__origin-price{
            font-size: 20px;
            margin-top: 10px;
          }
        }
      }
    }
    .van-card__footer{
      width: 100px;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;     /* 垂直居中 */
      .van-checkbox{
        position: absolute;
        left: 0;
      }
    }
  }
}
.scroll{
  height: calc(100vh - 180px);
  overflow: hidden;
}
</style>
