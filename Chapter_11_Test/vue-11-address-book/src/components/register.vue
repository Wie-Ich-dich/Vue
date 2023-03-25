<template>
  <div id='register'>
    <form>
        <input 
            type="text" 
            class="input" 
            id="name" 
            placeholder="请输入姓名" 
            v-model="own.name" 
            @focus.stop="focus=1"
            @blur="focus=0"
        /><br/>
        <input placeholder="请输入手机号" v-model="own.tel"/><br/>
        <input placeholder="请输入密码（不少于6位）" v-model="own.psw"/>
    </form>
  </div>
</template>

<script>

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
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style>
@import '../assets/css/login.css'
</style>