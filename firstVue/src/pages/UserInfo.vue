<template>
	<div>
		<p>用户信息</p>
	</div>
</template>

<style type="text/css">
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