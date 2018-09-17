<template>
	<div>
		<div class="tab-title"> 
            <p @click="a='tab1'"><router-link to='/collectnewcars'>新车</router-link><em></em></p>
            <p @click="a='tab2'"><router-link to='/collectusedcars'>二手车</router-link><em></em></p>
            <p @click="a='tab3'"><router-link to='/collectproducts'>车品</router-link></p>
        </div>
			<tab1></tab1>
			<tab2></tab2>
			<tab3></tab3>
		<div class="tabs">
		    <!-- <component :is="current"></component> -->
		</div>
	</div>
</template>
<script>
	import tab1 from '../components/tab1'
	import tab2 from '../components/tab2'
	import tab3 from '../components/tab3'
export default {
	
	data (){
	    return {
	        a:'tab1'     //默认显示tab1子组件
	    }
	},
	components: {
		tab1,
		tab2,
		tab3
	}
}
</script>