<!-- Home.vue -->
<template>
	<div class="container">
		<div class="sale_head">
			<ul class="sale_ul">
				<li class="active">未完成</li>
				<li>已完成</li>
			</ul>
		</div>
		<div class="div_wai">
			<div class="div_bor">
				<div class="asle_cent">
					<div class="div_head">
						<div><img src="../../static/images/shop/shop.png" alt="">奥坦斯旗舰店<span class="spa_right">待处理 </span></div>
					</div>
					<div class="sale_img">
						<img class="images" src="../../static/images/order/order1.jpg" alt="">
						<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
						<p class="p_money">
							<span class="span_red">￥399.99</span>
							<span class="span_line">￥495.65</span>
							<span class="span_number">X1 </span>
						</p>
					</div>
					<div class="div_but">
						<button class="but_th">提交退货信息</button>
						<button class="but_det">查看详情</button>
					</div>
				</div>
				<div class="asle_cent">
					<div class="div_head">
						<div><img src="../../static/images/shop/shop.png" alt="">奥坦斯旗舰店<span class="spa_right">退款成功 </span></div>
					</div>
					<div class="sale_img">
						<img class="images" src="../../static/images/order/order1.jpg" alt="">
						<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
						<p class="p_money">
							<span class="span_red">￥399.99</span>
							<span class="span_line">￥495.65</span>
							<span class="span_number">X1 </span>
						</p>
					</div>
					<div class="div_but">
						<button class="but_det">查看详情</button>
					</div>
				</div>
			</div>
			<div class="div_bor">
				<div class="asle_cent">
					<div class="div_head">
						<div><img src="../../static/images/shop/shop.png" alt="">奥坦斯旗舰店<span class="spa_right">退款成功 </span></div>
					</div>
					<div class="sale_img">
						<img class="images" src="../../static/images/order/order1.jpg" alt="">
						<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
						<p class="p_money">
							<span class="span_red">￥399.99</span>
							<span class="span_line">￥495.65</span>
							<span class="span_number">X1 </span>
						</p>
					</div>
					<div class="div_but">
						<button class="but_det">查看详情</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.sale_head{background: #fff;}
	.sale_head .sale_ul{text-align: center;height: 1.08rem;line-height: 1rem;border-bottom:1px solid #dfdfdf;}
	.sale_head .sale_ul li{padding:0 .3rem;}
	.sale_head .sale_ul .active{color: #ff5f53;border-bottom:4px solid #ff5f53;}
	.div_wai .div_bor{display: none;}
	.div_wai .div_bor:nth-of-type(1){display: block;}
	.asle_cent{background: #fff;margin-bottom: .3rem;padding:0 .1rem;}
	.asle_cent .div_head{height: 1rem;line-height: 1rem;border-bottom:1px solid #dfdfdf;}
	.asle_cent .div_head .spa_right{float: right;padding-right:.2rem;}
	.asle_cent .sale_img{height: 2.1rem;padding:.3rem 0;border-bottom:1px solid #dfdfdf;}
	.asle_cent .sale_img .images{width: 2.1rem;height: 2.1rem;float: left;margin-right: .3rem;}
	.asle_cent .sale_img .p_money{padding-top:.3rem;color: #8f8f8f;}
	.asle_cent .sale_img .p_money .span_red{color: #ef500e;font-size: .34rem;}
	.asle_cent .sale_img .p_money .span_line{text-decoration:line-through; }
	.asle_cent .sale_img .p_money .span_number{float: right;}
	.div_but{height: 1.26rem;line-height: 1.26rem;text-align: right;}
	.div_but button{margin-right: .2rem;padding:.1rem .2rem;background: #fff;color: #999;border:1px solid #999;border-radius:4px;}
	.div_but .but_det{background: #ff5d58;color: #fff;border:1px solid transparent;}
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
			document.title = "申请售后"
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