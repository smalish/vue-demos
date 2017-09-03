<template>
	<div class="shoppingPage">
		<ul class="header">
			<li :class="['item', {selected: item.selected}]" v-for="item in tabData">{{item.name}}</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<style scoped lang="less">
	.shoppingPage{
		.header{
			display: block;width: 100%;list-style: none;border-bottom: 1px solid #e5e5e5;background-color: #fff;overflow: hidden;
			.item{display: block;width: 25%;height: 4.2rem;line-height: 4.2rem;float: left;border-bottom: 2px solid #fff;font-size: 1.6rem;color: #666666;text-align: center;}
			.selected{color: #06c1ae;border-bottom-color:#06c1ae;}
		}
	}

</style>

<script>
	
	export default{
		data() {
			return {
				tabData:{
					like: {
						name: '精选',
						selected: true,
						list: []
					},
					food: {
						name: '享美食',
						selected: false,
						list: []
					},
					out: {
						name: '出去浪',
						selected: false,
						list: []
					},
					movie: {
						name: '约电影',
						selected: false,
						list: []
					}
				}
			}
		},
		components: {

		}
	}
</script>