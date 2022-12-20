#案例练习要求
    1.学会html基本布局；
    2.学会使用props属性进行参数传递；
    3.学会使用具名插槽；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑页面布局；
    3.定义Vue实例，并绑定相应节点、设置methods和data数据；
    4.创建组件my-slot并注册；
    5.实现更新updateContent与还原initContent方法;
    

#案例设计要求

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.html主页面布局：
<div id="app">
    <my-slot :bgcolor="bgColor">
        <template v-slot:[slot1]><h3 style="text-align: center;">这是新的头部</h3></template>
        <template v-slot:[slot2]><h3 style="text-align: center;">这是新的中间</h3></template>
        <template v-slot:[slot3]><h3 style="text-align: center;">这是新的尾部</h3></template>
    </my-slot>
    <div style="text-align:center;padding:10px;">
        <button @click="updateContent">更新内容</button>
        <button @click="initContent">还原内容</button>
    </div>
</div>

    3.Vue实例的定义：
<script type="text/javascript">
    var componentA=Vue.extend({
        props:['bgcolor'],
        template:'<div> \
                <div class="header" :style="{backgroundColor:bgcolor.header}"><slot name="header">这是默认的头部</slot></div> \
                <div class="content" :style="{backgroundColor:bgcolor.content}"><slot name="content">这是默认的中间</slot></div> \
                <div class="footer" :style="{backgroundColor:bgcolor.footer}"><slot name="footer">这是默认的尾部</slot></div> \
                </div>'
    });
    var vm=new Vue({
        el:'#app',
        data:{
            bgColor:{
                header:'',
                content:'',
                footer:''
            },
            slot1:'',
            slot2:'',
            slot3:''
        },
        components:{
            'my-slot':componentA
        },
        methods:{
            updateContent(){
                this.slot1='header';
                this.slot2='content';
                this.slot3='footer';
                this.bgColor.header='#55FF00';
                this.bgColor.content='#FF55FF';
                this.bgColor.footer='#FBEB06';
            },
            initContent(){
                this.slot1='';
                this.slot2='';
                this.slot3='';
                this.bgColor.header='#FAFBFC';
                this.bgColor.content='#CECECE';
                this.bgColor.footer='#E3E3E3';
            }
        }
    })
</script>

#案例难点
    1.props传参的时候，如果不加v-bind默认传入的是字符串，还有它是不区分大小写的；
    2.整体的交互逻辑稍微复杂一点，刚开始不知道怎么搞；
    3.如何实现插槽的替换与不替换；