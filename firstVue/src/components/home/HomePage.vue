<template>
	<div class="userHeader">
		<!-- <div class="header">
			<img class="img" v-bind:src="headerImg" alt="">
		</div> -->
		<div class="swiper_section">
			<swipe class="my-swipe">
			  <swipe-item class="slide" v-for="(slider, key) in sliders" >
			  	<ul class="list">
			  		<li class="item" v-for="(item, index) in slider.list" >
			  			<div class="icon_div"><img class="icon" :src="item.icon_img"></div>
			  			<span class="name">{{item.name}}</span>
			  		</li>
			  	</ul>
			  </swipe-item>
			  <!-- <swipe-item class="slide">slide22222222222</swipe-item>
			  <swipe-item class="slide">slide3</swipe-item> -->
			</swipe>
		</div>
		

	</div>
</template>

<style scoped>
	.swiper_section{
		width: 100%;
		height: 19rem;
		border-bottom: 2.5rem;
	}
	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	}

	.slide{
		width: auto;
		background-color: #fff;
		color: #000;
		padding: .5rem .7rem 0rem .7rem;
	}
	.slide .list{display: block;width: auto;overflow: hidden;list-style: none;}
	.slide .list .item{display: block;float: left;width: 20%;padding-top:1.4rem; }
	.item .icon_div{display: block;width: 100%;height: 4.2rem;}
	.item .icon_div .icon{display: block;width: 4.2rem;height: 4.2rem;margin: 0 auto;}
	.item .name{display: block;width: 100%;height: 2.3rem;line-height: 2.3rem;font-size: .6rem;color: #333333;}
	
	.swiper_section .mint-swipe-indicator{
		background-color: #cccccc;
	}
	.swiper_section .mint-swipe-indicator.is-active{
		background-color: #00b4c2;
	}
	
	/*本页样式*/
	.home_page{
		padding-bottom: 4.9rem;
		width: 100%;
		margin: 0 auto;
		overflow-x: hidden;
		font-size: 14px;
		}
	.home_page .header{width: 100%;}
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
				headerImg: require('../../assets/img/home/header.png'),
				sliders: [
					{
						list:[
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
							{
								icon_img: require('../../assets/img/home/pic1.png'),
								name: '名称1'
							},
						]
					},
					{
						list:[
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							{
								icon_img: require('../../assets/img/home/pic2.png'),
								name: '名称2'
							},
							
						]
					},
					{
						list:[
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
							{
								icon_img: require('../../assets/img/home/pic3.png'),
								name: '名称3'
							},
						]
					}

				]
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