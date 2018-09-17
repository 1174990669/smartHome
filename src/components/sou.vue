
<template>
	<div id="app">
	    <div class="tab">
	      <a href="#" @click="tabId=0" class="">前端框架</a>
	      <a href="#" @click="tabId=1" class="">Vue</a>
	      <a href="#" @click="tabId=2" class="">Angular</a>
	      <a href="#" @click="tabId=3" class="">React</a>
	    </div>
	    <div class="box">
	      <div v-show="tabId===0">111</div>
	     <div v-show="tabId===1">222</div>
	    <div v-show="tabId===2">333</div>
	     <div v-show="tabId===3">444</div>
	   </div>
    </div>
</template>
 <script>
	// import Swiper from 'swiper'
	import homeNav from '../components/homeNav'
	// import swipe from '../components/swipe'
	export default {
		data () {
			return {
				tabId:1
			}
		},
		mounted(){
			document.title = "我的订单"
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

<!-- <template>
	<div class="container">
		<div class="div_sou">
			<p><span class="sou_url"></span><input type="text" value="输入商品名称/订单编号"> </p><span class="span">取消</span>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .32rem;}
	.div_sou{}
	.div_sou .sou_url{}
	.div_sou input{}
	.div_sou .span{}
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
			document.title = "我的订单"
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
</script> -->