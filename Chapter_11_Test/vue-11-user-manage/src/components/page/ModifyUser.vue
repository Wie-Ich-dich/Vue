<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>修改个人信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="账号名称" prop="account">
          <el-input v-model="form.account" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="card">
          <el-input v-model="form.card" placeholder="请输入身份证号"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" value-format="yyyy-MM-dd" style="width: 100%;" :picker-options="pickerOptions"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别" class="select-sex">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateUserData('form')">确定</el-button>
          <el-button @click="onCancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Util from '../../utils/utils';
export default{
  data(){
      var validateEmail=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请输入邮箱'));
        }else if(!Util.emailReg.test(value)){
          callback(new Error('请输入正确的邮箱'));
        }else{
          callback();
        }
      };
      var validatePhone=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请输入手机号'));
        }else if(!Util.phoneReg.test(value)){
          callback(new Error('请输入正确的手机号'));
        }else{
          callback();
        }
      };
      var validateCard=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请输入身份证号'));
        }else if(!Util.idCardReg.test(value)){
          callback(new Error('请输入正确的身份证号'));
        }else{
          callback();
        }
      };
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
        rules: {
          email: [{ validator: validateEmail, trigger: 'blur' }],
          phone: [{ validator: validatePhone, trigger: 'blur' }],
          card: [{ validator: validateCard, trigger: 'blur' }],
          birth: [{ required: true, message: '请输入出生日期', trigger: 'blur' }],
          sex: [{ required: true, message: '请输入性别', trigger: 'blur' }]
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
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
        self.form.birth=new Date(result.birth);
        // 这里注意以下，已经有日期的情况下，如果选择其他的值，需要v-model传入的值为一个对象才可，不然会报错不存在date.getHours is not a function函数；
        self.form.sex=result.sex;
      }).catch(function(error){
        console.log(error);
      })
    },
    onCancel(){
      this.$router.push('/userCenter')
    },
    updateUserData(formName){
      const self=this;
      let formData={
        account:sessionStorage.getItem('ms_userId'),
        email:self.form.email,
        phone:self.form.phone,
        card:self.form.card,
        birth:self.form.birth,
        sex:self.form.sex
      };
      self.$refs[formName].validate((valid)=>{
        if(valid){
            self.$http.post('/api/user/updateUser',formData).then((response)=>{
              console.log(response);
              self.$router.push('/success');
            }).catch(function(error){
              console.log(error);
            })
        }else{
          console.log('error submit!!');
          return false;
        }
      });
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
  margin-bottom: 15px;
  color: #606266;
}
</style>