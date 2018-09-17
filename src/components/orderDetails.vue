<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="head">
			<div class="head_cent">
				<div class="div_one">
					<img class="one_img" src="../../static/images/order/order.jpg" alt="">
					<p class="p_type">交易成功</p>
					<p class="p_pj">等待客户评价</p>
				</div>
				<div class="div_two">
					<ul class="ul_type">
						<li class="li_gray li_red">待付款</li>
						<li class="li_gray li_red">待发货</li>
						<li class="li_gray li_red">待收货</li>
						<li class="li_gray cont">待评价</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="D_address">
			<img class="addre_img" src="../../static/images/order/map.jpg" alt="#">
			<p class="p_name">林小七<span> 135****2899</span></p>
			<p class="p_addre">广东省深圳市龙华区牛栏前大厦B2222</p>
		</div>
		<div class="div_shop">
			<div class="shop"><img class="shop_img" src="../../static/images/order/details.jpg" alt=""> <span>胡胡建材店 ></span></div>
			<div class="commodity">
				<img src="../../static/images/order/ord.jpg" alt="#">
				<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
				<p class="p_money">
					<span class="span_red">￥399.99</span>
					<span class="span_line">￥495.65</span>
					<span class="span_number">X1 </span>
				</p>
			</div>
		</div>
		<div class="div_kf">
			<p class="p_kf">
				<span class="sp_left">联系客服：</span>
				<!-- <span class="sp_right"> --><img src="../../static/images/order/kf.jpg" alt="">
			</p>
			<p class="p_kf">
				<span class="sp_left">订单编号：</span>
				<span class="sp_right">123456789</span>
			</p>
			<p class="p_kf">
				<span class="sp_left">下单时间：</span>
				<span class="sp_right">2017-09-20 16：00：00</span>
			</p>
			<p class="p_kf">
				<span class="sp_left">支付方式：</span>
				<span class="sp_right">微信支付</span>
			</p>
			<p class="p_kf">
				<span class="sp_left">快递单号：</span>
				<span class="sp_right">圆通快递1245645145</span>
			</p>
			<p class="p_kf">
				<span class="sp_left">备注：</span>
				<span class="sp_right">无</span>
			</p>
		</div>
		<div class="div_fix">
			<div class="d_money">
				<p><span>运费</span> <span class="sp_red">￥0.00/包邮</span></p>
				<p><span>实付金额</span> <span class="sp_red">￥399.99</span></p>
			</div>
			<div class="d_button">
				<button>删除订单</button>
				<button>再次购买</button>
				<button class="but_red">立即评价</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.head{background: #f0464d;padding:.4rem 0;}
	.head .head_cent{background: #fff;width: 90%;margin:0 auto;border-radius:.2rem;overflow: hidden;}
	.head .head_cent .div_one{height: 1.3rem;padding:.4rem 0 .4rem 1rem;}
	.head .head_cent .div_one .one_img{width: 1.3rem;height: 1.3rem;border-radius:50%;float: left;margin-right: .2rem;}
	.head .head_cent .div_one .p_type{color: #464646;padding:.2rem 0 .1rem;font-size: .34rem;}
	.head .head_cent .div_one .p_pj{color: #999;}

	.head .head_cent .div_two{background: #efefef;height: 1.4rem;line-height: 1.1rem;}
	.head .head_cent .div_two .ul_type{}
	.head .head_cent .div_two .ul_type li{position: relative;}
	.head .head_cent .div_two .ul_type li:after{content:'';position: absolute;bottom:0;width: .1rem;height: .1rem;border-radius:50%;left: 50%;}
	.head .head_cent .div_two .ul_type li:before{content:'';position: absolute;bottom:1px;width: 1.2rem;height:2px;right: -.6rem;}
	.head .head_cent .div_two .ul_type .li_gray{width: 25%;text-align: center;color: #5e5e5e;font-size: .34rem;}
	.head .head_cent .div_two .ul_type .li_red{color: #d82a23;}
	.head .head_cent .div_two .ul_type .li_gray:after{background:#5e5e5e;}
	.head .head_cent .div_two .ul_type .li_red:after{background:#d82a23;}
	.head .head_cent .div_two .ul_type .li_gray:before{background:#5e5e5e;}
	.head .head_cent .div_two .ul_type .li_red:before{background:#d82a23;}
	.head .head_cent .div_two .ul_type .cont:before{background: transparent;}

	.D_address{background: #fff;margin:.3rem 0;height: 1.8rem;font-size: .34rem;padding-left:.1rem;}
	.D_address .addre_img{float: left;height: 1.8rem;width: 1rem;}
	.D_address .p_name{padding:.2rem;}
	.D_address .p_addre{font-size: .3rem;}

	.div_shop{background: #fff;}
	.div_shop .shop{padding-left:.2rem;height: 1rem;line-height: 1rem;border-bottom:1px solid #dfdfdf;}
	.div_shop .shop .shop_img{width: .7rem;height: .8rem;}
	.div_shop .shop span{color: #3f3f3f;font-size: .34rem;}
	.div_shop .commodity{height: 2.14rem;padding:.2rem .2rem .4rem .2rem;}
	.div_shop .commodity img{width: 2.14rem;height: 2.14rem;float: left;margin-right: .2rem;}
	.div_shop .commodity .p_title{padding-bottom: .4rem;}
	.div_shop .commodity .p_money{color: #8f8f8f;}
	.div_shop .commodity .p_money .span_red{font-size:.34rem;color: #ef500e;}
	.div_shop .commodity .p_money .span_line{text-decoration: line-through; }
	.div_shop .commodity .p_money .span_number{float: right;}
	
	.div_kf{background: #fff;margin:.3rem 0;padding:.2rem .3rem;}
	.div_kf .p_kf{line-height:1rem;font-size: .34rem; }
	.div_kf .p_kf img{width: 2.2rem;height: .8rem;}
	.div_kf .p_kf .sp_left{display: inline-block;width: 25%;color: #7f7f7f; }

	.div_fix{background: #fff;}
	.div_fix .d_money{padding:.3rem;border-bottom:1px solid #dfdfdf;}
	.div_fix .d_money p{line-height: .8rem;color: #3f3f3f;font-size:.34rem;}
	.div_fix .d_money .sp_red{color: #d82a23;float: right;}
	.div_fix .d_button{text-align: right;padding:.3rem;}
	.div_fix .d_button button{height: 1rem;width: 2rem;color: #404040;background: #fff;border:2px solid #dcdcdc;border-radius:6px;font-size: .34rem;}
	.div_fix .d_button .but_red{background: #ff5e53;color: #fff;border:2px solid transparent;}
	
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
		created(){
			window.scrollTo(0,0)
		},
		mounted(){
			document.title = "订单详情"
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