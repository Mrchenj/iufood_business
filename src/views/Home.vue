<template>
  <div class="home">
    <h1> 首页 </h1>
    <button @click="loginAction"> 登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {

  },
  methods: {
    loginAction() {
      this.$router.push('/login');
    },
  },
};
</script>
