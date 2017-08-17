<template>
	<div class="userHeader">
		<router-link to="/userDetail" >
			<div class="user_div"><img src="http://img7x2.ddimg.cn/imghead/9/25/1021969521252-1_e.png?1502764762"></div>
		</router-link>
		<!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
	</div>
</template>

<style>
	.userHeader{
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
		font-size: 14px;
		}
	.userHeader .user_div{height:40px;}
	.userHeader .user_div img{display:block;width:40px;height:40px;border-radius:20px;margin:0 auto;}

</style>

<script>
	
	export default{
		data() {
			return {

			}
		},
		components: {

		}
	}
</script>