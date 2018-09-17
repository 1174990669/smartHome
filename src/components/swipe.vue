<!-- Home.vue -->
<template>
	<div class="container">
		<div class="swiper-container">
		    <div class="swiper-wrapper" >
		        <div class="swiper-slide" v-for="item in data"><img :src="item.ad_code" alt=""></div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<style>
	.swiper-container{width: 100%;height:4rem;margin: 0 auto;}
	.swiper-container img{width: 100%;height:4rem;}
</style>
<script>
	
	import Swiper from 'swiper'

	// import List from '../components/List'
	export default {
		props:['data'],
		data () {
			return {
				
			}
		},
		mounted(){
		    new Swiper ('.swiper-container', {
			    loop: true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
		    })   
	    },
		// 在components字段中，包含导入的子组件
		components: {
		}
	}
</script>

<!-- <template>
<div>
	<div class="header">
        <h1>
        	<span v-on:click="fan">
        		<img src="../../static/images/back.png" alt="">
        	</span>
        	<router-link to='/page/cp' tag='span'>
	        	<img src="../../static/images/share.png" alt="">
	        	<em>免费新品测评</em>
        	</router-link>
        </h1> 
    </div>
	<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class='swiper-container'>
	    <swiper-slide v-for="img in data">
	    	<img :src="img" alt="图片开小差啦">
		</swiper-slide>
		 
    	<div class="swiper-pagination"  slot="pagination" id="swiper-pagination"></div>
	</swiper>
</div>
</template>
<script>
export default{
	props:['data'],
	data(){
		return{
			notNextTick: true,
	        swiperOption: {
	          autoplay: 2000,
	          loop:true,
	          direction : 'horizontal',
	          grabCursor : false,
	          setWrapperSize :true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : true,
	          observeParents:true,
	          debugger: true,
	          autoplayDisableOnInteraction : false,
	        }
		}
	},
	methods:{
		fan(){
			window.history.go(-1)
		}
	}
	
}
</script>
<style scoped>

	.iconfont{font-size: .32rem;}

    .header{width:100%; height:.88rem;line-height: .88rem; background:white;position: fixed;top:0;z-index: 9999;}
    .header h1{text-align: center;font-weight: 400;width:100%;}
    .header h1 span:nth-of-type(1){width:.64rem;height:.64rem; position: absolute;left:.12rem; top:50%;transform:translateY(-50%); border-radius: 50%;line-height: .64rem;font-size: .46rem;}
    .header h1 span:nth-of-type(1)>img{width:100%;height:100%;border-radius:50%;}
    .header h1 span:nth-of-type(2){width:2.3rem;height:.64rem; position: absolute;top:50%;right:.32rem; transform:translateY(-50%);border-radius:.34rem;background: #8b8b8b;line-height: .64rem;color:#d0d0d0;font-size: .26rem;}
    .header h1 span:nth-of-type(2)>img{width:.32rem;height:.32rem;margin-right:.08rem; vertical-align: middle;}
    .header h1 span:nth-of-type(2)>em{font-style: normal; vertical-align: middle;}

	.swiper-container{width:100%;height:5.24rem;}
    .swiper-container swiper-slide{width: 100%;height:3.8rem;}
    .swiper-container img{width: 100%;height: 100%;}
</style> -->