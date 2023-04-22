// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//如何使用element-ui的主题，
//如果是全部引入element-ui的话，要使用主题，需要手动的添加以下代码：
// import 'element-ui/lib/theme-chalk/index.css'
//而如果是部分引入，因为借用了babel-plugin-component所以仅需设置.babelrc文件中的component.styleLibraryName设置为对应的css库，默认自带的为theme-chalk文件夹，
//当你自定义主题的时候，用et命令会生成一个新的css库，默认为theme文件夹，所以改成这个就好；
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Form,
  FormItem,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Icon,
  DatePicker,
  Select,
  Option,
  Col

} from 'element-ui'
import SIdentify from './components/page/Identify' //验证码组件
import 'babel-polyfill' //让各个版本的js代码更加兼容；babel的补充插件；

Vue.component("SIdentify",SIdentify);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Option);
Vue.use(Col);
Vue.use(DatePicker);
window.axios=require('axios').default;//这里别忘了.default这个后缀，不然会报错；
window.axios.defaults.headers.common['X-Requested-With']='XMLHttpRequest';
Vue.prototype.$http=window.axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
