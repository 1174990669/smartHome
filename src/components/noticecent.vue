<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="notice_div">
			<router-link to='/notice/noticeList' tag='div' class="div_link">
			<!-- <div class="div_link"> -->
				<div class="D_block wi_30"><img src="../../static/images/my/hw.jpg" alt=""></div>
				<div class="D_block wi_70">
					<p class="p_tit"><span class="span_title aft">茹洁号外</span><span class="right">20:50</span></p>
					<p class="p_text"><span>智能家居5折销售，机会不容错过！</span></p>
				</div>
			<!-- </div> -->
			</router-link>
			<div class="div_link">
				<div class="D_block wi_30"><img src="../../static/images/my/xt.jpg" alt=""></div>
				<div class="D_block wi_70">
					<p class="p_tit"><span class="span_title">系统消息</span><span class="right">20:50</span></p>
					<p class="p_text"><span>智能家居5折销售，机会不容错过！</span></p>
				</div>
			</div>
			<div class="div_link">
				<div class="D_block wi_30"><img src="../../static/images/my/wl.jpg" alt=""></div>
				<div class="D_block wi_70">
					<p class="p_tit"><span class="span_title">物流交易</span><span class="right">20:50</span></p>
					<p class="p_text"><span>智能家居5折销售，机会不容错过！</span></p>
				</div>
			</div>
			<div class="div_link">
				<div class="D_block wi_30"><img src="../../static/images/my/kf.jpg" alt=""></div>
				<div class="D_block wi_70">
					<p class="p_tit"><span class="span_title">客服聊天</span><span class="right">20:50</span></p>
					<p class="p_text"><span>智能家居5折销售，机会不容错过！</span></p>
				</div>
			</div>
		</div>
		
	</div>
</template>
<style scoped>
	button{outline: none;}
	.container{margin: 0 auto;font-size: .3rem;}
	.notice_div{background: #fff;}
	.notice_div .div_link{width: 90%;margin:0 auto;border-bottom:1px solid #dfdfdf;}
	.notice_div .div_link:last-child{border:none;}
	.notice_div .div_link .D_block{display: inline-block;vertical-align: middle;}
	.notice_div .div_link .wi_30{width:10%;}
	.notice_div .div_link .wi_70{width:88%;color: #747474;font-size: .32rem;}
	.notice_div .div_link .D_block .p_tit{padding-top: .6rem;}
	.notice_div .div_link .D_block .p_text{padding:.4rem 0;}
	.notice_div .div_link .D_block .right{float: right;}
	.notice_div .div_link .D_block .p_tit .span_title{color: #4c4b4b;position: relative;}
	.notice_div .div_link .D_block .p_tit .aft:after{content:'';position: absolute;top:-2px;right:-.2rem;width: .2rem;height: .2rem;background: red;border-radius:50%;}
	.notice_div .div_link .D_block img{width: .64rem;height: .9rem;margin-top:.2rem;}

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
			document.title = "我的通知"
			/*$('.i_img').click(function(){
				$('.inp_iphone').val('')
			})*/
			
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>