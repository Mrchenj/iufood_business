<template>
  <div class="page">
    <div class="iu-nav">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    <router-link to="/business/status">開業打烊</router-link>
    <router-link to="/business/time">營業時間設置</router-link>
    <router-view></router-view>

  </div>
</template>

<script>

</script>


<style lang="scss" scoped>

</style>
