var app = new Vue({
	el: '#app',
	data: {
		message: 'hello vue.js',
		cartData: null,
	},
	//装载页面
	mounted: function(){
		//获取列表数据
		this.getData();
	},
	methods:{
		//获取列表数据
		getData: function(){
			var data_url = 'data/cart.json';
			this.$http.get(data_url).then(function(response){
				this.$set('cartData', response.list);
			});
		}
	}
});