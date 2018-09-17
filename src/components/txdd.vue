<!-- Home.vue -->
<template>
	<div class="container">
		<header>
			<div class="div_name">
				<p class="nam">林小七 135****2899 <span>默认</span></p>
				<p class="address"><img src="../../static/images/shop/orders.jpg" alt="#">深圳市龙华区民治大道牛栏前大厦B2121</p>
			</div>
			<div class="div_right_i"><i class="i_icon"></i></div>
			<div class="div_img"> <img src="../../static/images/shop/tj.jpg" alt=""></div>
		</header>	
		<div class="div_detai">
			<img class="img_picture" src="../../static/images/order/order1.jpg" alt="">
			<p class="p_title" style="-webkit-box-orient: vertical;">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
			<p class="span">
				<span class="sp_red">￥399.99</span> 
				<span class="sp_line">￥495.65</span> 
				<span class="sp_rig">2.8200kgX1</span>
			</p>
			<p class="img_icon"><img class="wi_6" src="../../static/images/shop/xian.jpg" alt=""><img src="../../static/images/shop/event.jpg" alt=""></p>
		</div>	
		<div class="div_zf">
			<div class="div_top">
				<p class="wi_9 pa_bom">商品金额<span class="sp_red">￥399.00</span></p>
				<p class="wi_9">运费(总重：1.978kg)<span class="sp_red">包邮</span></p>
				<!-- <p><img src="../../static/images/shopcart/rig.png" alt=""></p> -->
			</div>
			<div class="div_bottom">
				<p class="pad_bot">选择支付方式</p>
				<p class="p_666"><img class="im_wx" src="../../static/images/shop/wx.jpg" alt=""><span>微信支付</span><img class="im_cg" src="../../static/images/shop/tjdd.jpg" alt=""></p>
			</div>
		</div>
		<div class="div_footer">
			<p >实付款：￥329.00 <span>提交订单</span></p>
		</div>
	</div>
</template>
<style scoped>
	header{background: #fff;}
	header .div_name{height: 2.5rem;display: inline-block;width: 92%;}
	header .div_name .nam{color: #555555;font-weight: 600;padding:.6rem 0 0 .76rem;}
	header .div_name .address{color: #828191;padding:.54rem 0 0 .4rem;}
	header .div_name .address img{width: .4rem;height: .4rem;margin-right: .1rem;}
	header .div_right_i{display: inline-block;width: 6%;margin-top: 1rem;vertical-align: top;}
	header .i_icon{background: url(../../static/images/shopcart/rig.png);background-size: 100% 100%;display: inline-block;width: .3rem;height: .5rem;}
	header .div_img{font-size: 0;}
	header .div_img img{width: 100%;}
	.div_detai{background: #fff;margin:.3rem 0;padding:.2rem;font-size: .3rem;height: 2.6rem;}
	.div_detai .img_picture{width: 2.6rem;height: 2.6rem;float: left;padding-right:.2rem;}
	.div_detai .p_title{display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;}
	.div_detai .span{color: #8d8d8d;padding-top: .4rem;font-size: .24rem;}
	.div_detai .sp_red{color: #ed520f;font-size: .3rem;}
	.div_detai .sp_line{text-decoration:line-through; font-size: .26rem;}
	.div_detai .sp_rig{float: right;}
	.div_detai .img_icon{padding-top: .2rem;}
	.div_detai .img_icon img{width: .5rem;height: .5rem;}
	.div_detai .img_icon .wi_6{width: .56rem;margin-right: .2rem;}

	.div_zf{background: #fff;padding:.3rem;color: #000;}
	.div_zf .div_top{padding-bottom:1rem;} 
	.div_zf .div_top .pa_bom{padding-bottom:.1rem;position: relative;}
	.div_zf .div_top .wi_9{padding-right:.4rem;}
	.div_zf .div_top .pa_bom:after{content: '';background: url(../../static/images/shopcart/rig.png);position: absolute;width: .3rem;height: .5rem;background-size: 100% 100%;right: 0;top:.2rem;}
	.div_zf .div_top .sp_red{color: #f63435;float: right;}

	.div_zf .div_bottom{} 
	.div_zf .div_bottom .pad_bot{padding-bottom:.2rem;} 
	.div_zf .div_bottom .p_666{} 
	.div_zf .div_bottom .p_666 .im_wx{width: .66rem;height: .56rem;margin-right: .2rem;} 
	.div_zf .div_bottom .p_666 .im_cg{width: .54rem;height: .54rem;float: right;} 
	.div_footer{position: fixed;width: 100%;height: 1.4rem;background: #fff;border-top:1px solid #dfdfdf;line-height: 1.4rem;bottom: 0;color: #ff5f53;}
	.div_footer p{padding-left:.6rem;font-weight: 600;}
	.div_footer span{float: right;padding:0 .6rem;background: #ff5f53;color: #fff;}
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
			document.title = "填写订单"
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