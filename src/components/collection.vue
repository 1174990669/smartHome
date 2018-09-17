<!-- Home.vue -->
<template>
	<div class="container">
		<div class="div_head">
			<ul class="ul_li">
				<li class="li_img">
					<a href="#">
						<img src="../../static/images/my/collection2.jpg" alt="">
						<p style="-webkit-box-orient: vertical;" class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发</p>
						<p class="p_span">
							<span class="sp_e75">￥399.99</span><span class="sp_gray">￥495.65</span>
							<span class="sp_pl">986评论</span>
						</p>
					</a>
				</li>
				<li class="li_img">
					<a href="#">
						<img src="../../static/images/my/collection3.jpg" alt="">
						<p style="-webkit-box-orient: vertical;" class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发</p>
						<p class="p_span">
							<span class="sp_e75">￥399.99</span><span class="sp_gray">￥495.65</span>
							<span class="sp_pl">986评论</span>
						</p>
					</a>
				</li>
				<li class="li_img">
					<a href="#">
						<img src="../../static/images/my/collection4.jpg" alt="">
						<p style="-webkit-box-orient: vertical;" class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发</p>
						<p class="p_span">
							<span class="sp_e75">￥399.99</span><span class="sp_gray">￥495.65</span>
							<span class="sp_pl">986评论</span>
						</p>
					</a>
				</li>
				<li class="li_img">
					<a href="#">
						<img src="../../static/images/my/collection1.jpg" alt="">
						<p style="-webkit-box-orient: vertical;" class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发</p>
						<p class="p_span">
							<span class="sp_e75">￥399.99</span><span class="sp_gray">￥495.65</span>
							<span class="sp_pl">986评论</span>
						</p>
					</a>
				</li>
			</ul>			
		</div>
	</div>
</template>
<style scoped>
	.container{max-width: 640px;margin: 0 auto;overflow-x: hidden;}
	.div_head{}
	.div_head .ul_li{padding:.3rem .1rem 0;}
	.div_head .ul_li .li_img{width: 49.5%;font-size: .3rem;padding-bottom:.2rem;}
	.div_head .ul_li .li_img:nth-of-type(2n+0){padding-left:1%;}
	/*.div_head .ul_li .li_img a{color: #;}*/
	.div_head .ul_li .li_img img{width:100%;}
	.div_head .ul_li .li_img .p_title{display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;width: 97%;padding:.1rem;color: #535353;line-height: .5rem;}
	.div_head .ul_li .li_img .p_span{}
	.div_head .ul_li .li_img .p_span span{font-size: .26rem;}
	.div_head .ul_li .li_img .p_span .sp_e75{color: #eb540b;font-size: .3rem;}
	.div_head .ul_li .li_img .p_span .sp_gray{color: #8e8e8e;text-decoration: line-through;}
	.div_head .ul_li .li_img .p_span .sp_pl{color: #8e8e8e;}

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
			document.title = "收货地址"
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
			/*$('.li_tit').click(function(){
				$(this).addClass('activ').siblings().removeClass('activ')
				$('.div_img .center').eq($(this).index()).show().siblings().hide();
			})
			$('.li_img').click(function(){
				$('.div_img').toggle()
				// $('.div_img').toggle(300)
			})*/
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>