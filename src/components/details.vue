<!-- Home.vue -->
<template>
	<div class="container i_url">
		<div class="div_set">
			<div class="hed div_video">
				<div class="shi">
					视频
				</div>
			</div>
			<div class="hed div_swi">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide"><img src="../../static/images/shopcart/swi.jpg" alt=""></div>
				        <div class="swiper-slide"><img src="../../static/images/shopcart/swi.jpg" alt=""></div>
				        <div class="swiper-slide"><img src="../../static/images/shopcart/swi.jpg" alt=""></div>
				    </div>
				    <div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
		<div class="vid_tit">
			<ul class="vid_ul" >
				<li v-on:click='vide' class="li_video"><img src="../../static/images/shopcart/san.png" alt="">视频</li>
				<li v-on:click='swip' class="li_swiper">图片</li>
			</ul>
		</div>
		<div class="div_money">
			<p>￥800.00</p>
		</div>
		<div class="div_centent">
			<h4 class="h4">定制窗帘 装饰中式复古牡丹绣花布帘 客厅卧室阳台中式窗帘布艺</h4>
			<p class="p_gray">定制窗帘 装饰中式复古牡丹绣花布帘 客厅卧室阳台中式窗帘布艺</p>
			<p class="p_sj"><img src="../../static/images/shopcart/spxq.jpg" alt="">精选商家</p>
			<p class="p_line"><span>选择</span> 颜色分类 <i class="i_icon"></i></p>
			<p class="p_line"><span>运费</span> 免运费 <i class="i_icon"></i></p>
			<p class="p_line"><span>发货</span> 广东深圳 <i class="i_icon"></i></p>
			<p class="p_line"><span>说明</span> 假一赔十 无忧售后 <i class="i_icon"></i></p>
		</div>
		<div class="div_sppj">
			<router-link to='/sppj' tag='p'><span class="sp_one">商品评价(3290)</span> <span class="sp_two">好评100%</span> <i class="i_icon"></i></router-link>
			<!-- <p><span class="sp_one">商品评价(3290)</span> <span class="sp_two">好评100%</span> <i class="i_icon"></i></p> -->
		</div>
		<div class="img_text">
			<p>图文详情</p>
			<img src="../../static/images/shopcart/det.jpg" alt="">
			<img src="../../static/images/shopcart/det2.jpg" alt="">
			<img src="../../static/images/shopcart/det3.jpg" alt="">
		</div>
		<div class="tj">
			<img src="../../static/images/shopcart/icon.jpg" alt="">
		</div>
		<div class="d_deta">
			<ul class="ul_details">
				<li class="deta_li">
					<img src="../../static/images/shopcart/details1.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
				<li class="deta_li">
					<img src="../../static/images/shopcart/details2.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
				<li class="deta_li">
					<img src="../../static/images/shopcart/details3.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
				<li class="deta_li">
					<img src="../../static/images/shopcart/details4.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
				<li class="deta_li">
					<img src="../../static/images/shopcart/details6.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
				<li class="deta_li">
					<img src="../../static/images/shopcart/details5.jpg" alt="">
					<p class="p_text" style="-webkit-box-orient: vertical;">卧房家具榻榻米床定制现代简约板式大礼包</p>
					<p class="p_span">
						<span class="sp_red">￥399.99</span>
						<span class="sp_line">￥499.99</span>
						<span class="sp_pl">986评论</span>
					</p>
				</li>
			</ul>
		</div>
		<footer class="foot">
			<ul>
				<li class="matop"><img src="../../static/images/shopcart/kf.jpg" alt=""><br/><span>客服</span></li>
				<li class="matop"><img src="../../static/images/shopcart/xq.jpg" alt=""><br/><span>收藏</span></li>
				<li class="li_gw" v-on:click='shopCart'>加入购物车</li>
				<router-link to='/txdd' tag='li' class='li_gm'>立即购买</router-link>
				<!-- <li class="li_gm">立即购买</li> -->
			</ul>
		</footer>

		<div class="div_shop">
			<div class="p_fixed">
				<div class="div_tilis">
					<p><img v-on:click='remov' class="img_X" src="../../static/images/shop/X.jpg" alt=""></p>
					<div class="div_heig">
						<img class="img_caht" src="../../static/images/order/order1.jpg" alt="">
						<p class="p_red">￥2299.00</p>
						<p class="p_gray">重量：0.42kg</p>
						<p class="p_gray">商品编号：0085456245465</p>
					</div>
					<p class="p_inek"><span class="sp_left">已选</span> <span class="sp_typ">红色 布 </span></p>
					<p class="p_inek">
						<span class="sp_left">颜色</span>
						<span class="sp_pad sp_active">红色</span>
						<span class="sp_pad">蓝色</span>
						<span class="sp_pad">白色</span>
					</p>
					<p class="p_inek">
						<span class="sp_left">类型</span>
						<span class="sp_pad sp_active">布</span>
						<span class="sp_pad">纱</span>
					</p>
					<p class="p_inek">
						<span class="sp_left">数量</span>
						<span v-on:click="jian" class="sp_solid">-</span>
						<span class="sp_solid Number">1</span>
						<span v-on:click="jia" class="sp_solid">+</span>
					</p>
				</div>
				<div class="div_but">
					<button>加入购物车</button><button class="but_gm">立即购买</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.shi{height: 9rem;width: 100%;}
	.swiper-container{width: 100%;height:9rem;margin: 0 auto;}
	.swiper-container img{width: 100%;height:9rem;}
	.div_set{}
	.div_set .div_video{display: none;}
	.vid_tit{position: absolute;top: 8rem;z-index: 999;left: 50%;transform: translate(-50%,-50%)}
	.vid_tit .vid_ul{text-align: center;}
	.vid_tit .vid_ul li{width: 1.7rem;height: .7rem;border-radius:30px;line-height: .7rem;}
	.vid_tit .vid_ul .li_video{background: #fefffe;color: #000;margin-right: .2rem;}
	.vid_tit .vid_ul .li_swiper{background: #d5485d;color: #fff;}
	.div_money{color: #de1f4b;font-size: .34rem;padding:.3rem ;background: #fff;border-bottom:1px solid #dfdfdf;}

	.div_centent{padding:.3rem ;background: #fff;}
	.div_centent .h4{line-height: .5rem;}
	.div_centent .p_gray{color: #8a8a8a;font-size: .26rem;padding:.2rem 0;line-height: .4rem;}
	.div_centent .p_sj{background: #f5f5f5;color: #676767;height: 1.1rem;line-height: 1.1rem;padding:0 0 .2rem .3rem;}
	.div_centent .p_sj img{width: .47rem;margin-right: .2rem;}

	.div_centent .p_line{line-height: 1rem;color: #676767;}
	.div_centent .p_line span{color: #010101;padding-right: .3rem;}
	.div_sppj{padding:0 .3rem;background: #fff;height: 1.3rem;line-height: 1.3rem;margin:.3rem 0;}
	.div_sppj .sp_one{color: #020202;display: inline-block;width: 70%;}
	.div_sppj .sp_two{color: #bb2e51;}

	.img_text{background: #fff;}
	.img_text p{height: 1.8rem;text-align: center;line-height: 1.8rem;border-bottom:1px solid #dfdfdf;}
	.img_text img{width: 100%;margin-bottom: .2rem;}
	.tj{}
	.tj img{width: 100%;}
	
	.d_deta{padding:.1rem;background: #fff;}
	.d_deta .ul_details{padding-bottom:1.5rem;}
	.d_deta .ul_details .deta_li{width: 49%;padding-bottom:.2rem;}
	.d_deta .ul_details .deta_li:nth-of-type(2n+0){padding-left:.1rem;}
	.d_deta .ul_details .deta_li img{width: 100%;}
	.d_deta .ul_details .deta_li .p_text{display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;padding:.1rem;}
	.d_deta .ul_details .deta_li .p_span{width: 100%;padding:.1rem;font-size: .24rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
	.d_deta .ul_details .deta_li .p_span .sp_red{color: #e45418;font-size: .3rem;}
	.d_deta .ul_details .deta_li .p_span .sp_line{color: #898989;text-decoration: line-through;}
	.d_deta .ul_details .deta_li .p_span .sp_pl{color: #969696;}
	
	.foot{position: fixed;width: 100%;height: 1.5rem;background: #fff;border-top: 1px solid #dfdfdf;bottom: 0;}
	.foot ul{height: 1.5rem;}
	.foot ul li{height: 1.5rem;width: 25%;vertical-align: top;text-align: center;}
	.foot img{width: .6rem;height: .6rem;}
	.foot .matop{margin-top: .24rem;}
	.foot .li_gw{background: #ffb03f;color: #fff;line-height: 1.5rem;}
	.foot .li_gm{background: #ff6054;color: #fff;line-height: 1.5rem;}

	.div_shop{position: fixed;height: 100vh;width: 100%;background: rgba(0,0,0,0.5);top:0;z-index: 999;display: none}
	.div_shop .p_fixed{position: fixed;width: 100%;bottom:0;}
	.div_shop .div_tilis{padding:.3rem;background: #fff;}
	.div_shop .div_tilis .div_heig{height:3rem;}
	.div_shop .div_tilis .div_heig .p_red{color: #cd2956;padding:.6rem 0 .3rem;font-size: .34rem;}
	.div_shop .div_tilis .div_heig .p_gray{color: #989898;padding-top:.3rem;}
	.div_shop .div_tilis .img_caht{width: 2.6rem;height: 2.4rem;border:1px solid #dfdfdf;padding:.2rem 0;border-radius:4px;float: left;margin-right: .2rem;}
	.div_shop .div_tilis .img_X{width: .6rem;height: .6rem;float: right;}
	.div_shop .div_tilis .sp_left{color: #676767;padding-right: .2rem;}
	.div_shop .div_tilis .p_inek{line-height: .9rem;color: #010101;}
	.div_shop .div_tilis .p_inek .sp_pad{padding:.1rem .2rem;border:1px solid transparent;}
	.div_shop .div_tilis .p_inek .sp_active{border:1px solid #f3302e;color: #f3302e;border-radius:4px;}
	.container{font-size: .32rem;overflow: hidden;}
	.i_url .i_icon{float: right;background: url(../../static/images/shopcart/rig.png);background-size: 100% 100%;display: inline-block;width: .3rem;height: .5rem;margin-top: .26rem;}
	.div_shop .div_tilis .p_inek .sp_solid{border:1px solid #dfdfdf;display:inline-block;width: .6rem;height: .6rem;text-align: center;line-height: .6rem;}
	.div_sppj .i_icon{margin-top: .4rem;}

	.div_but{}
	.div_but button{background: #ffb03f;color: #fff;width: 50%;outline: none;border:none;height: 1.3rem;font-size: .34rem;}
	.div_but .but_gm{background: #ff5f53;}
</style>
<script>
	import Swiper from 'swiper'
	import homeNav from '../components/homeNav'
	import swipe from '../components/swipe'
	export default {
		data () {
			return {
			}
		},
		methods: {
		    vide(){
		    	$('.div_video').show().siblings().hide()
		    },
		    swip(){
		    	$('.div_swi').show().siblings().hide()
		    },
		    shopCart(){
		    	$('.div_shop').show()
		    },
		    remov(){
		    	$('.div_shop').hide()
		    },
		    jian(){
		    	if ($('.Number').text() <= 1) {
		    		$('.Number').text('1')
		    	}else{
		    		$('.Number').text(parseInt($('.Number').text()) - 1)
		    	}
		    },
		    jia(){
		    	$('.Number').text(parseInt($('.Number').text()) + 1)
		    }
		},
		mounted(){
			document.title = "商品详情"
			new Swiper ('.swiper-container', {
			    loop: true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
		    })  
		    $('.sp_pad').click(function(){
		    	$(this).addClass('sp_active')
		    	console.log($('.sp_active').text())
		    	$('.sp_typ').text($('.sp_active').text())
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
			homeNav,
			swipe
		}
	}
</script>