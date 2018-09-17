<!-- Home.vue -->
<template>
	<div class="container">
		<div class="shopcart"> 
			<div class="div_shopcart">
				<p class="p_title">共2个商品 <span class="sp_img"><img src="../../static/images/shopcart/remove.png" alt=""></span></p>
				<div class="centent">
					<ul class="ul_shop">
						<!-- <router-link to='/details' tag='li' class='Li'> -->
						<li class="Li">
							<div class="div_link"><img class="img_input" src="../../static/images/shopcart/check.jpg" alt=""></div>
							<router-link to='/details' tag='div' class='div_link'><img class="img_tu" src="../../static/images/order/order1.jpg" alt=""></router-link>
							<!-- <div class="div_link"><img class="img_tu" src="../../static/images/order/order1.jpg" alt=""></div> -->
							<div class="div_link">
								<router-link to='/details' tag='p' class='title' style="-webkit-box-orient: vertical;">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</router-link>
								<!-- <p class="title" ></p> -->
								<p class="p_gray">重量：3.3kg 颜色：黑灰色</p>
								<p class="p_money">
									<span class="sp_red">￥100.00</span>
									<span v-on:click='jian' class="sp_block">-</span>
									<span class="sp_block Number">1</span>
									<span v-on:click='jia' class="sp_block">+</span>
								</p>
							</div>
						</li>
						<!-- </router-link> -->
						<li class="Li">
							<div class="div_link"><img class="img_input" src="../../static/images/shopcart/check.jpg" alt=""></div>
							<div class="div_link"><img class="img_tu" src="../../static/images/order/order1.jpg" alt=""></div>
							<div class="div_link">
								<p class="title" style="-webkit-box-orient: vertical;">布艺沙发小户型北欧三人双人两人二人位小型休闲小沙发小客厅简约</p>
								<p class="p_gray">重量：3.3kg 颜色：黑灰色</p>
								<p class="p_money">
									<span class="sp_red">￥100.00</span>
									<span class="sp_block">-</span>
									<span class="sp_block ">1</span>
									<span class="sp_block">+</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="shopcart_fixed">
					<div class="D_block"><img class="img_checs" src="../../static/images/shopcart/checks.jpg" alt="#"><span>全选</span></div>
					<div class="D_block">
						<p class="p_right c_333">合计：<span class="sp_red">$2.00</span></p>
						<p class="p_right">不含运费</p>
					</div>
					<div class="D_block"><button class="but_sub">结算(2)</button></div>
				</div>
			</div>
		</div>
		
		<homeNav></homeNav>
	</div>
</template>
<style>
	/*.container{margin: 0 auto;}*/
	.shopcart{font-size: .3rem;}
	.shopcart .div_shopcart{background: url(../../static/images/my/back.jpg);background-size:100% 100%;width: 100%;height:3.6rem;}
	.shopcart .div_shopcart .p_title{color: #fff;padding:.5rem .3rem;height: .8rem;line-height: .8rem;font-size: .34rem;}
	.shopcart .div_shopcart .sp_img{display: inline-block;width: .8rem;height: .8rem;border-radius: 50%;background: #fff;text-align: center;line-height: .8rem;float: right;}
	.shopcart .div_shopcart .sp_img img{width:.4rem;height: .5rem;}
	.shopcart .centent{background: #fff;width: 90%;margin:0 auto;border-radius: 10px;overflow: hidden;}
	.shopcart .centent .ul_shop{padding-top: .3rem;}
	.shopcart .centent .ul_shop .Li{padding:.24rem .1rem;border-bottom:1px solid #dfdfdf;}
	.shopcart .centent .ul_shop .Li:last-child{border-bottom:0;}
	.shopcart .centent .ul_shop .Li .div_link{display: inline-block;}
	/*.shopcart .centent .ul_shop .Li .div_link:nth-of-type(1){width:9%;}*/
	/*.shopcart .centent .ul_shop .Li .div_link:nth-of-type(2){width: 39%;}*/
	.shopcart .centent .ul_shop .Li .div_link:nth-of-type(3){width:56%;float: right;}
	.shopcart .centent .ul_shop .Li .div_link .title{display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;}
	.shopcart .centent .ul_shop .Li .div_link .img_input{width: .54rem;height: .54rem;}
	.shopcart .centent .ul_shop .Li .div_link .img_tu{width: 2rem;height: 2rem;}
	.shopcart .centent .ul_shop .Li .div_link .p_gray{color: #838592;font-size: .3rem;padding:.2rem 0;}
	.shopcart .centent .ul_shop .Li .div_link .p_money{}
	.shopcart .centent .ul_shop .Li .div_link .p_money .sp_red{color: #d94843;}
	.shopcart .centent .ul_shop .Li .div_link .p_money .sp_block{display: inline-block;width: .6rem;height: .6rem;border:1px solid #838592;text-align: center;line-height: .6rem;font-size: .34rem;}
	.shopcart .centent .ul_shop .Li .div_link .p_money .sp_block input{width: 98%;border:none;outline: none;height: .4rem;text-align: center;}
	.shopcart_fixed{position: fixed;width: 96%;bottom:1.56rem;background: #fff;border-bottom:1px solid #dfdfdf;height: 1.3rem;padding:0 .3rem;}
	.shopcart_fixed .D_block{display: inline-block;vertical-align: middle;}
	.shopcart_fixed .D_block:nth-of-type(1){width: 32%;padding-top:.1rem;}
	.shopcart_fixed .D_block:nth-of-type(2){}
	.shopcart_fixed .D_block:nth-of-type(3){float: right;}
	.shopcart_fixed .D_block .img_checs{width: .56rem;height: .6rem;}
	.shopcart_fixed .D_block .but_sub{background:#ff5001;color: #fff;border:none;outline: none;width: 2.4rem;height:1.3rem;font-size: .34rem;}
	.shopcart_fixed .D_block .sp_red{color: #ff5001;font-weight: 400;font-size: .34rem;}
	.shopcart_fixed .D_block .p_right{text-align: right;color: #8c8c8c;padding-top:.1rem;}
	.shopcart_fixed .D_block .c_333{color: #484e4e;font-weight: 600;font-size:.4rem;}

</style>
<script>
	import homeNav from '../components/homeNav'
	export default {
		data () {
			return {
			}
		},
		methods:{
			jian(){
		    	if ($('.Number').text() <= 1) {
		    		$('.Number').text('1')
		    	}else{
		    		$('.Number').text(parseInt($('.Number').text()) - 1)
		    	}
		    },
		    jia(){
		    	$('.Number').text(parseInt($('.Number').text()) + 1)
		    	// $(this).siblings().
		    }
		},
		mounted(){
			// $('.li_tit').click(function(){
			// 	$(this).addClass('activ').siblings().removeClass('activ')
			// 	$('.div_img .center').eq($(this).index()).show().siblings().hide();
			// })
			// $('.li_img').click(function(){
			// 	$('.div_img').toggle()
			// 	// $('.div_img').toggle(300)
			// })
	    },
		components: {
			homeNav
			// swipe
		}
	}
</script>