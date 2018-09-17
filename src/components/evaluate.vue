<!-- Home.vue -->
<template>
	<div class="container">
		<div class="evaluate">
			<div class="div_pj">
				<img class="imag" src="../../static/images/order/order1.jpg" alt="#">
				<p>评分</p>
				<!-- <p><img src="../../static/images/shop/pj.jpg" alt=""></p> -->
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .32rem;}
	.evaluate{background: #fff;}
	.evaluate .div_pj{padding:.3rem;}
	.evaluate .div_pj .imag{width: 2.2rem;height: 2.2rem;float: left;}
</style>
<script>
	// import Swiper from 'swiper'
	import homeNav from '../components/homeNav'
	// import swipe from '../components/swipe'
	export default {
		data () {
			return {
			}
		},
		mounted(){
			document.title = "评价晒单"
			$('.sale_ul li').click(function(){
				$(this).addClass('active').siblings().removeClass('active')
				$('.div_wai .div_bor').eq($(this).index()).show().siblings().hide()
			})
			
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>