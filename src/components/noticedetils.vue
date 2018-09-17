<!-- Home.vue -->
<template>
	<div class="container pad_bottom">
		<!-- <router-view></router-view> -->
		<div class="div_deta">
			<div class="details">
				<p class="title">通知标题</p>
			</div>
			<div class="deta_cent">
				<p class="p_gray"><span> 来源:茹洁智能家居 </span>&nbsp;&nbsp;<span>2018.08.29 上午10:00</span></p>
				<p class="p_text">       
					智能家居,厂家直接招商,产品终端输送,一对一上门带店.智能家居,享受智能生活,从现在做智能家居 代理开始,先享受先挣钱。智能家居,厂家直接招商,产品终端输送,一对一上门带店.智能家居,享受智能生活,从现在做智能家居 代理开始,先享受先挣钱
				</p>
       			<p class="p_text">智能家居,厂家直接招商,产品终端输送,一对一上门带店.智能家居,享受智能生活,从现在做智能家居 代理开始,先享受先挣钱</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.div_deta{background: #fff;padding:0 .3rem;}
	.div_deta .details{border-bottom:1px solid #dfdfdf;}
	.div_deta .details .title{height: 1.3rem;line-height: 1.3rem;text-align: center;font-size: .34rem;}
	.div_deta .deta_cent{padding-bottom: .3rem;}
	.div_deta .deta_cent .p_gray{color: #8a8a8a;padding:.3rem 0;text-align: center;}
	.div_deta .deta_cent .p_text{text-indent:.3rem;line-height: .7rem;}
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
			document.title = "通知标题"
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