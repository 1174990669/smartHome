<!-- Home.vue -->
<template>
	<div class="container">
		<!-- <router-view></router-view> -->
		<div class="div_set">
			<ul class="ul_set">
				<li class="Li">
					<!-- <router-link to="/address" tag='a'> -->
					<router-link to='/personal' tag='a'>个人资料<span>></span></router-link>
				</li>
				<li class="Li">
					<a href="#">我的收货地址<span>></span></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.div_set{}
	.div_set .ul_set{background: #fff;padding:.1rem .3rem 0;}
	.div_set .ul_set .Li{width: 100%;line-height: 1rem;border-bottom: 1px solid #dfdfdf;}
	.div_set .ul_set .Li:last-child{border:0;}
	.div_set .ul_set .Li a{color: #1a1919;font-size: .34rem;display: block;}
	.div_set .ul_set .Li span{float: right;font-size: .4rem;}
	
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
			document.title = "设置"
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
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>