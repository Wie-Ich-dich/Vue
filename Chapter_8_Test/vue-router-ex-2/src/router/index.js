import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home={
  template:'<img :src="img1" alt="shouye">',
  data(){
    return {
      img1:require('./images/首页.jpg')
    }
  }
}
const Advantage={
  template:'<img :src="img2" alt="pingtaiyoushi">',
  data(){
    return {
      img2:require('./images/平台优势.png')
    }
  }
}
const Product={
  template:'<div id="subbar"><router-link to="/product/gaiyao">概览</router-link><router-link to="/product/sousuo">搜索推广</router-link><router-link to="/product/feed">信息流推广</router-link><router-link to="/product/juping">聚屏推广</router-link><router-link to="/product/kaiping">开屏推广</router-link><router-view>这里是子动态显示区</router-view></div>',
}
const Case={
  template:'<img :src="img4" alt="chenggonganli">',
  data(){
    return {
      img4:require('./images/成功案例.png')
    }
  }
}
const More={
  template:'<img :src="img5" alt="liaojiegengduo">',
  data(){
    return {
      img5:require('./images/了解更多.jpg')
    }
  }
}
const Gaiyao={
  template:'<h3>这里是Gaiyao！</h3>'
}
const Sousuo={
  template:'<h3>这里是Sousuo！</h3>'
}
const Feed={
  template:'<h3>这里是Feed！</h3>'
}
const Juping={
  template:'<h3>这里是Juping！</h3>'
}
const Kaiping={
  template:'<h3>这里是Kaiping！</h3>'
}

export default new Router({
  routes: [
    {path: '/home',name: 'Home',component: Home},
    {path: '/advantage',name: 'Advantage',component: Advantage},
    {
      path: '/product',
      name: 'Product',
      component: Product,
      children:[{
        path:'',
        component:Gaiyao
      },{
        path:'gaiyao',
        component:Gaiyao
      },{
        path:'sousuo',
        component:Sousuo
      },{
        path:'feed',
        component:Feed
      },{
        path:'juping',
        component:Juping
      },{
        path:'kaiping',
        component:Kaiping
      }]
    },
    {path: '/case',name: 'Case',component: Case},
    {path: '/help',name: 'Help',component: More},
    {path: '/',component: Home}
  ],
  mode:'history'
})
