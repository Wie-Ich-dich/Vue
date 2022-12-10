#案例练习要求
    1.学会配置methods和watch等选项，并完成相应的函数设计；
    2.学会使用v-model、v-bind和v-on等指令；
    3.<fieldset>标签的使用；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑html主页面布局；
    3.定义Vue实例，设置好数据、方法；
    4.设置数据实时监听，以及getAddress函数；
    5.美化布局；

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.html主页面布局：
<div id="vue">
    <form action="">
        <fieldset v-bind:class="stuClass">
            <legend>学生地址信息采集</legend>
            姓名：<input class="ipt" type="text" v-model="name"></br>
            <hr>
            省份：<input class="ipt" type="text" v-model="province"></br>
            城市：<input class="ipt" type="text" v-model="city"></br>
            县、区或街道：<input class="ipt" type="text" v-model="street"></br>
            家庭地址：<input class="ipt" type="text" v-model="address" style="width: 400px;"></br>
            <button class="btn" type="button" @click="sendData">确定</button>
            <button class="btn" type="button" @click="resetAllData">重置</button>
        </fieldset>
    </form>
 </div>

    3.Vue实例的定义：
<script type="text/javascript">
    var vm = new Vue({
        el:'#vue',
        data:{
            name:'',
            province:'',
            city:'',
            street:'',
            address:'',
            stuClass:'fields'
        },
        watch:{
            province:{
                handler(newValue, oldValue){
                        this.getAddress(); //这里一定要用this.的方式，不然会报函数未定义的错；
                },
                deep:true,
                immediate:true
            },
            city:{
                handler(newValue, oldValue){
                    this.getAddress();
                },
                deep:true,
                immediate:true
            },
            street:{
                handler(newValue, oldValue){
                    this.getAddress();
                },
                deep:true,
                immediate:true
            }
        },
        methods:{
            getAddress(){
                this.address = this.province+' '+this.city+' '+this.street+' ';
            },
            resetAllData(){
                this.name = '';
                this.province = '';
                this.city = '';
                this.street = '';
            },
            sendData(){
                alert('信息发送如下：'+this.name+'\n'+this.address);
            }
        }
    })
</script>

    4.美化布局：
<style>
    .ipt {
        height: 25px;
        border-radius: 6px;
        border: 1px dashed #44A1FF;
    }
    .btn {
        margin: 10px auto;
        height: 35px;
        width: 150px;
        background-color: #44A1FF;
        color: white;
        padding: 0px 20px;
        border-radius: 6px;
    }
    .fields {
        width: 550px;
        height: 250px;
        background-color: #adfada;
        padding: 50px;
        margin: 0px auto;
    }
</style>

