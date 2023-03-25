<template>
  <div id="contain">
    <div class="btns">
      <img src="../assets/img/profile.jpg" alt="logo"><br>
      <h3>友联 **连接你我他！</h3>
      <!-- Router导航 -->
      <router-link to="/home/register" class="btn">注册</router-link>
      <router-link to="/home/login">登录</router-link>
    </div>
    <!-- Router出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import '../assets/css/app.css';
</style>
