<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="personal_name">
			<ul class="personal_ul">
				<li><a href="#"><span>头像</span><img class="img_portrait" src="../../static/images/my/name.png" alt=""></a></li>
				<li><a href="#"><span>昵称</span><span class="a_span">凌凌七</span></a></li>
				<li><router-link to='/bind' tag='a'><span>绑定手机号码</span><span class="a_span">18812563968 ></span></router-link></li>
			</ul>
		</div>
		<div class="personal_img">
			<p>微信号 <span>wang360</span></p>
			<p>ID <span>wang360</span></p>
		</div>
	</div>
</template>
<style scoped>
	.container{max-width: 640px;margin: 0 auto;overflow-x: hidden;font-size: .3rem;}
	.personal_name{border-bottom:.2rem solid #f3f4f5;}
	.personal_name .personal_ul{padding:.1rem .3rem 0;background: #fff;}
	.personal_name .personal_ul li{width: 100%;border-bottom: 1px solid #e9e9e9;height: 1.4rem;line-height: 1.4rem;}
	.personal_name .personal_ul li:last-child{border:none;}
	.personal_name .personal_ul li a{color: #1a1919;font-size: .34rem;display: block;}
	.personal_name .personal_ul li a .a_span{color: #474747;float: right;padding-right:.1rem;}
	.personal_name .personal_ul .img_portrait{width: 1.3rem;height: 1.3rem;float: right;border-radius:50%;padding-right:.1rem;}

	.personal_img{padding:.1rem .3rem 0;background: #fff;}
	.personal_img p{border-bottom:1px solid #e9e9e9;line-height: 1.4rem;color: #1a1919;font-size: .34rem;}
	.personal_img p:last-child{border:none;}
	.personal_img p>span{color: #474747;float: right;padding-right:.1rem;}
	
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
			document.title = "个人资料"
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