// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false

// //导航守卫的定义,
// //这里的算法什么意思，为什么要判断to的元信息中的logined数据；
// router.beforeEach((to,from,next)=>{
//   if(to.meta.logined){
//     if(sessionStorage.login == 1){
//       next();
//     }else{
//       next({
//         path:'/home/login'
//       });
//     }
//   }else{
//     next();
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
