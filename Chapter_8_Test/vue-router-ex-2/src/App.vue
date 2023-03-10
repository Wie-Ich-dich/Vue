<template>
  <div id="app">
    <div id="topbar">
      <router-link to="/home">首页</router-link>
      <router-link to="/advantage">平台优势</router-link>
      <router-link to="/product">广告类型</router-link>
      <router-link to="/case">成功案例</router-link>
      <a href="http://e.baidu.com/gongyi/index.html">公益推广</a>
      <router-link to="/help">了解更多</router-link>
    </div>
    
    <router-view>这里显示图片</router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 5px 10px;
  text-decoration: none;
}
</style>
