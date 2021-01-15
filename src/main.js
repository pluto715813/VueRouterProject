import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import App from './App.vue'

//子组件
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Any from './components/Any'

const routes = [
  {path:'/',name:'homeLink',component:Home},
  {path:'/about',name:'aboutLink',component:About},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',component:Any},
  // {path:'*',redirect:'/'},
];

//js文件

//css文件
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/bootstrap.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
})

new Vue({
  router,
  render: h => h(App),//挂载App.vue
}).$mount('#app');
