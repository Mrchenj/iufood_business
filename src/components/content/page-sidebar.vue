<template>
    <aside class="iu-sidebar">
        <h2 class="iu-siderbar-title">{{title}}</h2>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="item in sidebarMessage" v-bind:key="item.id" :class="item.sideClass" :title="item.sideTitle" :to="item.sideTo"  />
        </van-sidebar>
        <slot name="sidebar-bottom"></slot>
    </aside>
</template>

<script>
export default {
  name: 'pageSidebar',
  data() {
    return {
      activeKey: 0,
    };
  },
  props: ['title', 'sidebarMessage'],
  methods: {
  },
};
</script>


<style lang="scss" scoped>
.iu-sidebar{
    text-align: center
}
</style>
