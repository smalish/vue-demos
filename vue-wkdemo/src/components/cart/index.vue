<template id="cart-index">
  <div>
      <!-- <img src="../../images/product.png"> -->
      <header>购物车{{message}}</header>
	    <ul class="list">
  			<li class="item" v-for="(item, index) in cartData.list">
  				<div class="left">
  					<span class="select_icon" v-on:click="toggleSelect" v-bind:data-index="index" v-bind:class="{selected: item.selected}"></span>
  					<img class="p_img" v-bind:src="item.image">
  				</div>
  				<div class="right">
  					<div class="p_name">{{item.name}}</div>
  					<div class="p_price">￥{{item.price}}</div>
  					<div class="edit_div">
  						<div class="num_div">
  							<span class="add_num" v-on:click="addNum(index)">+</span>
  							<input class="num_input" type="number" name="num" v-bind:value="item.number">
  							<span class="sub_num" v-on:click="subNum(index)">-</span>
  						</div>
  						<div class="delet_icon"></div>
  					</div>
  				</div>
  			</li>
  	
		</ul>

		<div class="footer" id="footer">
  			<div class="left">
  				<span class="select_all"  v-bind:class="{selected: isALLSelected}"></span>全选
  			</div>
  			<div class="right">
  				<div class="toBuy">结算（{{totalNumber}}）</div>
  				<div class="sum_price">合计：<span>￥{{totalMoney}}</span></div>
  			</div>
		</div>
  </div>
</template>

<script>
  export default {
    props:['message'],
      data() {
          return {
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
            }
          }
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
  }
</script>

<style>
  *{margin: 0px; padding: 0px;border: 0;}
  html{font-size:20px;background-color: rgb(255,255,255);}
  header{display: block;position: fixed;top: 0rem;width: 100%;height: 2rem;line-height: 2rem;background-color: white;font-size: .8rem;text-align: center;}
  .list{margin-top: 2rem;}
  .item{display: block;padding: 0rem 1rem 2rem 1rem;overflow: hidden;}
  .item .left{display: flex;align-items: center;float: left;overflow: hidden;width: 43%;}
  .item .select_icon{display: block;float: left;width: .9rem;height: .9rem;border: 1px solid rgb(159,159,159);border-radius: 2rem;}
  .item .selected, .footer .left .selected{background-color: rgb(255,83,91);}
  .item .p_img{display: block;float: left;width: 72%;margin-left: .5rem;}
  .item .right{display: block;float: left;overflow: hidden;width: 56%;}
  .item .right .p_name{font-size: 12px;color:rgb(50,50,50);line-height:.875rem; margin-left: .5rem;height: 2.625rem;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;text-overflow: ellipsis;overflow: hidden;}
  .item .right .p_price{font-size: 12px;color: rgb(255,40,50);line-height: 1.2rem; margin-left: .5rem;}
  .item .right .edit_div{overflow: hidden; margin-left: .5rem;padding-top: .3rem;}
  .edit_div .num_div{float: left;overflow: hidden;border: 1px solid rgb(159,159,159);border-radius: .2rem;font-size: 12px;line-height: .8rem;text-align: center;}
  .edit_div .num_div .add_num,.edit_div .num_div .sub_num{display: block;float: left;width: .8rem;height: .8rem;line-height: .8rem;}
  .edit_div .num_div .num_input{display: block;float: left;width: 1rem;height: .8rem;text-align: center;border-left: 1px solid rgb(159,159,159);border-right: 1px solid rgb(159,159,159);}
  .edit_div .num_div .sub_num{}
  .edit_div .delet_icon{display: block;float: right;width: 1rem;height: 1rem;/*background-image:url(../../images/edit.png);*/ background-repeat: no-repeat;background-size: 100% 100%;}
  .footer{display: block;position: fixed;z-index: 9;bottom: 0;left: 0;overflow: hidden;width:100%;height: 2.25rem;background: rgb(255,255,255);font-size: 12px;line-height: 2.25rem;color: rgb(50,50,50);}
  .footer .left{float: left;}
  .footer .left .select_all{display: block;float: left;margin: .6rem .25rem auto .5rem;width: .9rem;height: .9rem;border: 1px solid rgb(159,159,159);border-radius: .9rem;}
  .footer .right{float: right;overflow: hidden;}
  .footer .right .toBuy{width: 4.75rem;height: 2.25rem;float: right;background-color: rgb(255,83,91);color: rgb(255,255,255);text-align: center;}
  .footer .right .sum_price{float: right;color: rgb(50,50,50);margin-right: .25rem; }
  .footer .sum_price span{color:rgb(255,83,91);}
</style>