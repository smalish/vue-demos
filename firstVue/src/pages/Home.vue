<!-- Home.vue -->
<template>
	<div class="container">

		<!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
		<!-- <user-header></user-header>
		<home-header></home-header>

		<div class="content">
			<ul class="cont_ul">
				<list
					v-for="item in items"
					:price="item.price"
					:title="item.title">
				</list>
			</ul>			
		</div> -->
		<router-view></router-view>
		<!-- 页底组件 -->
		<home-footer></home-footer>
	</div>
</template>
<style scoped>
	.container {
		
	}
	
</style>
<script>
	// 导入要用到的子组件
	import UserHeader from '../components/UserHeader'
	import HomeHeader from '../components/HomeHeader'
	import HomeFooter from '../components/HomeFooter'
	import List from '../components/List'

	export default {
		data () {
			return {
				items: [
					{ price: "129.00", title: "大学" },
					{ price: "256.00", title: "中庸" },
					{ price: "399.00", title: "论语" },
					{ price: "998.00", title: "孟子" },
					{ price: "99.00", title: "道德经" },
					{ price: "89.00", title: "老子" },
					{ price: "188.00", title: "金刚经" },
					{ price: "209.00", title: "易筋经" },
				]
			}
		},
		// 在components字段中，包含导入的子组件
		components: {
			UserHeader,
			HomeHeader,
			List,
			HomeFooter
		}
	}
</script>