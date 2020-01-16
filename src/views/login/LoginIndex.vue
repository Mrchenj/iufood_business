<template>
  <div >
    <button @click="loginAction" class="login_button"> 登录</button>
  </div>
</template>


<script>
export default {
  components: {

  },
  methods: {
    loginAction() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.login_button {
  background-color: $iu-oringe;
}
</style>
