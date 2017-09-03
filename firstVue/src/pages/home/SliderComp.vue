<template>
		
	<!-- 轮播模块开始 -->
	<div class="swiper_section">
		<swipe class="my-swipe">
		  <swipe-item class="slide" v-for="(slider, key) in slidersData" >
		  	<ul class="list">
		  		<li class="item" v-for="(item, index) in slider.list" >
		  			<div class="icon_div"><img class="icon" :src="item.icon_img"></div>
		  			<span class="name">{{item.name}}</span>
		  		</li>
		  	</ul>
		  </swipe-item>
		</swipe>
	</div>
	<!-- 轮播模块结束 -->

</template>

<style lang="less">
	
	.swiper_section{
		width: 100%;height: 19rem;margin-bottom: 1rem;
		.my-swipe {
			height: 19rem;color: #fff;font-size: 30px;text-align: center;
			.slide{width: auto;background-color: #fff;color: #000;padding: .5rem .7rem 0rem .7rem;}
			.mint-swipe-indicators{bottom: 3px!important;}
			.mint-swipe-indicators .mint-swipe-indicator{background-color: #cccccc;}
			.mint-swipe-indicators .mint-swipe-indicator.is-active{background-color: #00b4c2;}
		}
	}
	
	.list{
		display: block;width: auto;overflow: hidden;list-style: none;
		.item{
			display: block;float: left;width: 20%;padding-top:1.4rem; 
			
		}
	}

	.item{
		.icon_div{
			display: block;width: 100%;height: 4.2rem;
			.icon{display: block;width: 4.2rem;height: 4.2rem;margin: 0 auto;}
		}
		.name{display: block;width: 100%;height: 2.3rem;line-height: 2.3rem;font-size: .6rem;color: #333333;}
	}
	
	

</style>

<script>
	//导入vue-swipe
	require('vue-swipe/dist/vue-swipe.css');

	// in ES6 modules
	import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		data() {
			return {

			}
		},
		props: ['slidersData'],
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