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
      value: ''
    };
  },
  props: ['searchTips'],
  methods: {
    onSearch(val) {
      
    },
    onCancel() {
      
    }
  }
};
</script>


<style lang="scss" scoped>
  .van-search{
    padding: 5px;
    border-bottom: 2px solid #bababa;
    .van-search__content{
      background: none;
    }
    .van-search__action{
      background: $iu-black;
      color: #fff;
      font-weight: bold;
      height: 40px;
      line-height: 42px;
      min-width: 80px;
      border-radius: 100px;
      text-align:center;
      font-size: 18px;
    }
  }


</style>
