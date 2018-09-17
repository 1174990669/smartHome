<!-- Home.vue -->
<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>
<style scoped>
	button{outline: none;}
	/*.div_p_bottom p{}*/
</style>
<script>
	// 导入要用到的子组件 
	// import Swiper from 'swiper'
	import homeNav from '../components/homeNav'
	// import swipe from '../components/swipe'
	export default {
		data () {
			return {
			}
		},
		mounted(){
			document.title = "我的通知"
			/*$('.i_img').click(function(){
				$('.inp_iphone').val('')
			})*/
			
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>