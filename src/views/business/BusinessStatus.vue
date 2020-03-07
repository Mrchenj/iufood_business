<template>
  <div class="tent-main">
    <h3 class="status-title">當前狀態：<b>{{status}}</b></h3>
    <van-grid :column-num="2" class="operate-set">
      <van-grid-item
        v-for="(value,index) in menuList"
        :key="index"
        :icon="value.icon"
        :text="value.text"
        @click="setStatus(index)"
      />
    </van-grid>

    <!-- 修改營業狀態对话框 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      :beforeClose="beforeClose"
      :title="dialogTitle"
    >
      <div class="">
        是否將營業狀態設置為<b>{{status}}</b>
      </div>
    </van-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      status: '',
      menuList: [
        {
          text: '開門營業',
          icon: 'stopen',
        },
        {
          text: '打烊',
          icon: 'stclose',
        },
      ],
      dialogTitle: '修改營業狀態',
      isShow: false,
    };
  },
  computed: {
    finallyStatus(){
      
    }
  },
  methods: {
    setStatus(index){
      this.status = this.menuList[index].text
      this.isShow = !this.isShow
    },
    beforeClose(action, done){
      if (action === 'confirm') {
        
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
  }
};
</script>


<style lang="scss" scoped>
/*
营业开门打烊设置
*/
.status-title{
  text-align: center;
  font-size: 20px;
  b{color: $iu-orange;}
} 

.van-dialog__content{
  b{
    color: $iu-orange;
    margin-left: 10px;
  }
}

</style>
