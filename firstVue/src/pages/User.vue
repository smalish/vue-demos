<template>
	<div>
		<p>用户主页</p>
		<router-link to="info">跳转到用户详情</router-link>
		<router-link to="/user/comp1">显示视图1</router-link>
		<router-view></router-view>
	</div>
</template>

<style scoped type="text/css">
	 @import '../common/css/common.css';
</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				name: '小明',
				type: '编辑',
				msg: '不变',
				rawHtml: '<div>html字符串</div>',
				id: 'mydiv',
				myclass: 'myclass',
				message: 'hello'
			}
		},
		filters: {
		    capitalize: function (value) {
		      if (!value) return ''
		      value = value.toString()
		      return value.charAt(0).toUpperCase() + value.slice(1)
		    }
		},
		components:{

		}
	}
</script>