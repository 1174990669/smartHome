<template>
	<div>
		<div class="fixed">
			<ul class="fixed_inner">
				<li class=" fi_li">
					<router-link to='/' tag='a' class="act">
						<i class="i_img_sy"></i>首页
					</router-link>
				</li>
				<li class=" fi_li">
					<router-link to='/xinge' tag='a'  class="act">
							<i class="i_img_gwc"></i>购物车
					</router-link>
				</li>
				<li class=" fi_li">
					<router-link to='/Detail' tag='a' class="act">
						<i class="i_img_fl"></i>设计类
					</router-link>
				</li>
				<li class=" fi_li">
					<router-link to='/my' tag='a' class="act">
						<i class="i_img_my"></i>我的
					</router-link>
				</li>
			</ul>
		</div>
	</div>

</template>
<style scoped>

/*.router-link-exact-active{} */
/*.router-link-active{}*/
/*router-link-active*/
	.fixed{position: fixed;bottom:0;width: 100%;}
	.fixed .fixed_inner{font-size:0;}
	.fixed .fixed_inner .fi_li{position: relative;display: inline-block;width: 25%;font-size: .3rem;text-align:center;height: 1.56rem;line-height:2.2rem;background: #fff;}
    .fixed .fixed_inner .fi_li .act{color: #444;}
	
    .fixed .fixed_inner .fi_li .router-link-exact-active{color: #f14c57;width: 100%;display:block;}

	.fixed .fixed_inner .fi_li i{position: absolute;width:.68rem;height:.68rem;top: 36%;left: 50%;transform: translate(-50%,-50%);}

    .fixed .fixed_inner .router-link-exact-active .i_img_sy{background:url(../../static/images/icon/home.png)!important;background-size: 100% 100%!important;}
    .fixed .fixed_inner .router-link-exact-active .i_img_gwc{background:url(../../static/images/icon/shopcart.png)!important;background-size: 100% 100%!important;}
    .fixed .fixed_inner .router-link-exact-active .i_img_fl{background:url(../../static/images/icon/Design.png)!important;background-size: 100% 100%!important;}
    .fixed .fixed_inner .router-link-exact-active .i_img_my{background:url(../../static/images/icon/mine.png)!important;background-size: 100% 100%!important;}

    /*.fixed .fixed_inner .act .i_img_my{background:url(../../static/images/icon/mine_s.png);background-size: 100% 100%;}*/
    .fixed .fixed_inner .act .i_img_sy{background:url(../../static/images/icon/home_s.png);background-size: 100% 100%;}
    .fixed .fixed_inner .act .i_img_gwc{background:url(../../static/images/icon/shopcart_s.png);background-size: 100% 100%;}
    .fixed .fixed_inner .act .i_img_fl{background:url(../../static/images/icon/Design_s.png);background-size: 100% 100%;}
    .fixed .fixed_inner .act .i_img_my{background:url(../../static/images/icon/mine_s.png);background-size: 100% 100%;}   


</style>
<script>
	export default{
	    data(){
	        return{
	            data1:[
	            ]
	        }
	    },
	    mounted(){
	    	/*$('.fixed_inner li.fi_li').click(function(){
	    		$(this).addClass('active').siblings().removeClass('active')
	    		console.log(45)
	    	})*/
	    },
	    components:{
	    }
	}
</script>