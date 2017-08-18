<template>
	<div>
		<p>用户详情</p>
		<p>{{name + ': ' + type}}</p>
		<span v-once>{{ msg }}</span>
		<input v-model="msg" type="" name="" value="">
		<div v-html="rawHtml"></div>
		<div v-bind:id="id" v-bind:class="myclass">lllllllll</div>
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
				myclass: 'myclass'
			}
		},
		components:{

		}
	}
</script>