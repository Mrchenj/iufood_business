<template>
  <van-search
    shape="round"
    v-model="value"
    show-action
    :placeholder="searchTips"
    background="none"
    @search="onSearch"
    class="iu-search"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>

<script>
export default {
  name: 'homeHeader',
  data() {
    return {

    };
  },
  props: ['searchTips'],
};
</script>


<style lang="scss" scoped>
  .van-search{
    padding: 5px;
    border-bottom: 2px solid #bababa;
    .van-search__content{
      background: none;
      .van-icon{
        font-size: 20px
      }
    }
  }
</style>
