<!-- Home.vue -->
<template>
	<div class="container">

		<!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
		<!-- 
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
	import HomeFooter from './Footer'

	export default {
		data () {
			return {
				
			}
		},
		// 在components字段中，包含导入的子组件
		components: {
			HomeFooter
		}
	}
</script>