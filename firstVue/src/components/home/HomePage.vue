<template>
	<div class="userHeader">
		<div class="header">
			<img class="img" v-bind:src="headerImg" alt="">
		</div>
		<p>首页</p>
	</div>
</template>

<style>
	.userHeader{
		padding-top: 1.2rem;
		padding-bottom: .2rem;
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
		font-size: 14px;
		}
	.userHeader .header{width: 100%;}
	.header .img{display: block;width: 100%;}

</style>

<script>
	
	export default{
		data() {
			return {
				headerImg: require('../../assets/img/home/header.png')
			}
		},
		components: {

		}
	}
</script>