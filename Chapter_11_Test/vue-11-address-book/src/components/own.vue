<template>
  <div>
    <h2>个人信息</h2>
    <div class="form">
        <label for="name">
            <span>姓名：</span>
            <input type="text" id="name" v-model="name" :class="className.name" :disabled="edit"/>
            <em v-show="nameIn">*姓名只能由汉字、字母和数字组成</em>
        </label>
        <label for="tel">
            <span>电话号码：</span>
            <input type="text" id="tel" v-model="tel" :class="className.tel" :disabled="edit"/>
            <em v-show="telIn">*不能为空且全部由数字组成</em>
        </label>
        <label for="psw">
            <span>密码：</span>
            <input type="text" id="psw" v-model="psw" :class="className.psw" :disabled="edit"/>
            <em v-show="pswIn">*密码不少于6位且只能由字母、数字、下画线组成</em>
        </label>
        <label v-if="edit">
            <span></span>
            <button class="normal large" @click="edit=false">编辑信息</button>
        </label>
        <label v-else class="editing">
            <span></span>
            <button :class="{'save':save,'return':!save}" @click="change" :disabled="save">保存</button>
            <button class="return" @click="notChange">返回</button>
        </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        name:this.own.name,
        tel:this.own.tel,
        psw:this.own.psw,
        edit:true,
        nameIn:false,
        telIn:false,
        pswIn:false
    }
  },
  props: ['own'],
  computed: {
    save:function(){
        this.nameIn=/[^\w\u4E00-\u9FA5]/g.test(this.name) || this.name.length<1;
        this.telIn=/\D/g.test(this.tel) || this.tel.length<1;
        this.pswIn=(this.psw.length<6) || (/\W/g.test(this.psw));

        var result=this.nameIn || this.telIn ||this.pswIn;
        return result;
    },
    className:function(){
        return {
            name:{
                read:this.edit,
                error:this.nameIn
            },
            tel:{
                read:this.edit,
                error:this.telIn
            },
            psw:{
                read:this.edit,
                error:this.pswIn
            }
        }
    }
  },
  methods: {
    change(){
        //这里就不用判断输入是不是正确了，因为前面通过save计算属性动态控制提交按钮的亮灭已经实现了；
        if(this.name && this.tel && this.psw){
            this.edit=true;
            this.$emit('changeOwn',{
                name:this.name,
                tel:this.tel,
                psw:this.psw
            });
        }
    },
    notChange(){
        this.edit=true;
        this.name=this.own.name;
        this.tel=this.own.tel;
        this.psw=this.own.psw;

        this.nameIn=false;
        this.telIn=false;
        this.pswIn=false;
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/own.css';
</style>