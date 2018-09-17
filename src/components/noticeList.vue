<!-- Home.vue -->
<template>
	<div class="container pad_bottom">
		<!-- <router-view></router-view> -->
		<router-link to='/notice/noticedetils' tag='div' class="div_list">
		<!-- <div class="div_list"> -->
			<div class="div_time">
				<p class="p_time">2018-11-06</p>
			</div>
			<div class="div_cent bef">
				<p class="b_title">双十一期间物流说明<i class="i_back"></i></p>
				<p class="p_text" style="-webkit-box-orient: vertical;">双十一即将临近，根据各快递公司预测，今年双十一期间快递件量将是平时的5倍左右，为了应对如此大的件量...</p>
				<p class="p_but">查看详情<span>></span></p>
			</div>
		<!-- </div> -->
		</router-link>

		<div class="div_list">
			<div class="div_time">
				<p class="p_time">2018-11-06</p>
			</div>
			<div class="div_cent bef">
				<p class="b_title">双十一期间物流说明<i class="i_back"></i></p>
				<p class="p_text" style="-webkit-box-orient: vertical;">双十一即将临近，根据各快递公司预测，今年双十一期间快递件量将是平时的5倍左右，为了应对如此大的件量...</p>
				<p class="p_but">查看详情<span>></span></p>
			</div>
		</div>

		<div class="div_list">
			<div class="div_time">
				<p class="p_time">2018-11-06</p>
			</div>
			<div class="div_cent ">
				<p class="b_title">双十一期间物流说明<i class=""></i></p>
				<p class="p_text" style="-webkit-box-orient: vertical;">双十一即将临近，根据各快递公司预测，今年双十一期间快递件量将是平时的5倍左右，为了应对如此大的件量...</p>
				<p class="p_but">查看详情<span>></span></p>
			</div>
		</div>
	</div>
</template>
<style scoped>
	button{outline: none;}
	.container{margin: 0 auto;font-size: .3rem;}
	.pad_bottom{padding-bottom: .4rem;}
	.div_list{padding:0 .3rem;}
	.div_list .div_time{text-align: center;padding:.4rem 0;}
	.div_list .div_time .p_time{width: 2.7rem;height: .6rem;background: #bfbfbf;color: #fff;line-height: .6rem;margin:0 auto;border-radius:30px;}
	.div_list .div_cent{background: #fff;padding:0 .2rem;color: #818181;border-radius:.2rem;overflow: hidden;position: relative;}
	.div_list .bef:before{content:'';position: absolute;top:0;width:100%;left:0;height: .2rem;background: #ff5e53;}
	.div_list .div_cent .b_title{padding:.6rem 0 .3rem;color: #4a4a4a;}
	.div_list .div_cent .b_title .i_back{position: absolute;width: .12rem;height: .12rem;background: red;border-radius: 50%;}
	.div_list .div_cent p{width: 100%;}
	.div_list .div_cent .p_text{display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;line-height: .5rem;}
	.div_list .div_cent .p_but{padding:.3rem 0 .54rem;color: #4a4a4a;border-top:1px solid #dfdfdf;margin-top:.54rem;}
	.div_list .div_cent .p_but span{float: right;font-size: .4rem;}

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