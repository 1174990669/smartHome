<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<header class="header"><img src="../../static/images/my/07_02.jpg" alt=""></header>
		<div class="div_center">
			<p class="p_span"><!-- <span>收货人姓名</span> --><input type="text" placeholder='收货人姓名'></p>
			<p class="p_span"><!-- <span>手机号码</span> --><input type="text" placeholder="手机号码"></p>
			<p class="p_span"><!-- <span>所在地区</span> --><input type="text" placeholder="所在地区"></p>
			<p class="p_span"><!-- <span>街道，小区门牌等详细地址</span> --><textarea name="" id="texta" cols="30" rows="10" placeholder="街道，小区门牌等详细地址"></textarea></p>
		</div>
		<div class="div_but">保存</div>
	</div>
</template>
<style scoped>
	.container{max-width: 640px;margin: 0 auto;overflow-x: hidden;font-size: .3rem;}
	.header{}
	.header img{width: 100%;}
	.div_center{width: 90%;margin:.3rem auto 0;background: #fff;border-radius:.2rem;overflow: hidden;}
	.div_center .p_span{border-bottom:1px solid #eee;text-indent:.2rem;}
	.div_center .p_span:last-child{border:0;height: 1.8rem;}
	/*.div_center .p_span span{width: }*/
	.div_center .p_span input{width: 100%;border:none;height: 1rem;font-size: .3rem;color: #868686;}
	#texta{width: 100%;outline: none;border:none;font-size: .3rem;color: #868686;height: 1.4rem;padding-top: .3rem;color: #868686;}
	.div_but{width:90%;margin:.8rem auto 0;background: #ff5f53;color: #fff;font-size: .4rem;text-align: center;border-radius:.2rem;line-height: 1rem;}
	
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
			document.title = "新增收货地址"
			$('.shan').click(function(){
				$(this).closest(".div_address").hide()
			})
			$('.img_check').click(function(){
				$(this).toggleClass('act')
				// $(this).find('img').attr('src','')
			})
			$('.footer').click(function(){
				$('.div_show').show()
				$('.img_show').click(function(){
					$('.div_show').hide()
				})
				$('.butt').click(function(){
					$('.div_show').hide()
				})
			})
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>