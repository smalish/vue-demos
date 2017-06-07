import Vue from 'Vue'
import Favlist from './components/Favlist.vue'
Vue.config.debug = true;//开启错误提示

window.onload = function () {

	// Vue.component('my-component', {
	//   template: Favlist
	// });

  new Vue({
      el: '#app',
      data: {
      	childTitle: '组件标题'
      },
      components: {
        'my-component': Favlist,
        // 'child1-component': {
        //         // 声明 props
        //         props: ['some'],
        //         template: '<div>{{some}}</div>',
        //         ready:function(){
        //             console.log(this.some)
        //         }
        // }
      },
      methods: {
      	myevent: function(){
      		alert('父组件事件');
      	}
      }

  });
}