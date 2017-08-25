<!-- HomeHeader.vue -->
<template>
	<footer class="footer">
	<!-- {selected: item.selected, item: true} -->
		<div v-for="(item, index) in list" v-bind:class="[{selected:item.selected}, 'item']" v-bind:style="{width: 100/list.length + '%'}" v-on:click="changePage(index)">
			<div class="item_div">
				<img class="img" v-bind:src="item.selected? item.imgSelected : item.imgSrc" >
				<span class="text">{{item.name}}</span>
			</div>
		</div>
	</footer>
</template>
<script type="text/javascript">
	
	export default {
		data(){
			return {
				list: [{
					name:'首页',
					imgSrc:  require('../assets/img/footer/home.png'),
					imgSelected: require('../assets/img/footer/userSelected.png'),
					selected: true,
					page: 'home'
				},{
					name:'附近',
					imgSrc: require('../assets/img/footer/near.png'),
					imgSelected: require('../assets/img/footer/userSelected.png'),
					selected: false,
					page: 'near'
				},{
					name:'逛一逛',
					imgSrc: require('../assets/img/footer/shopping.png'),
					imgSelected: require('../assets/img/footer/userSelected.png'),
					selected: false,
					page: 'near'
				},{
					name:'订单',
					imgSrc: require('../assets/img/footer/order.png'),
					imgSelected: require('../assets/img/footer/userSelected.png'),
					selected: false,
					page: 'near'
				},{
					name:'我的',
					imgSrc: require('../assets/img/footer/user.png'),
					imgSelected: require('../assets/img/footer/userSelected.png'),
					selected: false,
					page: 'near'
				},]
			}
		},
		methods:{
			changePage: function(cur_index, event){
				var that = this

				console.log('change page')
				// 交互修改
				this.list.forEach(function(item, index){
					if(index == cur_index){
						item.selected = true
						// 显示对应页面
						that.$router.push({ path: item.page })
					}else{
						item.selected = false
					}
				})
			}
		}
	}
</script>
<style>
	.footer{display: block;width: 100%;height: 4.85rem;overflow: hidden;border-top: 1px solid #b7b7b7;background-color: #ffffff;position: fixed;bottom: 0rem;left: 0rem;}
	.footer .item{float: left;display: block;height: 100%}
	.item .item_div{width: 100%;}
	.item .item_div .img{display: block;width: 2.35rem;height: 2.35rem;margin: 0 auto;margin-top: .65rem;}
	.item .item_div .text{display: block;width: 100%;line-height: 1.8rem;color: #a19e96;text-align: center;font-size: .6rem;}
	.selected .item_div .text{color:#06c1ad;}
</style>