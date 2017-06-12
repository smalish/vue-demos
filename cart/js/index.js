var app = new Vue({
	el: '#app',
	data: {
		message: 'hello vue.js',
		isALLSelected: false,
		cartData: {

		  "list":[{
		    "name": "半小时漫画中国史（预售期间领券下单立减5元，数量有限，先到先得！当当独家赠送二混子签绘明信片，其实是一本严谨的极简中国史）",
		    "price":1.00,
		    "image": "http://img3x0.ddimg.cn/12/14/24242340-1_b_6.jpg",
		    "number": 1,
		    "selected": true,
		  },{
		    "name": "寻找时间的人（与《追风筝的人》《偷书贼》共同荣获美国年度最佳读物）",
		    "price": 2.00,
		    "image": "http://img3x8.ddimg.cn/13/30/24188188-1_b_3.jpg",
		    "number": 1,
		    "selected": false,
		  },{
		    "name": "寻找时间的人（与《追风筝的人》《偷书贼》共同荣获美国年度最佳读物）",
		    "price": 2.00,
		    "image": "http://img3x8.ddimg.cn/13/30/24188188-1_b_3.jpg",
		    "number": 1,
		    "selected": false,
		  },{
		    "name": "寻找时间的人（与《追风筝的人》《偷书贼》共同荣获美国年度最佳读物）",
		    "price": 2.00,
		    "image": "http://img3x8.ddimg.cn/13/30/24188188-1_b_3.jpg",
		    "number": 1,
		    "selected": false,
		  },{
		    "name": "寻找时间的人（与《追风筝的人》《偷书贼》共同荣获美国年度最佳读物）",
		    "price": 2.00,
		    "image": "http://img3x8.ddimg.cn/13/30/24188188-1_b_3.jpg",
		    "number": 1,
		    "selected": false,
		  }]
		},
	},
	//装载页面
	mounted: function(){
		// this.initData();

	},
	computed: {
		// 选中数量
		totalNumber: function(){
			var _this = this;
			var totalNumber = 0;
			this.cartData.list.forEach(function(value, key){
				if(value.selected){
					totalNumber += value.number;
				}
			});
			return totalNumber;
		},
		// 选中商品总价格
		totalMoney: function(){
			var _this = this;
			var totalMoney = 0;
			this.cartData.list.forEach(function(value, key){
				if(value.selected){
					totalMoney += value.price*value.number;
				}
			});
			return totalMoney;
		},
		// 是否全选
		isALLSelected: function(){

			this.cartData.list.forEach(function(value, key){
				if(!value.selected){
					return false;
				}
			});
			return true;
		}
		
	},
	methods: {
		//初始化页面数据
		initData: function(){
			// this.$http.get('data/cart.json').then(function(res){

			// });

		},
		//反选
		toggleSelect: function(e){
			var index = e.target.dataset.index;
			this.cartData.list[index].selected = !this.cartData.list[index].selected;
		},
		//全选，全不选
		toggleSelectAll: function(){
			var _this = this;
			this.isALLSelected = !this.isALLSelected;
			this.cartData.list.forEach(function(value, index){
				value.selected = _this.isALLSelected;
			});
		},
		//加减数量
		addNum: function(index){
			this.cartData.list[index].number++;
			console.log('add');
		},
		subNum: function(index){
			this.cartData.list[index].number--;
			console.log('sub');
		}
	}
});
