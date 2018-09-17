<template>
	<div class="container">
		<scroller :on-infinite="infinite" ref="myscroller">
			<div class="content"> 
				<div class="block head">
					<img class="img" src="../../static/images/img/sou.jpg" alt="">
					<input class="input" type="text" placeholder="输入商品关键词">
				</div>
				<div class="block wi_3">
					<img class="img_w60" src="../../static/images/img/tel.jpg" alt="#">
				</div>
			</div>
			<swipe :data='data.Ad'></swipe>
			<div class="div_fw">
				<div class="div_ul">
					<ul class="ul_img" >
						<li class="li_a" v-for="item in data.Article"><a href="#"><img src="../../static/images/img/mian.jpg" alt=""><br/><span>{{item.title}}</span></a></li>
						<!-- <li class="li_a"><a href="#"><img src="../../static/images/img/mian.jpg" alt=""><br/><span>免费送货安装</span></a></li> -->
						<!-- <li class="li_a"><a href="#"><img src="../../static/images/img/shou.jpg" alt=""><br/><span>售后无忧</span></a></li> -->
						<!-- <li class="li_a"><a href="#"><img src="../../static/images/img/zhi.jpg" alt=""><br/><span>品质保证</span></a></li> -->
					</ul>
				</div>
				<div class="div_tit">
					<div class="block div_shopcart">商城<img src="../../static/images/img/gao.png" alt="#"></div><!--
					--><div class="block div_new">
						<ul class="ul_new">
							<li>{{data.Notice[0].ad_name}}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="div_cent">
				<div class="div_title">
					<ul class="ul">
						<li v-for="(ite,index) in data.GoodsCategory" v-bind:class="{active:index == num}" v-on:click="itemactive(index,ite.id)" >{{ite.mobile_name}}</li>
						<!-- <li class="li_tit">智能家居</li>  activ  class="li_tit"   @click="tabId=0"-->
						<!-- <li class="li_tit">办公家居</li> -->
						<!-- <li class="li_tit">家居</li> -->
						<!-- <li class="li_img"><img src="../../static/images/img/xia.png" alt="#"></li> -->
					</ul>
				</div>
				<div class="div_img">
					<div class="center div_moren">
						<div class="solid"  v-for="item in data.Goods[data.GoodsCategory[0].id]">
							<div class="D_img"><img :src="item.original_img" alt="#"></div>
							<div class="D_h1"><p style="-webkit-box-orient:vertical;" class="p_fo">{{item.goods_name}}</p></div>
							<div class="D_ul">
								<ul class="ul">
									<li class="Li"> ¥{{item.shop_price}}</li>
									<li class="Li"> ¥{{item.market_price}}</li>
									<li class="Li"><img src="../../static/images/img/shopcart.jpg" alt="#"></li>
								</ul>
								<p class="p_Number">{{item.sales_sum}}件已售</p>
							</div>
						</div>
					</div>
					<div class="center div_zn">
						<div class="solid" v-for="item in Id">
							<div class="D_img"><img :src="item.original_img" alt="#"></div>
							<div class="D_h1"><p style="-webkit-box-orient:vertical;" class="p_fo">{{item.goods_name}}</p></div>
							<div class="D_ul">
								<ul class="ul">
									<li class="Li"> ¥{{item.shop_price}}</li>
									<li class="Li"> ¥{{item.market_price}}</li>
									<li class="Li"><img src="../../static/images/img/shopcart.jpg" alt="#"></li>
								</ul>
								<p class="p_Number">{{item.sales_sum}}件已售</p>
							</div>
						</div>
					</div>
					
				</div>
			</div>

			<div class="div_fixed">
				<div class="div_img"><img src="../../static/images/img/icon.jpg" alt="#"></div>
			</div>
			<div class="div_cent pad_botom">
				<div class="div_img">
					<div class="center div_hy">
						<div class="solid" v-for="item in data.GoodsCondition">
							<div class="D_img"><img :src="item.original_img" alt="#"></div>
							<div class="D_h1"><p style="-webkit-box-orient:vertical;" class="p_fo">{{item.goods_name}}</p></div>
							<div class="D_ul">
								<ul class="ul">
									<li class="Li"> ¥{{item.shop_price}}</li>
									<li class="Li"> ¥{{item.market_price}}</li>
									<li class="Li"><img src="../../static/images/img/shopcart.jpg" alt="#"></li>
								</ul>
								<p class="p_Number">{{item.sales_sum}}件已售</p>
							</div>
						</div>				
					</div>
				</div>
				<div class="div_img">
					<div class="center div_hy">
						<div class="solid" v-for="item in dat">
							<div class="D_img"><img :src="item.original_img" alt="#"></div>
							<div class="D_h1"><p style="-webkit-box-orient:vertical;" class="p_fo">{{item.goods_name}}</p></div>
							<div class="D_ul">
								<ul class="ul">
									<li class="Li"> ¥{{item.shop_price}}</li>
									<li class="Li"> ¥{{item.market_price}}</li>
									<li class="Li"><img src="../../static/images/img/shopcart.jpg" alt="#"></li>
								</ul>
								<p class="p_Number">{{item.sales_sum}}件已售</p>
							</div>
						</div>				
					</div>
				</div>
			</div>
		</scroller>
		<homeNav></homeNav>
	</div>
