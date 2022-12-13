#案例练习要求
    1.学会定义Vue实例对象（包括Vue2和Vue3），会设置常见的属性，如el、data、methods等；
    2.学会引入Vue；
    3.学会使用v-on、v-bind、v-model和v-for指令；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑页面布局；
    3.定义Vue实例，并绑定相应节点、设置methods和data数据；

#案例设计要求
    1.基本页面布局；
    2.两个按钮分别实现add“添加”和clear“清空”；
    3.以复选框的形式输出相应数据；

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.html主页面布局：
<div id="vue">
    <div :style="divStyle">
        <label>识别号：</label><input type="text" v-model.trim.lazy="id"><br>
        <label>姓名：</label><input type="text" v-model.trim.lazy="name"><br>
        <input type="button" value="添加" @click="add">
        <input type="button" value="清空" @click="clear"><br>
    </div>
    <div>
        <h3>人员列表清单（以复选框形式输出）</h3>
        <p v-for="user in users" :key="user.id"><input type="checkbox"> {{user.id}} --- {{user.name}}</p>
    </div>
</div>

    3.Vue实例的定义：
<script type="text/javascript">
    var vm = new Vue({
        el:'#vue',
        data:{
            id:'',
            name:'',
            divStyle:{
                border: '1px solid black',
                width: '300px',
                height: '100px',
                padding: '20px',
            },
            users:[{
                id:1,
                name:'张清华'
            },{
                id:2,
                name:'袁振兴'
            },{
                id:3,
                name:'赵小燕'
            },{
                id:4,
                name:'李阳阳'
            }],
            flag:true   
        },
        methods:{
            add(){
                if(this.id && this.name){
                    this.checkExist();
                    if(this.flag){
                        this.users.push({
                            id:parseInt(this.id),
                            name:this.name
                        });
                        this.clear();
                    }else{
                        alert('该识别号已存在！！');
                    }                       
                }else{
                    alert('请输入信息！！');
                }                   
            },
            clear(){
                this.id='';
                this.name='';
            },
            checkExist(){
                this.users.forEach((user)=>{
                    if(user.id == parseInt(this.id)){
                        this.flag=false;
                    }
                });
            }
        }
    })
</script>

#案例难点
    1.checkExist方法的实现；
    2.常规函数和箭头函数的this指向问题；（前者随调用对象决定且call方法能改变，后者由最外层的对象决定）