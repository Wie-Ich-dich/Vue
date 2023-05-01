<template>
  <div class="header">
    <div class="logo">通用用户管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img v-if="headerImg" class="user-logo" src="../../../static/img/man.png" alt="manlogo">
          <img v-else class="user-logo" src="../../../static/img/woman.png" alt="womanlogo">
          <h1>{{ username }}</h1>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'Chen Weijie'
    }
  },
  computed: {
    username(){
      let username=sessionStorage.getItem('ms_username');
      return username ? username : this.name;
    },
    headerImg(){
      let usersex=sessionStorage.getItem('user_sex');
      return usersex==='man' ? true : false;
    }
  },
  methods: {
    handleCommand(command){
      if(command=='loginout'){
        sessionStorage.removeItem('ms_username');
        sessionStorage.removeItem('ms_userId');
        sessionStorage.removeItem('ms_user');
        sessionStorage.removeItem('user_sex');
        sessionStorage.login=0;
        this.$router.push('/login');
      }else if(command=='userCenter'){
        this.$router.push('/userCenter')
      }
    },
  }
}
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  background-color: #555;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0px;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.user-info h1 {
  padding-top: 8px;
  margin: 0;
}
el-dropdown-menu el-dropdown-item {
  text-align: center;
}
</style>