import Vue from 'vue'
import Router from 'vue-router'

// 懒加载-按需加载
/*
  路由懒加载也就是，正常情况下（使用import语句直接导入需要的组件），引入的所有组件都会被打包进同一个文件，然后请求页面的时候，会一起发过来，而通过将导入语句写成下面的类型，可以实现，将不同组件打包进不同的文件中，需要时再请求（也可以进行分组）；
*/
const app = ()=>import('@/components/app.vue');
const login = ()=>import('@/components/login.vue');
const register = ()=>import('@/components/register.vue');
const addressBook = ()=>import('@/components/addressBook.vue');
const notes = ()=>import('@/components/notes.vue');
const addCon = ()=>import('@/components/addCon.vue');
const own = ()=>import('@/components/own.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home/register'
      // redirect:'/contacts/' //调试用
    },
    {
      path: '/home',
      component:app,
      children:[{
        path:'login',
        component:login
      },{
        path:'register',
        component:register
      }]
    },
    {
      path:'/contacts',
      component:addressBook,
      children:[{
        path:'',
        component:notes,
        meta:{logined:true}
      },{
        path:'add',
        component:addCon
      },{
        path:'own',
        component:own
      }]
    }
  ]
})
