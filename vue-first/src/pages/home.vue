<template>
	<div>	
        <div>首页内容</div>
		<myheader></myheader>
        <list ></list>
	</div>
</template>

<script>
 
import myheader from '../components/homeHeader'
import list from '../components/list.vue'

export default {

    data() {
        return {
            title: '主页'
        }
    },
    components: {
        'myheader': myheader,
        'list' : list
    },
    methods: {
    	
    }
}
</script>

<style>
body {
    color: red;
}
</style>