<template>
  <div class="main-head">
    <div class="m-h-left">
      <slot name="h-left">
       
      </slot>
    </div>
    <div class="m-h-right">
        <slot name="h-right">
        
        </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'manageTop',
  data() {
    return {
      
    };
  },
  components: {
    
  }
};
</script>


<style lang="scss" scoped>
.main-head{
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid $iu-border-gary;
  padding-bottom: 10px;
  margin-bottom: $iu-gap;
  .m-h-left{
    .van-search{
      border: 0;
      padding: 0;
    }
  }
  .m-h-right{
    .van-button{
      height: 40px;
      line-height: 40px;
      .van-button__icon{margin-top: -2px;}
    }
    .van-button--info{
      margin-right: $iu-gap;
      border-color: $iu-black;
      background:$iu-black
    }
  }
}
</style>
