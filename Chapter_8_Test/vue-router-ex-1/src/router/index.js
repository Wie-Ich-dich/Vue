import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Shoes={
  template:'<h3>这是Shoes!</h3>'
};
const Women_dress={
  template:'<h3>这是Women_dress!</h3>'
};
const Men_clothing={
  template:'<h3>这是Men_clothing!</h3>'
};
const Accessories={
  template:'<h3>这是Accessories!</h3>'
};


export default new Router({
  routes: [
    {path:'/shoes', name:'shoes', component:Shoes},
    {path:'/women_dress', name:'women_dress', component:Women_dress},
    {path:'/men_clothing', name:'men_clothing', component:Men_clothing},
    {path:'/accessories', name:'accessories', component:Accessories}
  ],
  mode:'history'
})
