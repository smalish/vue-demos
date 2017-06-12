<template id="template-home">
	<div>	
		<h5 @click="childEvent">{{ message }}</h5>
	  	<p>{{ msg }}</p>
	  	<input v-model="msg" />
	</div>
</template>

<script>
export default {
	props:['message'],
    data() {
        return {
            msg: 'Hello World!'
        }
    },
    methods: {
    	childEvent: function(){
    		console.log('childevent');
    		this.$emit('childevent');
    	}
    }
}
</script>

<style>
body {
    color: red;
}
</style>