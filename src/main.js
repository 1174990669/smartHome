// main.js

import Vue from 'vue'

// 导入 vue-router，并使用
import VueRouter from 'vue-router'
import $ from 'jquery'

import VueResource from 'vue-resource';

Vue.use(VueResource);
// import 'swiper/dist/css/swiper.css';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;


import VueAwesomeSwiper from 'vue-awesome-swiper' 

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter)

// 导入 pages 下的 Home.vue 
import Home from './pages/Home'
import Detail from './pages/Detail'
import xinge from './components/xinge'
// import pages from './components/paiheng'
import my from './components/my'
import address from './components/address'  //收货地址
import newaddress from './components/newaddress'  //新增地址
import collection from './components/collection' //收藏
import setup from './components/setup' //设置 
import personal from './components/personal' //个人资料 personal 
import bind from './components/bind' //绑定手机号码 personal 
import notice from './components/notice'  //我的通知 
import noticecent from './components/noticecent'  //我的通知
import noticeList from './components/noticeList'  //我的通知列表
import noticedetils from './components/noticedetils'  //我的通知详情
import order from './components/order'  //我的订单
import orderDetails from './components/orderDetails'  //订单详情 
import logistics from './components/logistics'  //查看物流  
import afterSale from './components/afterSale'  //申请售后 afterSale 
import sale from './components/sale'  //申请售后 evaluate 
import evaluate from './components/evaluate'  //评价
import sou from './components/sou'  //搜索
import iphone from './components/iphone'  //绑定手机
import details from './components/details'  //商品详情
import txdd from './components/txdd'  //填写订单
import sppj from './components/sppj'  //商品评价
import helpCenter from './components/helpCenter'  //帮助中心
import tab1 from './components/tab1'  //帮助中心
import tab2 from './components/tab2'  //帮助中心
import tab3 from './components/tab3'  //帮助中心
// import smzq from './pages/smzq'

// 定义路由配置
const routes = [
	{
		path: '/',
		component: Home
	},
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Detail',
    component: Detail
  },
  {
    path: '/my',
    component: my
    // children:[{path:'address',component:address}]
  },
	{
		path: '/xinge',
		component: xinge
	},
  {
    path: '/address',
    component:address
  },
  {
    path: '/newaddress',
    component:newaddress
  },
  {
    path: '/collection',
    component:collection
  },
  {
    path:'/setup',
    component:setup
  },
  {
    path:'/personal',
    component:personal
  },
  {
    path:'/bind',
    component:bind
  },
  {
    path:'/notice',
    component:notice,
    children:[
      {
        path:'noticecent',
        component:noticecent
      },
      {
        path:'noticeList',
        component:noticeList
      },
      {
        path:'noticedetils',
        component:noticedetils
      }
    ]
  },
  {
    path:'/order',
    component:order
  },
  {
    path:'/orderDetails',
    component:orderDetails
  },{
    path:'/logistics',
    component:logistics
  },
  {
    path:'/afterSale',
    component:afterSale
  },
  {
    path:'/sale',
    component:sale 
  },
  {
    path:'/evaluate',
    component:evaluate 
  },
  {
    path:'/sou',
    component:sou 
  },
  {
    path:'/iphone',
    component:iphone 
  },
  {
    path:'/details',
    component:details 
  },
  {
    path:'/txdd',
    component:txdd 
  },
  {
    path:'/sppj',
    component:sppj 
  },
  {
    path:'/helpCenter',
    component:helpCenter 
  },
  {
    path:'/tab1',
    component:tab1 
  },
  {
    path:'/tab2',
    component:tab2 
  },
  {
    path:'/tab3',
    component:tab3
  }
]

// 创建路由实例
const router = new VueRouter({
	routes
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  	return {
  		transitionName: 'slide'
  	}
  },
  router,
  watch: {
  	// 监视路由，参数为要目标路由和当前页面的路由
  	'$route' (to, from){
  		const toDepth = to.path.substring(0, to.path.length-2).split('/').length
  		// 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
  		// 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
  		// 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
  		const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
  		this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
  		// 根据路由深度，来判断是该从右侧进入还是该从左侧进入
  	}
  }
})
