<template>
    <aside class="iu-sidebar">
        <h2 class="iu-siderbar-title">{{title}}</h2>
        <van-sidebar v-model="activeKey" @change="getIndex">
            <van-sidebar-item v-for="(item , index) in sidebarMessage" :key="index" :class="item.sideClass" :title="item.sideTitle" :to="item.sideTo" />
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
  props: {
    title : String , 
    sidebarMessage: {
      type: Array,
      default(){
        return []
      }
    },
  },
  methods: {
    getIndex(index) {
      this.$emit('transferIndex',index);
    }
  },
};
</script>


<style lang="scss" scoped>
.iu-sidebar{
    text-align: center
}
</style>
