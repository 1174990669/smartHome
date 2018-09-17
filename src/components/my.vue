<!-- Home.vue -->
<template>
	<div class="container">
		<div class="div_back">
			<div class="div_name">
				<div class="block div_img"><img src="../../static/images/my/name.png" alt="#"></div>
				<div class="block div_nam">
					<p class="P_name">凌凌七</p>
					<p class="P_type "><span>ID:3254874</span><span class="sp_back">普通会员</span></p>
				</div>
			</div> 
			<div class="div_type">
				<ul class="ul_type">
					<li class="Li">
						<a href="">
							<p>8</p>
							<p>待收货</p>
						</a>
					</li>
					<li class="Li">
						<a href="">
							<p>12</p>
							<p>待评价</p>
						</a>
					</li>
					<li class="Li">
						<a href="">
							<p>5</p>
							<p>优惠价</p>
						</a>
					</li>
					<li class="Li">
						<a href="">
							<p>38</p>
							<p>收藏</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="div_order">
			<ul class="ul_order">
				<li class="Li_ord">
					<a href="">
						<p class="p_span"><img src="../../static/images/my/dfk.png" alt=""><span></span></p>
						<p class="p_top">待付款</p>
					</a>
				</li>
				<li class="Li_ord">
					<a href="">
						<p class="p_span"><img src="../../static/images/my/dsh.png" alt=""><span class="sp_link">4</span></p>
						<p class="p_top">待收货</p>
					</a>
				</li>
				<li class="Li_ord">
					<a href="">
						<p class="p_span"><img src="../../static/images/my/dpj.png" alt=""><span class="sp_link">4</span></p>
						<p class="p_top">待评价</p>
					</a>
				</li>
				<li class="Li_ord">
					<router-link to='/afterSale' tag='a'>
						<p class="p_span"><img src="../../static/images/my/sh.png" alt=""><span></span></p>
						<p class="p_top">退换/售后</p>
					</router-link>
				</li>
				<li class="Li_ord">
					<router-link to='/order' tag='a'>
						<p class="p_span"><img src="../../static/images/my/order.png" alt=""><span></span></p>
						<p class="p_top">我的订单</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="div_tel">
			<ul class="Ul_thre">
				<li class="Li_category">
					<a href="#">
						<p><img src="../../static/images/my/bz.png" alt=""></p>
						<p class="p_tit">帮助中心</p>
					</a>
				</li>
				<li class="Li_category">
					<router-link to="/address" tag='a'>
						<p><img src="../../static/images/my/shdz.png" alt=""></p>
						<p class="p_tit">收货地址</p>
					</router-link>
				</li>
				<li class="Li_category">
					<a href="#">
						<p><img src="../../static/images/my/yhj.png" alt=""></p>
						<p class="p_tit">优惠卷</p>
					</a>
				</li>
				<li class="Li_category">
					<router-link to='/Collection' tag='a'>
						<p><img src="../../static/images/my/wdsc.png" alt=""></p>
						<p class="p_tit">我的收藏</p>
					</router-link>
				</li>
				<li class="Li_category">
					<router-link to='/setup' tag='a'>
						<p><img src="../../static/images/my/sz.png" alt=""></p>
						<p class="p_tit">设置</p>
					</router-link>
				</li>
				<li class="Li_category">
					<router-link to='/notice/noticecent' tag='a'>
						<p><img src="../../static/images/my/wdxx.png" alt=""></p>
						<p class="p_tit">我的消息</p>
					</router-link>
				</li>
			</ul>
		</div>
		<homeNav></homeNav>
	</div>
</template>
<style scoped>
	.container{max-width: 640px;margin: 0 auto;}
	.container .div_back{width: 100%;height: 4.9rem;background: url(../../static/images/my/back.jpg);background-size: 100% 100%;}
	.container .div_back .div_name{padding-top:.5rem;}
	.container .div_back .div_name .block{display: inline-block;vertical-align: middle;}
	.container .div_back .div_name .div_img{width: 30%;text-align:right;}
	.container .div_back .div_name .div_img img{width:1.72rem;height: 1.72rem;border:4px solid #f18290;border-radius:50%;}
	.container .div_back .div_name .div_nam{width: 66%;padding-top:;}
	.container .div_back .div_name .P_name{font-size: .5rem;color: #fefefe;}
	.container .div_back .div_name .P_type{font-size: .34rem;color: #fefefe;padding-top:.2rem;}
	.container .div_back .div_name .P_type .sp_back{background: #bd4b47;padding:2px .2rem;border-radius:.14rem;margin-left: .2rem;color: #fefefe;font-size:.3rem;}
	.div_type{padding-top:.5rem;}
	.div_type .ul_type{}
	.div_type .ul_type .Li{width: 25%;text-align:center;}
	.div_type .ul_type .Li a{color: #fefefe;font-size: .34rem;}
	.div_type .ul_type .Li p{line-height: .6rem;}
	.div_order{background: #f3f4f5;padding:.24rem 0;} 
	.div_order .ul_order{width: 90%;margin:0 auto;background: #fff;padding:.5rem .2rem;box-shadow:0 3px 8px 0 #e6e6e6;border-radius:.2rem;} 
	.div_order .ul_order .Li_ord{width: 20%;text-align:center;} 
	.div_order .ul_order .Li_ord a{color: #1c1c1c;font-size: .3rem;} 
	.div_order .ul_order .Li_ord img{width:.8rem;} 
	.div_order .ul_order .Li_ord .p_span{position: relative;}
	.div_order .ul_order .Li_ord .sp_link{position: absolute;width: .4rem;height: .4rem;border:2px solid #e98284;color: #d7201c;border-radius:50%;line-height: .4rem;right: 0;top:-0.3rem;} 
	.div_order .ul_order .Li_ord .p_top{padding-top: .2rem;} 
	.div_tel{padding:.3rem 0 3rem;}
	.div_tel .Ul_thre{width: 90%;margin:0 auto;background: #fff;padding:.5rem .2rem;box-shadow:0 3px 8px 0 #e6e6e6;border-radius:.2rem;}
	.div_tel .Ul_thre .Li_category{width: 25%;text-align:center;}
	.div_tel .Ul_thre .Li_category a{color: #292929;font-size: .3rem}
	.div_tel .Ul_thre .Li_category img{width:1rem;height: 1rem;}
	.div_tel .Ul_thre .Li_category .p_tit{padding:.2rem 0 .4rem;}
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