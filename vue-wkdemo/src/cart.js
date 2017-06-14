import Vue from 'Vue'
import cartTemp from './components/cart/index.vue'
import commonStyle from './css/common.css'

Vue.config.debug = true;//开启错误提示

window.onload = function () {

	// Vue.component('my-component', {
	//   template: Favlist
	// });

  new Vue({
      el: '#app',
      data: {
      	cartTitle: '标题'
      },
      components: {
        'my-component': cartTemp
      },
      methods: {
      	f_event: function(){
          alert('父组件');
        }
      }

  });
}