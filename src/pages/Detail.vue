 
<template>
	 <div>
	 	设计类
	 	 <homeNav></homeNav>
	 </div>

</template>

<style  >
.content{
	font-size: 30px;
	color: red;
}
</style>

<script>
	import homeNav from '../components/homeNav'
	// import swipe from '../components/swipe'
	export default {
		data () {
			return {
			}
		},
		created(){
			window.scrollTo(0,0)
		},
		mounted(){
		
	    },
		components: {
			homeNav
			// swipe
		}
	}
</script>