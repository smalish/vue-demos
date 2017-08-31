<template>
	<div class="userHeader">
		<div class="header">
			<img class="img" v-bind:src="headerImg" alt="">
		</div>
		<div class="swiper_section">
			<swipe class="my-swipe">
			  <swipe-item class="slide">
			  	<div></div>
			  </swipe-item>
			  <swipe-item class="slide">slide2</swipe-item>
			  <swipe-item class="slide">slide3</swipe-item>
			</swipe>
		</div>
		

	</div>
</template>

<style>
	.swiper_section{
		width: 100%;
		height: 19rem;
		border-bottom: .9rem;
	}
	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	}

	.slide{
	  background-color: #fff;
	  color: #000;
	  padding: 2rem .7rem 0rem .7rem;
	}
	
	.swiper_section .mint-swipe-indicator{
		background-color: #cccccc;
	}
	.swiper_section .mint-swipe-indicator.is-active{
		background-color: #00b4c2;
	}
	
	/*本页样式*/
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
	//导入vue-swipe
	require('vue-swipe/dist/vue-swipe.css');

	// in ES6 modules
	import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		data() {
			return {
				headerImg: require('../../assets/img/home/header.png')
			}
		},
		components: {
		    'swipe': Swipe,
		    'swipe-item': SwipeItem
		},
		methods: {
			onSlideChangeStart (currentPage) {
				console.log('onSlideChangeStart', currentPage);
			},
			onSlideChangeEnd (currentPage) {
				console.log('onSlideChangeEnd', currentPage);
			}
		}
	}
</script>