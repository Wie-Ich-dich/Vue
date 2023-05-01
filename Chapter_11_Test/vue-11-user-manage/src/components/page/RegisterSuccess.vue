<template>
  <div>
    <div class="crumbs crumbs-register">
      <el-breadcrumb separator="/" class="register-title">
        <el-breadcrumb-item><i class="el-icon-setting"></i>注册成功</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <div class="edit-success">
        <div class="show-success">
          <i class="el-icon-check"></i>&nbsp;&nbsp;<span>恭喜您，注册成功！</span>
        </div>
        <div class="click-login">
          <a href="#" @click="handleCommand()">跳转登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{}
    }
  },
  methods: {
    handleCommand(){
      this.$router.push('./login');
    }
  }
}
</script>

<style scoped>
.crumbs {
  margin-bottom: 0;
}
.crumbs-register {
  background-color: #324157;
  height: 50px;
  line-height: 50px;
}
.register-title {
  line-height: 50px;
  margin: 0 auto;
  width: 100px;
  font-size: 16px;
}
.userContent {
  width: 100%;
  margin: 0 auto;
  height: 500px;
}
.edit-success {
  width: 500px;
  margin: 0 auto;
  position: relative;
}
.edit-success .show-success {
  position: absolute;
  margin-left: -190px;
  left: 50%;
  top: 30px;
}
.click-login {
  font-size: 20px;
  position: absolute;
  margin-left: 100px;
  left: 50%;
  top: 91px;
}
.edit-success i {
  color: #67C23A;
}
.edit-success i, .edit-success span {
  font-size: 40px;
  font-family: Microsoft YaHei;
}

</style>