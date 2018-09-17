<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="order">
			<ul class="order_ul">
				<li class="Li_active">全部</li>
				<li class="">待付款</li>
				<li class="">待发货</li>
				<li class="">待收货</li>
				<li class="">待评价</li>
			</ul>
			<div class="d_img">
				<img src="../../static/images/order/icon.jpg" alt="">
			</div>
		</div>
		<div class="order_center">
			<div class="div">
				<ul class="Ul">
					<router-link to='/orderDetails' tag='li' class='Li_center'>
					<!-- <li class="Li_center"> -->
						<div class="p_time"><p>2017-11-14 <span>待付款</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order1.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">取消订货</button>
							<button class="but_fk">立即付款</button>
						</div>
					<!-- </li> -->
					</router-link>
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>已发货</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order2.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<router-link to='/logistics' tag='button' class="but_qx">查看物流</router-link>
							<!-- <button class="but_qx">查看物流</button> -->
							<button class="but_fk">确认收货</button>
						</div>
					</li>
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>已发货</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order3.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">查看物流</button>
							<button class="but_fk">确认收货</button>
						</div>
					</li>
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>交易成功</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order4.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">删除订单</button>
							<button class="but_fk">评价晒单</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="div">
				<ul class="Ul">
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>待付款</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order1.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">取消订货</button>
							<button class="but_fk">立即付款</button>
						</div>
					</li>
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>待付款</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order1.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">取消订货</button>
							<button class="but_fk">立即付款</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="div">
				<ul class="Ul">
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>待发货</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order1.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">取消订货</button>
							<button class="but_fk">立即付款</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="div">
				<ul class="Ul">
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>已发货</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order2.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">查看物流</button>
							<button class="but_fk">确认收货</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="div">
				<ul class="Ul">
					<li class="Li_center">
						<div class="p_time"><p>2017-11-14 <span>交易成功</span></p></div>
						<div class="div_content">
							<img class="img" src="../../static/images/order/order4.jpg" alt="#">
							<p class="p_title">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
							<p class="p_money">
								<span class="span_red">￥399.99</span>
								<span class="span_line">￥495.65</span>
								<span class="span_number">X1 </span>
							</p>
						</div>
						<div class="div_but">
							<button class="but_qx">删除订单</button>
							<button class="but_fk">评价晒单</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.order{position: fixed;top:0;width: 100%;}
	.order .order_ul{background: #fff;height: 1rem;line-height: 1rem;border-bottom:1px solid #dfdfdf;padding:0 .2rem 2px;color: #565656;}
	.order .order_ul li{width: 20%;text-align: center;}
	.order .order_ul .Li_active{color: #ff6253;border-bottom:2px solid #ff6253;}
	.order .d_img img{width: 100%;}
	.order_center{background: #fff;padding-top: 1.8rem;}
	.order_center .div{display: none;}
	.order_center .div:nth-of-type(1){display: block;}
	.order_center .div .Ul{padding:0 .1rem;}
	.order_center .div .Ul .Li_center{border-bottom:.2rem solid #f3f4f5;}
	.order_center .div .Ul .Li_center:last-child{border-bottom:none;}
	.order_center .div .Ul .Li_center .p_time{color: #272727;border-bottom:1px solid #dfdfdf;}
	.order_center .div .Ul .Li_center .p_time p{height: .96rem;line-height: .96rem;padding:0 .3rem;}
	.order_center .div .Ul .Li_center .p_time span{float: right;}
	.order_center .div .Ul .Li_center .div_content{padding:.3rem 0;height: 2.1rem;border-bottom:1px solid #dfdfdf;}
	.order_center .div .Ul .Li_center .div_content .img{width: 2.1rem;height: 2.1rem;float:left;margin-right: .2rem;}
	.order_center .div .Ul .Li_center .div_content .p_title{color: #272727;}
	.order_center .div .Ul .Li_center .div_content .p_money{color: #8e8e8e;padding-top: .5rem;}
	.order_center .div .Ul .Li_center .div_content .p_money .span_red{color: #eb5115;}
	.order_center .div .Ul .Li_center .div_content .p_money .span_line{text-decoration: line-through;}
	.order_center .div .Ul .Li_center .div_content .p_money .span_number{float: right;}
	.order_center .div .Ul .Li_center .div_but{height: 1.2rem;line-height: 1.2rem;text-align: right;padding-right:.2rem;}
	.order_center .div .Ul .Li_center .div_but button{padding:.1rem .4rem;font-size: .3rem;margin-right: .2rem;}
	.order_center .div .Ul .Li_center .div_but .but_qx{border:1px solid #999;background: #fff;border-radius:6px;color: #999;}
	.order_center .div .Ul .Li_center .div_but .but_fk{border:1px solid transparent;background: #ff5f53;color: #fffaf4;border-radius:6px;}

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
			document.title = "我的订单"
			$('.order_ul li').click(function(){
				$(this).addClass('Li_active').siblings().removeClass('Li_active')
				$('.order_center .div').eq($(this).index()).show().siblings().hide()
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