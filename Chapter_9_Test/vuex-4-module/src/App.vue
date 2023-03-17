<template>
  <div id="app">
    <fieldset>
      <legend>{{ this.$store.state.company }}信息管理系统-教师端</legend>
      ID：<input type="text" v-model="id" value="1" readonly=""/>
      姓名：<input type="text" v-model="name"/><br/>
      年龄：<input type="number" v-model="age" min="0" max="120" step="1" value="18"/>
      性别：<input type="radio" v-model="sex" value="男" checked name="xb"/>男<input type="radio" v-model="sex" value="女" name="xb"/>女
      薪水：<input type="number" v-model="salary" min="2500" step="100"/><br/>
      <button @click="addTeacher(one)">增加教师</button>
    </fieldset>
    <fieldset>
      <legend>教师一览表</legend>
      <h5>序号---ID---姓名---年龄---性别---工资</h5>
      <ul>
        <li v-for="(teacher,index) in teachersAll" v-bind:class="{active:teacher.changed}">{{ index+1 }}---{{teacher.id}}---{{teacher.name}}---{{teacher.age}}---{{teacher.sex}}---{{teacher.salary}}</li>
      </ul>
      涨薪教师的ID<input type="text" v-model="teacherId"/>
      涨幅<input type="number" step="100" min="100" max="500" v-model="amount"/>元
      <button @click="modifySalary({teacherId,amount})">上调薪酬</button>
    </fieldset>
    <fieldset>
      <legend>{{ this.$store.state.company }}信息管理系统-学生端</legend>
      <h5>序号---ID---姓名---年龄---性别---成绩</h5>
      <ul>
        <li v-for="(student,index) in $store.state.Students.s_list">{{ index+1 }}---{{student.id}}---{{student.name}}---{{student.age}}---{{student.sex}}---{{student.result}}</li>
      </ul>
      修改成绩的学生的ID<input type="text" v-model="studentId"/>
      <button @click="modifyResult(studentId)">修改成绩（递增5分/次）</button>
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data(){
    return{
      id:1,
      name:'',
      age:18,
      sex:'',
      salary:2500,
      teacherId:'',
      studentId:'',
      amount:100,
      changed:false
    }
  },
  computed: {
    teachersAll(){
      return this.$store.state.Teachers.t_list;
    },
    one(){
      var some={
        id:this.$store.state.Teachers.count+10,
        name:this.name,
        age:this.age,
        sex:this.sex,
        salary:parseInt(this.salary),
        changed:false
      }
      return some;
    }
  },
  methods:{
    ...mapActions(['modifyResult','modifySalary','addTeacher'])
  }
}
</script>

<style>
#app {
  margin-top: 10px;
  padding: 10px;
}
.active {
  background-color: #eaebec;
}
body {
  text-align: center;
}
ul {
  list-style-type: none;
}
fieldset {
  width: 650px;
  margin: 0 auto;
}
button {
  width: 160px;
  height: 28px;
  border: 1px dotted #ee99aa;
}
</style>
