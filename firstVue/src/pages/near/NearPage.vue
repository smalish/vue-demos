<template>
	<div class="nearPage">
		<!-- 菜单模块开始 -->
		<div class="menuDiv" v-bind:style="{'height': menuHeight + 'px'}">
			<ul id="menuList" class="menuList" v-bind:style="transformObj">
				<li class="item" v-bind:class="{'selected' : item.selected}" v-for="item in menu" @click="selectType(item.id, $event)">{{item.value}}</li>
			</ul>
		</div>
		<!-- 菜单模块结束 -->

		<div class="contain">22222222222222222</div>


	</div>
</template>

<style scoped lang='less'>
	html,body{background-color: #ffffff!important;}
	.nearPage{position: relative;}
	.nearPage .menuDiv{display: block;overflow-y: scroll;position: fixed;left:0;top:0;width: 6rem;}
	.nearPage .menuList{display: block;background-color: #eee;border-right: 1px solid #eee;text-align: center;
		-webkit-transition-property:all;
	    -webkit-transition-duration:0.5s;
	    -webkit-transition-timing-function:ease-in;
	    transform: translateY(0px);
	}

	.nearPage .menuList .item{height: 45px;line-height: 45px;font-size: 13px;border-left: 3px solid #fafafa;border-right: 1px solid #e6e6e6;text-align: center;color: #4d525d;}
	.nearPage .menuList .selected{border: 1px solid #e6e6e6;border-left: 3px solid #ff2832;border-right-color: #fff;background-color: #fff;margin: -1px 0;color: #ff2832;}
	.contain{display: block;width: 100%;height: 70rem;background-color: #ffffff;}
</style>

<script>

	export default{
		data() {
			return {
				documentHeight: 0,//窗口高度
				menuHeight: 0,//菜单高度
				menuListHeight: 0,//菜单列表高度
				menuTransformY: 0,//菜单偏移高度
				transformObj:{},
				menu: [
					{id: 0, value: 'aaa', selected: true},
					{id: 1, value: 'bbb', selected: false},
					{id: 2, value: 'ccc', selected: false},
					{id: 3, value: 'ddd', selected: false},
					{id: 4, value: 'eee', selected: false},
					{id: 5, value: 'fff', selected: false},
					{id: 6, value: '111', selected: false},
					{id: 7, value: '222', selected: false},
					{id: 8, value: '333', selected: false},
					{id: 9, value: '444', selected: false},
					{id: 10, value: '555', selected: false},
					{id: 11, value: '666', selected: false},
					{id: 12, value: '777', selected: false},
					{id: 13, value: 'aaa', selected: false},
					{id: 14, value: 'bbb', selected: false},
					{id: 15, value: 'ccc', selected: false},
					{id: 16, value: 'ddd', selected: false},
					{id: 17, value: 'eee', selected: false},
					{id: 18, value: 'fff', selected: false},
					{id: 19, value: '111', selected: false},
					{id: 20, value: '222', selected: false},
					{id: 21, value: '333', selected: false},
					{id: 22, value: '444', selected: false},
					{id: 23, value: '555', selected: false},
					{id: 24, value: '666', selected: false},
					{id: 25, value: '777', selected: false},
				],
			}
		},
		components: {

		},
		beforeMount: function(){
			var that = this;

			that.documentHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
			console.log('documentHeight: ' + that.documentHeight);
			that.menuHeight = that.documentHeight - 0;
			that.menuListHeight = document.getElementById('menuList').offsetHeight;
			console.log('menuHeight: ' + that.menuHeight);

			console.log('beforeMount');

			// documentHeight: '0px',//窗口高度
			// menuHeight: '0px',//菜单高度

		},
		methods: {
			// 菜单选择
			selectType: function(selscted_id, event){
				var that = this;

				that.menu.forEach(function(value, index){
					if(value.id == selscted_id){
						value.selected = true;
					}else{
						value.selected = false;
					}
				});

				var max_y =  that.menuHeight;
				var clientY = that.menuTransformY + event.clientY;

				console.log('max_y: ' + max_y);
				console.log('clientY: ' + event.clientY);

				if(clientY > max_y){
					clientY = max_y;
				}else if(clientY < 0){
					clientY = 0;
				}

				that.setPosition(clientY);

			},
			// 设置菜单位置
			setPosition: function(clientY){
				var that = this;

				that.menuTransformY = clientY;
				that.transformObj = {
					'transform':'translateY('+ -clientY +'px)',
					'-ms-transform':'translateY('+ -clientY +'px)', 	/* IE 9 */
					'-moz-transform':'translateY('+ -clientY +'px)', 	/* Firefox */
					'-webkit-transform':'translateY('+ -clientY +'px)', /* Safari 和 Chrome */
					'-o-transform':'translateY('+ -clientY +'px)',	/* Opera */
				}


				console.log('clientY: ' + clientY);
			}


		}
	}
</script>
