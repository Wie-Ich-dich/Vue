import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/readme',
      component:resolve=>require(['../components/common/Home.vue'],resolve), //这里的resolve是用来干吗的？传参吗？
      children:[
        {
          path:'/',
          component:resolve=>require(['../components/page/Readme.vue'],resolve),
          meta:{
            logined:true
          }
        },
        {
          path:'/userCenter',
          component:resolve=>require(['../components/page/UserCenter.vue'],resolve),
          meta:{
            logined:true
          }
        },
        {
          path:'/modifyUser',
          component:resolve=>require(['../components/page/ModifyUser.vue'],resolve),
          meta:{
            logined:true
          }
        },{
          path:'/modifyPassword',
          component:resolve=>require(['../components/page/ModifyPassword.vue'],resolve),
          meta:{
            logined:true
          }
        },{
          path:'/success',
          component:resolve=>require(['../components/page/Success.vue'],resolve),
          meta:{
            logined:true
          }
        },
      ]
    },
    {
      path:'/register',
      component:resolve=>require(['../components/page/Register.vue'],resolve)
    },
    {
      path:'/register-success',
      component:resolve=>require(['../components/page/RegisterSuccess.vue'],resolve)
    },
    {
      path:'/login',
      component:resolve=>require(['../components/page/Login.vue'],resolve)
    }
  ]
})
