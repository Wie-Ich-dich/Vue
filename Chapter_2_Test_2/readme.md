#案例练习要求
    1.学会配置computed属性；
    2.学会使用v-on和v-for指令完成事件绑定、遍历商品；
    3.学会使用<table>、<tr>、<fieldset>等html标签；
    4.学会使用filter过滤器；

#案例练习步骤
    1.创建html文件，并引入Vue.js文件；
    2.编辑html主页面布局；
    3.定义Vue实例，设置好数据、方法、filter过滤器；
    4.编写方法的实现算法；
    5.美化布局；

#案例设计要求
    1.完成初始化布局，包括“客户姓名”、“单价”、“数量”、“购买价”、“总价”输入框，其中后两个设置为只读；两个按钮“记入流水”、“重置”分别调用add()、clear()方法；
    2.当用户完整输入客户姓名、单价和数量后，自动计算购买价、运费和总价，并填充在相应的文本框中；（运费规则：购买价大于100元时免运费，否则收取10元）
    3.单击“记入流水”按钮后，将购买相关数据写入当日流水中，add方法实现；（若用户未输入姓名时，会提示警告信息alert函数）
    4.单击“重置”之后，“客户姓名”、“单价”、“数量”均清空，clear方法实现；
    5.businesses数组存放相应的数据，内容包括dateTime业务时间、name客户姓名、totalAll购买价、freight运费、sumTotal总价；

#案例基本实现
    1.引入Vue.js文件：（Vue2方式）
<script type="text/javascript" src="../vue/js/vue.js"></script>

    2.html主页面布局：
<div id="vue">
    <fieldset class="fields">
        <legend align="center">邮购商品业务</legend>
        客户姓名：<input class="ipt" type="text" v-model="name">
        单价：<input class="ipt" type="text" v-model="price"></br>
        数量：<input class="ipt" type="text" v-model="count">
        购买价：<input class="ipt" type="text" v-model="total" disabled></br>
        运费：<span style="display: inline-block;width: 100px;height: 25px;">{{freight}}</span>
        总价：<input class="ipt" type="text" v-model="sum" disabled></br>
        <span>注：购买价 >= 100元免运费</span></br>
        <button class="btn" type="button" @click="add">记入流水</button>
        <button class="btn" type="button" @click="clear">重置</button>
    </fieldset>
    <table border="1" bordercolor="#008000" class="tbl">
        <caption>销售流水帐</caption>
        <tr>
            <th>业务时间</th>
            <th>客户姓名</th>
            <th>购买价</th>
            <th>运费</th>
            <th>总金额</th>           
        </tr>
        <tr v-for="business in businesses" key="business.name">
            <td>{{business.dateTime | dateFormat}}</td>
            <td>{{business.name}}</td>
            <td>{{business.totalAll}}</td>
            <td>{{business.freight}}</td>
            <td>{{business.sumTotal}}</td>
        </tr>
    </table>
</div>
    3.Vue实例的定义：