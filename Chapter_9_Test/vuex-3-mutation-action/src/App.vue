<template>
  <div id="app">
    <h2>{{ company }}-周薪管理-调增-mutation</h2>
    <my-add></my-add>
    <hr/>
    <h2 @click="a">{{ company }}-周薪管理-调减-action</h2>
    <my-reduce></my-reduce>
  </div>
</template>

<script>
import add from './components/addWeeklyPay.vue';
import reduce from './components/reduceWeeklyPay.vue';

export default {
  name: 'App',
  components: {
    'my-add':add,
    'my-reduce':reduce
  },
  props:['company'],
  computed:{
    weeklyPay(){
      return this.$store.state.weeklyPay;//在这里this.$store也不可见是怎么回事？
    }
  },
  methods:{
    a(){
      console.log(this);
    }
  }
}
</script>

<style>
#app {
  margin-top: 10px;
  padding: 10px;
  border: 1px dashed #112233;
}
</style>
