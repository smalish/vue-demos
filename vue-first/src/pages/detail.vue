<template>
	<div>	
		<home-header></home-header>
        <list ></list>
	</div>
</template>

<script>
import detailHeader from '../components/detailHeader.vue'


export default {

    data() {
        return {
            title: '详情'
        }
    },
    components: {
        'home-header': homeHeader,
        'list': list
    },
    methods: {
    	childEvent: function(){
    		
    	}
    }
}
</script>

<style>
body {
    color: red;
}
</style>