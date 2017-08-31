// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'

// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);


// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 pages 下的 Home.vue 
import Home from './pages/Home'
import Detail from './pages/Detail'
import User from './pages/User'
import UserInfo from './pages/UserInfo'

import UserHome from './components/UserHome'
import UserComp1 from './components/UserComp1'

import HomePage from './components/home/HomePage'
import NearPage from './components/near/NearPage'


// 定义路由配置
const routes = [
	{
		path: '/',
		component: Home,
    children:[
      {path: '', component: HomePage},
      {path:'home', component: HomePage},
      {path:'near', component: NearPage},
    ]
	},
	{
		path: '/detail',
		component: Detail
	},
  {
    path: '/user',
    component: User,
    children: [
      {path: '', component: UserHome},
      {path:'comp1', component: UserComp1}
    ]
  },
  {
    path: '/user/info',
    component: UserInfo
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
