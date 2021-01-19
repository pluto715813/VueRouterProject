import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import App from './App.vue'

//子组件
import Content from './components/content/Content'
import Home from './components/content/Home'
import Download from './components/content/download/Download'

import Login from './components/Login'
import Register from './components/Register'

import Any from './components/Any'

import Shutterstock from './components/content/download/Shutterstock'
import Depositphotos from './components/content/download/Depositphotos'
import RF123 from './components/content/download/RF123'
import Bigstockphoto from './components/content/download/Bigstockphoto'
import IStockphoto from './components/content/download/IStockphoto'
import Dreamstime from './components/content/download/Dreamstime'
import Adobestock from './components/content/download/Adobestock'

const routes = [
  {path:'/',name:'contentLink',component:Content,children:[
    {path:'/home',name:'homeLink',component:Home},
    {path:'/download',name:'downloadLink',component:Download,children:[
      //子组件
      {path:'/shutterstock',name:'shutterstockLink',component:Shutterstock},
      {path:'/depositphotos',name:'depositphotosLink',component:Depositphotos},
      {path:'/123rf',name:'123rfLink',component:RF123},
      {path:'/bigstockphoto',name:'bigstockphotoLink',component:Bigstockphoto},
      {path:'/istockphoto',name:'istockphotoLink',component:IStockphoto},
      {path:'/dreamstime',name:'dreamstimeLink',component:Dreamstime},
      {path:'/adobestock',name:'adobestockLink',component:Adobestock},
    ]},
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  //重定向
  {path:'*',component:Any},
];

//js文件

//css文件
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/bootstrap.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

localStorage.setItem('accessToken', 'null' )//设置
// localStorage.removeItem('accessToken')//删除

const router = new VueRouter({
  routes,
  mode:'history',
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name !== 'loginLink' && localStorage.getItem('accessToken') === 'null' ){
      next({ name: 'loginLink' })
  }
  next()
})

new Vue({
  router,
  render: h => h(App),//挂载App.vue
}).$mount('#app');
