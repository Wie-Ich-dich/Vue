<template>
  <div>
    <h2>新增联系人</h2>
    <div class="form">
        <label for="name">
            <span>姓名</span>
            <input type="text" id="name" v-model="name" :class="{'error':nameIn}" placeholder="请输入姓名"/>
            <em v-show="nameIn">*姓名只能由汉字、字母和数字组成</em>
        </label>
        <label for="tel">
            <span>电话号码</span>
            <input type="text" id="tel" v-model="tel" :class="{'error':telIn}" placeholder="请输入电话号码"/>
            <em v-show="telIn">*不能为空且全部由数字组成</em>
        </label>
        <label>
            <span>与我的关系</span>
            <select v-model="status">
                <option selected>朋友</option>
                <option>亲人</option>
                <option>同事</option>
            </select>
        </label>
        <label>
            <span></span>
            <!-- 只要有一个输入没对，button就会变暗 -->
            <button :class="{'normal':true,'btn':save}" @click.stop="add" :disabled="save">新增</button>
        </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        name:'',
        tel:'',
        status:'朋友'
    }
  },
  computed: {
    nameIn(){//匹配不正确的时候会返回true，正确的时候返回false；
        return /[^\w\u4E00-\u9FA5]/g.test(this.name);
    },
    telIn(){
        return /\D/g.test(this.tel);
    },
    save(){//只要一个没符合标准，就会返回true；
        var result=(this.nameIn || this.telIn);
        return result;
    }
  },
  methods: {
    add(ev){
        if(this.name && this.tel){
            this.$emit('add',{
                name:this.name,
                tel:this.tel,
                status:this.status
            });
            this.name='';
            this.tel='';
        }else{
            if(!this.name){
                alert('请输入姓名！');
                return;
            }
            if(!this.tel){
                alert('请输入电话号码！');
            }
        }
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/addCon.css';
</style>