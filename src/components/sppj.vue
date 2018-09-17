<!-- Home.vue -->
<template>
	<div class="container">
		<div class="div_Subclass">
			<ul class="ul_li">
				<li class="li_acti"><i class="i_icon"></i>全部569</li>
				<li><i class="i_icon"></i>最新</li>
				<li><i class="i_icon"></i>好评560</li>
				<li><i class="i_icon"></i>中评1</li>
				<li><i class="i_icon"></i>差评8</li>
				<li><i class="i_icon"></i>有图127</li>
				<li><i class="i_icon"></i>追加评价13</li>
				<li><i class="i_icon"></i>视频晒单8</li>
				<li class="li_gray"><i class="i_icon"></i>质量不错7</li>
				<li class="li_gray"><i class="i_icon"></i>很舒服啊5</li>
			</ul>
		</div>
		<div class="div_centen">
			<div class="evaluate">
				<p class="p_my"><img src="../../static/images/my/name.png" alt=""> 凌凌七 <span>2017-11-05</span></p>
				<p class="text">不错</p>
				<img class="Img" src="../../static/images/order/order1.jpg" alt="">
				<img class="Img" src="../../static/images/order/order2.jpg" alt="">
				<img class="Img" src="../../static/images/order/order3.jpg" alt="">
			</div>
			<div class="div_zp">
				<p class="p_h5">购买51天后追评</p>
				<p class="p_text">全友就是棒，值得信赖，工人也安装细心，服务也好，质量也不错</p>
				<p class="p_gray">正向布皮沙发(1+3+转)</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.div_Subclass{background: #fff;padding:0 .3rem;}
	.div_Subclass .ul_li{}
	.div_Subclass .ul_li li{padding:.12rem .24rem;border:1px solid transparent;background: #ffefef;color: #333;border-radius:30px;margin:.2rem .2rem .2rem 0 ;}
	.div_Subclass .ul_li .li_acti{color: #e86565;border:1px solid #e86565;background: #fef4f3;}
	.div_Subclass .ul_li .li_gray{color: #a4a5a9;background: #f1f2f6;}
	.div_centen{background: #fff;padding:.3rem;}
	.div_centen .evaluate{}
	.div_centen .evaluate .p_my{height: 1rem;line-height: 1rem;color: #232323;}
	.div_centen .evaluate .p_my img{width: 1rem;height: 1rem;border:1px solid #e0e0e0;border-radius:50%;padding:1px;margin-right: .2rem;}
	.div_centen .evaluate .p_my span{float:right;color: #797979;}
	.div_centen .evaluate .text{padding:.5rem 0 .3rem;text-indent:.4rem;}
	.div_centen .evaluate .Img{width: 2.22rem;height: 2.22rem;}
	.div_centen .div_zp{padding-top:.6rem;}
	.div_centen .div_zp .p_h5{position: relative;padding-left: .2rem;color: #2d2d2d;font-weight: 600;}
	.div_centen .div_zp .p_h5:after{content: '';position: absolute;width: .1rem;height: 100%;left: 0;background: #f0250e;}
	.div_centen .div_zp .p_text{color: #2d2d2d;line-height: .6rem;padding:.2rem 0;}
	.div_centen .div_zp .p_gray{color: #858585;}
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
			document.title = "商品详情"
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