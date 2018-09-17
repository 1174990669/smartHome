<!-- Home.vue -->
<template>
	<div class="container">
		<div class="help">
			<div class="help_centent">
				<ul>
					<li>
						<h3 class='H3_tit'>某某家具商场提供什么服务？<i class="i_icon Rotate"></i></h3>
						<p class="text_center tex_show">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
					<li>
						<h3 class='H3_tit'>账户能共用吗？<i class="i_icon"></i></h3>
						<p class="text_center">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
					<li>
						<h3 class='H3_tit'>哪些地方可以提供下单？<i class="i_icon"></i></h3>
						<p class="text_center">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
					<li>
						<h3 class='H3_tit'>快递会不会不安全？<i class="i_icon"></i></h3>
						<p class="text_center">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
					<li>
						<h3 class='H3_tit'>佣金有什么用?<i class="i_icon"></i></h3>
						<p class="text_center">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
					<li>
						<h3 class='H3_tit'>怎么获取佣金？<i class="i_icon"></i></h3>
						<p class="text_center">
							某某家具有限公司是一家专业化、综合性的专业家具服务机构，公司拥有一支经验丰富、 专业高效的家具管理团队。 公司核心成员来自不同领域的知名企业家，云集了从事家装行业多年的精英，主要成员均具有不同的专业及产业背景，对产业发展、 家具有深刻认识和独特见解，在家具服务、专业培训、风险评估、法律、财务等众多领域有着丰富的实践经验及专业优势。
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="foot_sub">
			<p ><img src="../../static/images/my/lxkf.png" alt="">联系客服</p>
		</div>
	</div>
</template>
<style scoped>
	.help{padding:.3rem;padding-bottom:3rem;}
	.help .help_centent{background: #fff;border-radius:.1rem;overflow: hidden;}
	.help .help_centent li{border-bottom:1px solid #dfdfdf;padding:.2rem;width: 94%;}
	.help .help_centent li:last-child{border-bottom:none;}
	.help .help_centent li h3{font-family:'宋体';padding:.3rem 0 .2rem;text-indent:.1rem;}
	.help .help_centent li h3 .i_icon{float: right;background: url(../../static/images/my/top.png);background-size: 100% 100%;display: inline-block;width: .5rem;height: .3rem;}
	.help .help_centent .text_center{padding:.2rem;line-height: .5rem;color: #818181;display: none;border-top:1px dashed #929191;}
	.help .help_centent .tex_show{display: block;}
	.help .help_centent li h3 .Rotate{transform: rotate(180deg);}
	.foot_sub{position: fixed;bottom: 0;height: 1rem;width:100%;background: #fff;text-align: center;padding:.3rem 0;}
	.foot_sub p img{width: .7rem;height: .7rem;margin-right: .2rem;}
	.foot_sub p{background: #ff5e53;height: 1rem;line-height: 1rem;width: 90%;margin:0 auto;border-radius:30px;color: #fff;font-size: .34rem;}
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
			document.title = "帮助中心"
			$('.H3_tit').click(function(){
				$(this).find('.i_icon').toggleClass('Rotate')
				$(this).siblings().toggle()
			})
			/*$('.sale_ul li').click(function(){
				$(this).addClass('active').siblings().removeClass('active')
				$('.div_wai .div_bor').eq($(this).index()).show().siblings().hide()
			})*/
			
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>