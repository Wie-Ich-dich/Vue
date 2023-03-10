<template>
  <div id="app">
    <div id="top">Top区域，设置背景</div>
    <div id="left">
      <router-link to="/shoes">国潮精选</router-link>
      <router-link to="/women_dress">大牌女装</router-link>
      <router-link to="/men_clothing">大牌男装</router-link>
      <router-link to="/accessories">时尚配饰</router-link>
    </div>
    <div id="right"><router-view>这里没什么东西</router-view></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
#top {
  border-bottom: 2px solid black;
  height: 20vh;
}
#left {
  position: absolute;
  left: 0px;
  width: 30%;
  display: flex;
  flex-direction: column;
  /* color: white; 这个不知道为什么没有用，后面的有用 */
}
#right {
  position: absolute;
  right: 0px;
  width: 70%;
}
a {
  /* color:white; */
  text-decoration: none;
}
</style>
