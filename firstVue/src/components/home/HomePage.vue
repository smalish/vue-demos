<template>
	<div class="userHeader">
		<div class="header">
			<img class="img" v-bind:src="headerImg" alt="">
		</div>

		<!-- 引入轮播组件 -->
		<slider-comp :slidersData="sliders"></slider-comp>
		
		<!-- 格子模块开始 -->
		<div class="table_section">
			<ul class="tab_list">
				<li class="tab_item" v-for="item in tab_list">
					<div class="item_div">
						<span class="name">{{item.name}}</span>
						<span class="sub_name">{{item.sub_name}}</span>
						<img class="img" :src="item.img" alt="">
					</div>
				</li>
			</ul>
		</div>
		<!-- 格子模块结束 -->
		

	</div>
</template>

<style lang='less'>
	@import '../../assets/css/HomePage.less';

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
	// 引入轮播组件
	import SliderComp from './SliderComp';

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

				],
				tab_list: [
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					},
					{
						name: '劲爆折扣',
						sub_name: '超值外卖',
						img: require('../../assets/img/home/tab_img.png')
					}
				]
			}
		},
		components: {
		    'slider-comp': SliderComp

		},
		methods: {
			
		}
	}
</script>