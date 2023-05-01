<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>修改个人密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="密码" prop="pass">
          <el-input v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="form.checkPass" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">确定</el-button>
          <el-button @click="onCancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    var validatePass=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请输入密码'));
        }else{
          if(this.form.checkPass!==''){
            this.$refs.form.validateField('checkPass');//这句看不懂；
          }
          callback();
        }
      };
      var validatePass2=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请再次输入密码'));
        }else if(value !== this.form.pass){
          callback(new Error('两次输入的密码不一致'));
        }else{
          callback();
        }
      };
      return {
        form: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        }
      }
  },
  methods: {
    onSubmit(formName){
      const self=this;
      let formData={
        account:sessionStorage.getItem('ms_userId'),
        pass:self.form.pass,
        checkPass:self.form.checkPass
      };
      self.$refs[formName].validate((valid)=>{
        if(valid){
            self.$http.post('/api/user/modifyPassword',formData).then((response)=>{
              console.log(response);
              self.$router.push('/login');
            }).catch(function(error){
              console.log(error);
            })
        }else{
          console.log('error submit!!');
          return false;
        }
      });
    },
    onCancel(){
      this.$router.push('/userCenter')
    }
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
.el-form-item {
  margin-bottom: 15px;
  color: #606266;
}
</style>