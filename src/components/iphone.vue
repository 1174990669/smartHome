<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="div_iphone">
			<div class="D_solid"> 
				<span class="sp_img"><img src="../../static/images/img/iph.jpg" alt=""></span>
				<input class="inp_iphone" type="text" value="188-9861-2623"> 
				<span><img class="img_right" src="../../static/images/img/shan.jpg" alt=""></span>
			</div>
			<div class="D_solid"> 
				<span class="sp_img"><img src="../../static/images/img/iph.jpg" alt=""></span>
				<input class="" type="text" value="请输入验证码"> 
				<span><button class="but_right">获取验证码</button></span>
			</div>
			<div class="D_solid"> 
				<span class="sp_img"><img src="../../static/images/img/iph.jpg" alt=""></span>
				<input class="" type="text" value="邀请码"> 
			</div>

			<div class="div_w90">
				<button>确认绑定</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.div_iphone{padding:.2rem .3rem .4rem;background: #fff;}
	.div_iphone .D_solid{position: relative;border-bottom:1px solid #dfdfdf;height: 1.5rem;line-height: 1.5rem;}
	.div_iphone .D_solid .sp_img{display: inline-block;width:.7rem;padding-left:.2rem;}
	.div_iphone .D_solid .sp_img img{width: .5rem;height: .7rem;}
	.div_iphone .D_solid .sp_img .yzm{width: .7rem;height: .7rem;}
	.div_iphone .D_solid input{position: absolute;width: 3rem;height:.8rem;border:none;outline: none;font-size: .34rem;top:.5rem;color: #b3b3b3;}
	.div_iphone .D_solid .inp_iphone{color: #3b3b3b;}
	.div_iphone .D_solid .img_right{position: absolute;right: 0;width: .6rem;top:.6rem;}
	.div_iphone .D_solid .but_right{position: absolute;right: 0;color: #ff5e53;background: #fff;border:1px solid #ff5e53;outline: none;top:.44rem;padding:.14rem .3rem;font-size:.34rem;border-radius:6px;}
	.div_w90{padding-top:.8rem;}
	.div_w90 button{width: 100%;height: 1.2rem;background: #ff5e53;color: #fff;border:none;outline: none;border-radius:.4rem;font-size: .34rem;}
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
			document.title = "绑定手机"
			$('.img_right').click(function(){
				$('.inp_iphone').val('')
			})
			/*$('.shan').click(function(){
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
			})*/
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>