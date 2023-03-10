import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 定义组件Home、About、Download；
const Home={
  template:'<div><h3>首页</h3><p>用Vue.js+Vue Router 创建单页应用，是非常简单的！</p></div>'
}
const About={
  template:'<div><h3>关于我们</h3><p>Vue Router 是Vue.js官方的路由管理器，它与Vue.js的核心深度集成，使构建单页面应用变得易如翻掌！</p></div>'
}
const Download={
  template:'<div><h3>资源下载</h3><p>Unpkg.com提供了基于npm的CDN链接，上面的链接会一直指向在npm发布的最新版本。</p></div>'
}

const routes=[
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/download', component: Download}
]

export default new Router({
  routes
})

