import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/login'
      // redirect:'/readme'
      redirect:'/register-success'
    },
    {
      path:'/readme',
      component:resolve=>require(['../components/common/Home.vue'],resolve), //这里的resolve是用来干吗的？传参吗？
      children:[
        {
          path:'/',
          component:resolve=>require(['../components/page/Readme.vue'],resolve)
        },
        {
          path:'/userCenter',
          component:resolve=>require(['../components/page/UserCenter.vue'],resolve)
        },
        {
          path:'/modifyUser',
          component:resolve=>require(['../components/page/ModifyUser.vue'],resolve)
        },{
          path:'/modifyPassword',
          component:resolve=>require(['../components/page/ModifyPassword.vue'],resolve)
        },{
          path:'/success',
          component:resolve=>require(['../components/page/Success.vue'],resolve)
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
