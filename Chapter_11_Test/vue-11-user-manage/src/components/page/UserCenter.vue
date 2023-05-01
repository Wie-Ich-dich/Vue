<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item label="用户名称">
          <el-input v-model="form.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="账号名称">
          <el-input v-model="form.account" readonly></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" readonly></el-input>
        </el-form-item>
        <el-form-item label="手机" >
          <el-input v-model="form.phone" readonly></el-input>
        </el-form-item>
        <el-form-item label="身份证" >
          <el-input v-model="form.card" readonly></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="24">
            <el-date-picker type="date" v-model="form.birth" style="width: 100%;" readonly></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" class="select-sex" readonly>
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="onCancel()">返回首页</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
          name: '',
          account: '',
          email: '',
          phone: '',
          card: '',
          birth: '',
          sex: ''
        },
    }
  },
  methods: {
    getUserData(){
      const self=this;
      let username=sessionStorage.getItem('ms-username');
      self.$http.get('/api/user/getUser',{params:{name:username}}).then(function(response){
        console.log(response.data[0]);
        let result=response.data[0];
        self.form.name=result.username;
        self.form.account=result.account;
        self.form.email=result.email;
        self.form.phone=result.phone;
        self.form.card=result.card;
        self.form.birth=new Date(result.birth).toLocaleDateString();
        self.form.sex=result.sex;
      }).catch(function(error){
        console.log(error);
      })
    },
    onCancel(){
      this.$router.push('/readme')
    }
  },
  mounted(){
    this.getUserData();
  }
}
</script>

<style scoped>
.crumbs {
  margin: 5px 5px;
}
.userContent {
  width: 500px;
  margin: 60px auto 0;
}
.select-sex {
  width: 400px;
}
.el-form-item {
  margin-bottom: 10px;
  color: #606266;
}
</style>