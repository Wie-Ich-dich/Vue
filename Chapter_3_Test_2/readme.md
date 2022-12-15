#案例练习要求
    1.学会Vue实例的定义，与相关属性设置；
    2.学会声明自定义指令（全局与局部）；
    3.学会使用v-bind绑定动态css属性；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑页面布局；
    3.定义Vue实例（两个：vue-ex-32-1、vue-ex-32-2），并绑定相应节点、设置methods和data数据；
    4.声明自定义指令：v-line、v-upper-text、v-lower-text；

#案例设计要求
    1.基本布局的实现（html、css）；
    2.两个Vue实例对象（分别绑定vue-ex-32-1、vue-ex-32-2）；
    3.全局自定义指令v-line，myViewModel1实例中局部变量v-upper-text，myViewModel2实例中局部自定义指令v-lower-text；

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.html主页面布局：
<div id="vue1" :style="comStyle">
    <h3>英文字母转换为带下划线的全大写格式</h3>
    <p>原始字符串：{{text}}</p>
    <div v-line="'underline'" v-upper-text="text">111</div>
</div>
<div id="vue2" :style="comStyle">
    <h3>英文字母转换为带上划线的全小写格式</h3>
    <p>原始字符串：{{text}}</p>
    <div v-line="'overline'" v-lower-text="text">111</div>
</div>

    3.Vue实例的定义：
<script type="text/javascript">
    Vue.directive('line',{
        bind:function(el, binding){
            el.style.textDecoration=binding.value;
        }
    });
    var vm1=new Vue({
        el:'#vue1',
        data:{
            text:'Vue.js Components Fundamentals!',
            comStyle:{
                width:'450px',
                height:'150px',
                border:'2px dashed #333333'
            }
        },
        directives:{
            upperText:function(el,binding){
                console.log(el);
                console.log(binding);
                el.textContent=binding.value.toUpperCase();
            }
        }
    });
    var vm2=new Vue({
        el:'#vue2',
        data:{
            text:'Vue.js is very Good!(innerText)',
            comStyle:{
                width:'450px',
                height:'150px',
                backgroundColor:'#777777'
            }
        },
        directives:{
            'lower-text':function(el,binding){
                console.log(el);
                console.log(binding);
                el.textContent=binding.value.toLowerCase();
            }          
        }
    });
</script>

#案例难点
    1.自定义指令中的参数问题，el、binding、vnode等；
    2.自定义指令的名称问题；（不加引号用驼峰===加引号用短横线）；