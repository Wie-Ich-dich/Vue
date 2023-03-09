<template>
  <div id="app">
    <h1>Vue Router 简易应用</h1>
    <p>
	<router-link to="/home">首页</router-link>
	<router-link to="/about">关于我们</router-link>
	<router-link to="/download">资源下载</router-link>
    </p>
    <router-view><router-view/>
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
div div {
  width:400px;
  height:150px;
  border:4px double #A0B0C0;
  margin:0 auto;
  text-indent 2em;
  text-align:left;
}  
</style>
