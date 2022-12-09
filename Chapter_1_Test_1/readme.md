#案例练习要求
    1.学会定义Vue实例对象（包括Vue2和Vue3），会设置常见的属性，如el、data、methods等；
    2.学会引入Vue；
    3.学会运用调试工具Vue-develop；
    4.学会使用v-model指令进行双向绑定；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑页面布局；
    3.定义Vue实例，并绑定相应节点；
    4.进行调试、查看页面效果；

#案例基本布局
    1.引入Vue.js文件：
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.页面布局：
<h3>欢迎新生入学！！</h3>
<p>我的班级:
    <select>
        <option value="" disabled>请选择</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</p>

    3.定义Vue实例：
//Vue2方式：
<script type="text/javascript">
    var vm = new Vue({
        el:'#vue',  //挂载在id为vue的元素上
        data:{selection:0}
    })
</script>
//Vue3方式：
<script type="text/javascript">
    import {createApp} from 'vue'
    createApp({
        data(){
            return {
                selection:0
            }
        }
    }).mount('#vue')
</script>
