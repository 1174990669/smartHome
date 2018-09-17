<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="div_head">
			<div class='div_address'>
				<p class='p_name'> <span>丛云</span>&nbsp;&nbsp;   1890809456</p>
				<p class='p_dz'>广东深圳市福田区北环大道7028深意汽车销售服务有限公司</p>
				<div class="div_p">
					<p class="p_block img_check act">
						<img class="img_click" src="../../static/images/my/address.jpg" alt="">
						<img class="img_src" src="../../static/images/my/address_2.jpg" alt="">
						<span>设为默认</span>
					</p>
					<p class="p_block"><img src="../../static/images/my/bian.jpg" alt=""><span>编辑</span></p>
					<p class="p_block shan"><img src="../../static/images/my/remov.jpg" alt=""><span>删除</span></p>
				</div>
			</div>
			<div class='div_address'>
				<p class='p_name'> <span>丛云</span>&nbsp;&nbsp;   1890809456</p>
				<p class='p_dz'>广东深圳市龙华新区牛栏前大厦</p>
				<div class="div_p">
					<p class="p_block img_check">
						<img class="img_click" src="../../static/images/my/address.jpg" alt="">
						<img class="img_src" src="../../static/images/my/address_2.jpg" alt="">
						<span>设为默认</span>
					</p>
					<p class="p_block"><img src="../../static/images/my/bian.jpg" alt=""><span>编辑</span></p>
					<p class="p_block shan"><img src="../../static/images/my/remov.jpg" alt=""><span>删除</span></p>
				</div>
			</div>
		</div>
		<footer class="footer">
			<router-link to='/newaddress' tag='div'>新增收货地址</router-link>
			<!-- <div></div> -->
		</footer>

		<!-- <div class="div_show">
			<div class="div_fff">
				<div class="div_title">新增收货地址 <img class="img_show" src="../../static/images/my/rem.png" alt=""></div>
				<div class="div_input">
					<p class="p_inp"><span>收货人</span><input type="text" placeholder="名字"></p>
					<p class="p_inp"><span>联系电话</span><input type="text" placeholder="手机或固定电话"></p>
					<p class="p_inp"><span>选择地区</span><input type="text" placeholder=""></p>
					<p class="p_inp"><span>详细地址</span><input type="text" placeholder="如街道，楼层，门牌号等"></p>
					<p class="p_inp"><span>邮政编码</span><input type="text" placeholder="邮政编码（选填）"></p>
				</div>
			</div>
			<button class="butt">保存</button>
		</div> -->
	</div>
</template>
<style scoped>
	.container{max-width: 640px;margin: 0 auto;overflow-x: hidden;}
	.div_address{font-size: .34rem;background: #fff;height: 3.3rem;padding:0 .36rem .2rem;border-bottom: .2rem solid #f3f4f5;}
	.div_address .p_name{font-weight: 600;color: #232323;padding-top: .5rem;padding-left:.2rem;}
	.div_address .p_dz{color: #6a6a6a;padding:.3rem 0;border-bottom: 1px solid #dddddd;padding-left:.2rem;}
	.div_address .div_p{color: #6a6a6a;padding-top:.14rem;} 
	.div_address .div_p .p_block{display: inline-block;} 
	.div_address .div_p .p_block:nth-of-type(1){width: 40%;padding-left:.2rem;} 
	.div_address .div_p .p_block:nth-of-type(2){width: 24%;padding-left:.2rem;} 
	.div_address .div_p .p_block:nth-of-type(3){width: 24%;padding-left:.2rem;} 
	.div_address .div_p .p_block img{width: .54rem;height: .54rem;} 
	.div_address .div_p .p_block span{padding-left: .2rem;} 
	
	.div_address .div_p .img_check{position: relative;}
	.div_address .div_p .img_check .img_src{position: absolute;left: .15rem;pointer-events: none;display: none;top:0;}
	.div_address .div_p .act .img_src{display: block;}
	.div_show{background: #fff;font-size: .3rem;position: fixed;height: 100%;background: rgba(0,0,0,0.4);width: 100%;bottom:0;display: none;}
	.div_show .div_fff{background: #fff;position: absolute;bottom: 0;width: 100%;border-bottom: 1px solid #ddd;padding-bottom:1.3rem;}
	.div_show .div_title{height: 1.1rem;line-height: 1.1rem;text-align: center;font-size: .34rem;border-bottom: 1px solid #dddddd;}
	.div_show .div_title img{float: right;}
	.div_show .div_input{font-size: .34rem;padding-left:.5rem;}
	.div_show .div_input .p_inp{border-bottom: 1px solid #ddd;line-height: 1rem;}
	.div_show .div_input .p_inp span{display: inline-block;width: 24%;color: #1e1e1e;}
	.div_show .div_input .p_inp input{width: 70%;height: .7rem;border:none;font-size: .34rem;color:#737373;}
	.div_show .butt{border:none;outline: none;height: 1rem;line-height: 1rem;}
	.footer,.butt{position: fixed;width: 100%;height: 1.4rem;background: #d02d34;color: #fff;bottom: 0;font-size: .4rem;text-align: center;line-height: 1.4rem;}
	
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
			document.title = "收货地址"
			$('.shan').click(function(){
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
			})
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