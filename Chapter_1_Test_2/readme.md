#案例练习要求
    1.学会使用Vue实例对象的template属性；
    2.使用双括弧、v-text和v-html的方式渲染数据；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑html主页面的布局；
    3.定义Vue实例，并编辑Vue实例中的template布局；
    4.使用<style></style>标签美化布局；

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.页面布局：
<div id="vue"></div>

    3.Vue实例的定义：
<script type="text/javascript">
const vm = new Vue({
    template:'<div id="div1" style="width:500px;height:300px;background-color:#EDEDED;"><p>姓名：{{myName}}</p><div v-bind:class="divStyle"><p>{{mySpecialty}}</p></div></div>',
    data:{
        myName:"陈新华",
        mySpecialty:"数据科学与大数据技术",
        description:"该专业培养德、智、体、美、劳全面发展，掌握数据科学的基础知识、理论及技术，包括面向大数据应用的数学、统计、计算机等学科基础知识，数据建模、高效分析与处理，统计学推断的基本理论、基本方法和基本技能。了解自然科学和社会科学等应用领域中的大数据，具有较强的专业能力和良好的外语运用能力，能胜任数据分析与挖掘算法研究和大数据系统开发的研究型和技术型人才。",
        divStyle:"myDiv"
    }，
    el:'#vue'
})
</script>
