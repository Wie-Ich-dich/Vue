<template>
  <div class="login">
    <form>
      <label for="name">
        <input 
            type="text" 
            class="input" 
            id="name" 
            placeholder="请输入姓名" 
            v-model="own.name" 
            @focus="focus=1"
            @blur="focus=0"
        />
        <em v-show="focus==1 || nameIn==false">*姓名不为空且由汉字、字母、数字、下画线组成</em>
        <em v-show="req===false && focus!=1">*该昵称已被占用</em>
      </label>
      <label for="tel">
        <input 
            type="text" 
            class="input" 
            id="tel" 
            placeholder="请输入手机号" 
            v-model="own.tel" 
            @focus="focus=2"
            @blur="focus=0"
        />
        <em v-show="focus==2 || telIn==false">*手机号全为数字</em>
      </label>
      <label for="psw" class="last">
        <input 
            type="password" 
            class="input" 
            id="psw" 
            placeholder="请输入密码（不少于6位）" 
            v-model="own.psw" 
            @focus="focus=3"
            @blur="focus=0"
        />
        <em v-show="focus==3 || pswIn==false">*密码不能少于6位</em>
      </label>
      <button class="loginSub" @click.prevent="addToSql">
        <span v-show="!result">注册友联</span>
        <span v-if="req" v-show="result">注册成功</span>
        <span v-else v-show="result">重新注册</span>
        <i class="fa-solid fa-spinner fa-spin" v-show="icon"></i>
        <i class="fa-solid fa-check" v-if="req" v-show="result"></i>
        <i class="fa-solid fa-xmark" v-else v-show="result"></i>
      </button>
    </form>
  </div>
</template>

<script>
// import qs from 'qs';
// import {mapActions} from 'vuex';

export default {
  data(){
    return {
        own:{
            name:'',
            tel:'',
            psw:''
        },
        icon:false,
        result:false,
        req:'',
        focus:0,
        nameIn:true,
        telIn:true,
        pswIn:true
    }
  },
  methods: {
    // ...mapActions(['register']),
    addToSql(){
      this.nameIn=(this.own.name=='' || /[^\w\u4E00-\u9FA5]/g.test(this.own.name)) ? false:true;//判断输入的名称是不是符合规范
      this.telIn=(!this.own.tel.length) ? false:true;
      this.pswIn=(this.own.psw.length < 6) ? false:true;
      if(this.nameIn && this.telIn && this.pswIn){
        this.icon=true;
        this.result=false;
        this.req='';
        setTimeout(()=>{
          this.result=true;
          this.icon=false;
          // this.register(this.own);
          if(sessionStorage.register && sessionStorage.register == 1){
            this.req=true;
            this.own.name='';
            this.own.tel='';
            this.own.psw='';
          }else{
            this.req=false;
          }
        },1000);
      }
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/login.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/fontawesome.min.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/solid.min.css';
</style>