</template>
<style>
	.container .content{padding:.2rem;}
	.container .content .block{display: inline-block;vertical-align: top;}
	.container .content .head{background: #fff;width:84%;border-radius: .4rem;}
	.container .content .head .img{width: .4rem;height: .4rem;margin-left: .2rem;margin-top: .1rem;}
	.container .content .head .input{border:none;color: #a5a1a1;font-size:.34rem;outline: none;height: .8rem;}
	.container .content .block .img_w60{width: .6rem;height: .6rem;}
	.container .content .wi_3{width:13%;}
	
	.div_fw .div_ul .ul_img{background: #fff;padding:.2rem 0;}
	.div_fw .div_ul .ul_img .li_a{width: 25%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;vertical-align: top;text-align:center;}
	.div_fw .div_ul .ul_img .li_a a{color: #5f5f5f;font-size:.3rem;}
	.div_fw .div_ul .ul_img .li_a img{width:.76rem;height: .76rem;padding-bottom:.1rem;}
	.div_fw .div_ul .ul_img .li_a span{}
	.div_fw .div_tit{padding:0 .2rem;background: #fff;margin:.2rem 0;height: 1rem;overflow: hidden;}
	.div_fw .div_tit .block{display: inline-block;vertical-align: top;line-height: 1rem;}
	.div_fw .div_tit .div_shopcart{font-size: .3rem;width:22%;}
	.div_fw .div_tit .div_shopcart img{width: .9rem;height: .42rem;}
	.div_fw .div_tit .div_new{width:78%;}
	.div_fw .div_tit .div_new .ul_new{}
	.div_fw .div_tit .div_new .ul_new li{font-size: .28rem;}
	
	.div_cent .div_title .ul{padding:0 .2rem;background: #fff;}
	.div_cent .div_title .ul li{text-align:center;height: 1.4rem;line-height: 1.4rem;font-size: .3rem;width: 20%;}
	.div_cent .div_title .ul li:nth-of-type(6){display: none;}
	.div_cent .div_title .li_tit{width: 22%;}
	.div_cent .div_title .li_img{width: 12%;}
	.div_cent .div_title .active{color: #de1774;border-bottom:2px solid #de1774;}
	.div_cent .div_title .li_img img{width: 100%;}
	.div_cent .div_img{}
	.div_cent .div_img .center{display: none;font-size: .3rem;margin-top: .3rem;}
	.div_cent .div_img .center:nth-of-type(1){display: block;}
	
	/*.div_cent .show_hide{transition: 4s;display: none;}*/
	.div_cent .div_img .center .solid{display: inline-block;width: 46%;margin-left: 2%;background: #fff;border-bottom:.3rem solid #f3f4f5;}
	.div_cent .div_img .center .D_img{}
	.div_cent .div_img .center .D_img img{width: 100%;height: 3.6rem;}
	.div_cent .div_img .center .D_h1{font-size: .34rem;padding:.14rem .2rem;}
	.div_cent .div_img .center .D_h1 .p_fo{font-size: .3rem;display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;line-height: .5rem;}
	.div_cent .div_img .center .D_ul{padding:0 .2rem;}
	.div_cent .div_img .center .D_ul .ul{}
	.div_cent .div_img .center .D_ul .Li{text-align:center;}
	.div_cent .div_img .center .D_ul .Li:nth-of-type(1){width: 40%;color: #f14c57;}
	.div_cent .div_img .center .D_ul .Li:nth-of-type(2){width: 40%;font-size:.24rem;text-decoration: line-through;color: #6a6a6a;}
	.div_cent .div_img .center .D_ul .Li:nth-of-type(3){width: 20%;}
	.div_cent .div_img .center .D_ul .Li img{width: .72rem;height: .72rem;}
	.div_cent .div_img .center .D_ul .p_Number{color: #6a6a6a;padding:.1rem 0 .2rem 0;}
	.div_fixed{padding-top: .2rem;}
	.div_fixed .div_img img{width: 100%;}
	.pad_botom{padding-bottom:.4rem;}
	.div_p_bottom{font-size: .34rem;text-align:center;color: #939393;}
	/*.div_p_bottom p{}*/
</style>

<script>
	   import Vue from 'vue'
    import VueScroller from 'vue-scroller'
    Vue.use(VueScroller);

	// 导入要用到的子组件
	import Swiper from 'swiper'
	import homeNav from '../components/homeNav'
	import swipe from '../components/swipe'
	export default {
		data () {
			return {
				data:[],
				dat:[],
				num:0,
				Id:'',
				// Img: [],
				// Text:[]
			}
		},
		created(){
			window.scrollTo(0,0)
			this.$http.post('http://www.rujiezhineng.cn/index.php/xapi/Index/GetIndex',{
				token:'546e2eecaae790cb58190a57103d8567',
				page:'1'
			},{
				emulateJSON: true
			}).then(
				function(res){
					console.log(res)
					this.data = res.body.data
					// this.data = res.body.data.Article
					// this.Img = res.body.data.Ad
					console.log(this.data.GoodsCategory)
				},
				function(ree){
					console.log(404)
				}
			)
		},
		mounted(){
     /* axios.get('http://www.rujiezhineng.cn/index.php/xapi/Index/GetIndex?token=546e2eecaae790cb58190a57103d8567&&page=1')
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });*/
//以上请求也可以通过这种方式来发送
/*axios.get('http://www.rujiezhineng.cn/index.php/xapi/Index/GetIndex',{
  params:{
    'token':'546e2eecaae790cb58190a57103d8567',
    'page':'1'
  }
}).then(function(res){
  console.log(res);
}).catch(function(err){   
  console.log(err);
});*/
		
     /*axios.post('http://www.rujiezhineng.cn/index.php/xapi/Index/GetIndex',{
        
      })
      .then(function(res){
        console.log(res);
        this.set 
      })
      .catch(function(err){
        console.log(err);
      });*/
       
      	/*var dat = {
      		'token':'546e2eecaae790cb58190a57103d8567',
    		'page':'1'
      	}
          $.ajax({ 
            url: 'http://www.rujiezhineng.cn/index.php/xapi/Index/GetIndex', 
            data:dat,
            type: 'post', 
            dataType: 'json', 
            success: function (res) { 
              console.log(res)

              
            } 
          }) */

	    },
    methods: { 
        itemactive:function(index,id) {
		    this.num = index;
		    this.Id = this.data.Goods[id];
		    $('.div_moren').hide().siblings().show()
	    },
	    infinite() {
        	this.$http.post('http://www.rujiezhineng.cn/index.php/xapi/Index/HotGoods',{
				token:'546e2eecaae790cb58190a57103d8567',
				page:'1'
			},{
				emulateJSON: true
			}).then(
				function(res){
					this.dat = res.body.data
					console.log(this.dat)
				},
				function(ree){
					console.log(404)
				}
			)
        },
      } ,
		// 在components字段中，包含导入的子组件
		components: {
			homeNav,
			swipe
		}
	}
</script>
