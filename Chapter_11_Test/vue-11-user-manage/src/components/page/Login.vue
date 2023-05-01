<template>
  <div class="login-wrap">
    <div class="ms-title">用户登录管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div style="height: 15px;">
          <span v-show="errorInfo">{{ errInfo }}</span>
        </div>
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          <!-- 关于这里的事件绑定为什么要加上native关键词：用在html原生标签上不会出现问题，但如果用在自定义组件，因为涉及自定义事件和原生事件，所以这里就不知道它绑定的是原生还是自定义触发的事件；所以如果是原生事件，必须要加上一个native修饰；（这个主要发生在Vue2中，3中已经没有了） -->
        </el-form-item>
        <el-form-item prop="validate">
          <el-input v-model="ruleForm.validate" class="validate-code" placeholder="验证码"></el-input>
          <div class="code" @click="refreshCode"><s-identify :identifyCode="identifyCode"></s-identify></div>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="register" @click="handleCommand()">注册</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      identifyCodes:'1234567890',
      identifyCode:'',
      errInfo:'',
      errorInfo:false,
      ruleForm:{
        name:'',
        password:'',
        validate:''
      },
      rules:{
        name:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ],
        validate:[
          {required:true,message:'请输入验证码',trigger:'blur'}
        ]
      }
    }
  },
  mounted(){
    this.identifyCode='';
    this.makeCode(this.identifyCodes,4);
  },
  methods: {
    submitForm(formName){
      const self=this;
      //这里为什么要把this保存下来，是因为下面会涉及到，function回调函数和箭头函数的this
      if(self.ruleForm.validate != self.identifyCode){
        self.errorInfo=true;
        self.errInfo='验证码错误';
      }else{
        self.$refs[formName].validate((valid)=>{
          //valid表示是否校验成功，如果有两个参数，第一个是是否校验成功，第二个是未通过校验的字段；
          if(valid){
            self.$http.post('/api/user/login',self.ruleForm)
              .then((response)=>{
                if(response.data == -1){
                  self.errorInfo=true;
                  self.errInfo='该用户不存在';
                }else if(response.data == 0){
                  self.errorInfo=true;
                  self.errInfo='密码错误';
                }else if(response.status == 200){
                  sessionStorage.login=1;
                  self.$router.push('/readme');
                  //这里需要留意一下，发现指令式导航并不是立即执行的；而是等所在函数执行完毕；
                  sessionStorage.setItem('ms_userId',response.data[0].account);
                  sessionStorage.setItem('ms_username',self.ruleForm.name);
                  sessionStorage.setItem('user_sex',response.data[0].sex);
                  sessionStorage.setItem('ms_user',JSON.stringify(self.ruleForm));

                }
              })
              .catch((error)=>{
                console.log(error);
              })
          }else{
            console.log('error submit!!');
            return false;
          }
        })
      }
    },
    handleCommand(){
      this.$router.push('/register');
    },
    randomNum(min,max){
      return Math.floor(Math.random()*(max-min)+min);
    },
    refreshCode(){
      this.identifyCode='';
      this.makeCode(this.identifyCodes,4);
    },
    makeCode(o,n){
      for(let i=0;i<n;i++){
        this.identifyCode+=o[this.randomNum(0,o.length)];
      }
      console.log(this.identifyCode);
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #555;
  /* 这里的height属性其实没有用，容器的高度还是随着里面的东西在变； 
  而且当设置position为relative，里面的东西设置为absolute的时候，高度就变成0了；
  */
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -280px;
  text-align: center;
  font-size: 30px;
  color: #fff; 
}
 .ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 460px;
  border-radius: 5px;
  height: 360px;
  margin: -180px 0 0 -230px;
  padding: 45px 40px 40px;
  background: #fff;
}
.ms-login span {
  color: red;
  line-height: 15px;
  font-size: 12px;
}
.login-btn {
  text-align: center;
  margin-top: 30px;
}
.login-btn button {
  width: 80%;
  height: 45px;
  font-size: 18px;
  
}
.code {
  width: 112px;
  height: 45px;
  border: 1px solid #ccc;
  float: right;
  border-radius: 2px;
}
.validate-code {
  width: 136px;
  float: left;
}
.register {
  font-size: 14px;
  line-height: 30px;
  color: #999;
  cursor: pointer;
  float: right;
} 
.el-form-item {
  margin-bottom: 15px;
}
</style>