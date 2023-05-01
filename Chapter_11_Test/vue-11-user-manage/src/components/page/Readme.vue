<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i>用户管理系统简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ms-doc">
      <h3>用户登录/注册管理系统</h3>
      <article>
        <h1>User Login & Register Manage System</h1>
        <ul>
          <li><p>前端技术栈：Vue.js 2.x、Vue-Router、Element UI、webpack</p></li>
          <li><p>后端技术栈：Node.js、Express框架、HTTP库axios</p></li>
          <li><p>数据库及管理工具：Mysql、vscode-database插件</p></li>
        </ul>
        <h2>前言</h2>
        <ul>
          <li>
            <p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。</p>
          </li>
          <li>
            <p>Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue</p>
          </li>
          <li>
            <p>使用WebStorage(sessionStorage)存储会话信息、如用户名、用户信息等；</p>
          </li>
        </ul>
        <h2>功能</h2>
        <ul>
          <li>登录/注销</li>
          <li>查看个人信息</li>
          <li>修改个人信息</li>
          <li>修改个人密码</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style scoped>
.crumbs {
  margin: 5px 5px;
}
.ms-doc {
  width: 100%;
  max-width: 980px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  padding: 50px 0;
  margin: 0 auto;
  margin-bottom: 50px;
}
.ms-doc h3 {
  padding: 9px 10px 10px;
  margin: 0;
  font-size: 14px;
  line-height: 17px;
  background-color: #f5f5f5;
  border: 1px solid #d8d8d8;
  border-bottom: 0;
  border-radius: 3px 3px 0 0;
}
.ms-doc article {
  padding: 45px;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ms-doc article h1 {
  font-size: 32px;
}
.ms-doc article h2 {
  font-size: 24px;
}
.ms-doc article ul li {
  font-size: 16px;
}
</style>