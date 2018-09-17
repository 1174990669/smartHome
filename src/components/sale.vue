<!-- Home.vue -->
<template>
	<div class="container">
		<div class="sale">
			<div class="dv_p">
				<p class="p_inp">
					<span>申请类型</span> 
					<select  class="Inp_right Brush">
						<option >我要退货退款</option>
						<option >我要退货</option>
					</select>
				</p>
				<p class="p_inp"><span>申请原因</span><input type="text" value='填写申请原因'></p>
				<p class="p_inp"><span>退款金额</span><span class="money">￥36</span></p>
				<p class="p_inp bor_no"><span>申请说明</span></p>
				<textarea name="" id="" cols="30" rows="10">请详细填写申请说明</textarea>
			</div>
		</div>
		<div class="div_tel">
			<p><span class="span_tel">联系电话</span> <input type="text" value="18898615888"></p>
		</div>
		<div class="div_sc">
			<p  class="p_img">上传凭证 <span class="sp_ts">(最多3张)</span></p>
			<div class="images">
				<span>
					<img src="../../static/images/shop/img.jpg" alt="">
				</span>
				<span>
					<img src="../../static/images/shop/but.jpg" alt="">
				</span>
			</div>
		</div>
		<div class="foot_but">
			<p class="p_center"><button>提交申请</button></p>
			<p class="p_gray">提示：退款金额不能超过商品售卖价格；商城不负责退货的运费；非产品问题，售出不退货</p>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .32rem;}
	.sale{background: #fff;border-bottom: 1px solid #dfdfdf;}
	.sale .dv_p{}
	.sale .dv_p .p_inp{height: 1.1rem;line-height: 1.1rem;border-bottom: 1px solid #dfdfdf;padding:0 .3rem;}
	.sale .dv_p .bor_no{border-bottom:0;}
	.sale .dv_p .p_inp span{padding-right:.6rem;}
	.sale .dv_p .p_inp select{border:none;height: .8rem;font-size: .3rem;}
	.sale .dv_p .p_inp input{height: .8rem;border:none;font-size: .3rem;}
	.sale .dv_p .p_inp .money{color: #f53f3f;}
	.sale .dv_p textarea{padding:0 .3rem;width: 92%;border:none;outline: none;resize: none;color: #7c7c7c;font-size:.3rem;}
	.div_tel{margin:.2rem 0;height: 1.2rem;line-height: 1.2rem;background: #fff;padding:0 .3rem;}
	.div_tel .span_tel{padding-right:.2rem;}
	.div_tel input{border:none;outline: none;background: #fff;height: .8rem;font-size: .34rem;}
	.div_sc{background: #fff;padding-left:.3rem;padding-bottom: .2rem;}
	.div_sc .p_img{padding:.4rem 0;}
	.div_sc .p_img .sp_ts{color: #949494;padding-left:.3rem;}
	.foot_but{padding:.3rem;border-bottom: 1px solid #dfdfdf;}
	.foot_but .p_center{text-align: center;}
	.foot_but button{background: #e32f37;color: #fff;width: 90%;border:none;outline: none;height: 1rem;border-radius: 4px;margin-bottom: .2rem;font-size: .32rem;}
	.foot_but .p_gray{color: #808080;line-height: .6rem;}
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