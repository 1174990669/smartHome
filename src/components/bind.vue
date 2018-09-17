<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="div_bind">
			<ul class="bind_ul">
				<li class="Li_iphone"><span>原手机号</span><input class="inp" type="text" value="188-9861-2623"></li>
				<li class="Li_iphone"><span>新手机号</span><input class="inp inp_iphone" type="text" value="188-9861-2623"> <i class="i_img"></i></li>
				<li class="Li_iphone"><span>验证码</span> <input type="text" placeholder="请输入手机验证码"> <button class="but">获取验证码</button></li>
			</ul>
		</div>
		<div class="div_but">
			<button class="button">确认绑定</button>
		</div>
	</div>
</template>
<style scoped>
	button{outline: none;}
	.container{max-width: 640px;margin: 0 auto;overflow-x:hidden;font-size: .3rem;}
	.div_bind{background: #fff;}
	.div_bind .bind_ul{padding:.1rem .3rem 0;}
	.div_bind .bind_ul .Li_iphone{width: 100%;border-bottom:1px solid #e9e9e9;height: 1.2rem;line-height: 1.2rem;}
	.div_bind .bind_ul .Li_iphone:last-child{border:none;}
	.div_bind .bind_ul .Li_iphone span{color: #303030;font-size: .32rem;display: inline-block;width:20%;}
	.div_bind .bind_ul .Li_iphone input{height: .8rem;font-size: .32rem;border:none;width: 40%;}
	.div_bind .bind_ul .Li_iphone .i_img{background: url(../../static/images/my/move.png);background-size: 100% 100%;display: inline-block;width: .8rem;height:1rem;float: right;margin-top: .1rem;}
	.div_bind .bind_ul .Li_iphone .but{color: #ff5e53;border:1px solid #ff5e53;border-radius:.1rem;background: #fff;padding:.1rem .3rem;font-size: .32rem;}
	.div_but{width: 90%;margin:.4rem auto 0;}
	.div_but .button{width:100%;height: 1rem;background: #ff5e53;border:none;border-radius:.1rem;color: #fff;font-size: .32rem;}
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
			document.title = "绑定手机号"
			$('.i_img').click(function(){
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