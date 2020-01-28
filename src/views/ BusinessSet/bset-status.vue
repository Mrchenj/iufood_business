<template>
  <div class="home">

    營業狀態

  </div>
</template>

<script>


</script>


<style lang="scss" scoped>

.home{
  min-height: 100%;
  position: relative;
  font-size: 16px;
  @include iu-bg;
}

.iu-nav{
  background: rgba(0, 0, 0, 0.2);
  .van-nav-bar{
    background: none;
    max-width: 1200px;
    height: 65px;
    line-height: 65px;
    margin: 0 auto;
    border: 0;
    color: $iu-white;
    font-weight: bold;
  }
  .van-hairline--bottom::after{border: 0}
}

.van-hairline--top::after{border: 0}


</style>
