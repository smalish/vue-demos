<template>
	<div>
		<p>用户信息</p>
	</div>
</template>

<style scoped type="text/css">
	 @import '../common/css/common.css';
</style>

<script type="text/javascript">
	export default{
		data(){
			return {
				
			}
		},
		filters: {
		    capitalize: function (value) {
		      if (!value) return 
		      value = value.toString()
		      return value.charAt(0).toUpperCase() + value.slice(1)
		    }
		},
		components:{

		}
	}
</script>