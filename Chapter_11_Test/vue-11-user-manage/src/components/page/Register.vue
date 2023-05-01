<template>
  <div>
    <div class="crumbs crumbs-register">
      <el-breadcrumb separator="/" class="register-title">
        <el-breadcrumb-item><i class="el-icon-setting"></i>注册</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userContent">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="账号名称" prop="account">
          <el-input v-model="form.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="form.pass" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="form.checkPass" type="password" placeholder="请再次输入密码"></el-input>
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
          <el-button type="primary" @click="onSubmit('form')">确定</el-button>
          <el-button @click="onCancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Util from '../../utils/utils';
export default {
    data() {
      //自定义校验规则
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
          pass: '',
          checkPass: '',
          email: '',
          phone: '',
          card: '',
          birth: '',
          sex: ''
        },
        rules: {
          name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
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
      };
    },
    methods: {
      onSubmit(formName) {
        const self=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$http.post('/api/user/addUser',self.form).then(function(response){
              console.log(response);
              self.$router.push('/register-success');
            }).catch(function(error){
              console.log(error);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      onCancel() {
        this.$router.push('/login');
      },
      getDateTimes(str){
        var str =new Date(str);
        return str;
      }
    }
  }
</script>

<style scoped>
.crumbs-register {
  background-color: #324157;
  height: 50px;
  line-height: 50px;
}
.register-title {
  line-height: 50px;
  margin: 0 auto;
  width: 50px;
  font-size: 16px;
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
/* 这里由于背景颜色和form中的label文字颜色很相近，然后我想改label颜色，但是没有办法只改一个组件中的，所以我直接在主题中进行了更改 ，但其实还可以在el-from-item里面改*/
</style>