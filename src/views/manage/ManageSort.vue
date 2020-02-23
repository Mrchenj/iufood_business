<template>
  <div class="manage-main">
    <!-- 頂部 -->
    <ManageTop />

    <!-- 食物編輯列表 -->
    <van-sidebar v-model="activeKey" >
      <van-sidebar-item v-for="value in menuList" :key="value.key" :title="value.title" />
    </van-sidebar>
  </div>
</template>

<script>

import ManageTop from './childComps/manage-top'

export default{
  data(){
    return{
      searchTipsMsg: '請輸入菜的ID或者菜名',
      activeKey: 0,
      menuList: [
        {
          title: '本店推薦',
          key: '0',
        },
        {
          title: '刺身',
          key: '1',
        },
        {
          title: '火鍋',
          key: '3',
        },
        {
          title: '粥',
          key: '4',
        },
      ],
    }
  },
  components: {
    ManageTop,
  }
}
</script>


<style lang="scss" scoped>
    .van-sidebar{
      .van-sidebar-item{
        border:0px;
        border-bottom: 1px solid $iu-border-gary;
        background: none;
        padding: 15px;
        font-weight: bold
      }
      .van-sidebar-item--select{
        color: $iu-orange;
        .van-sidebar-item__text:before{
          content: "\e611"
        }
      }
    }
</style>
