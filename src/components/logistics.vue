<!-- Home.vue -->
<template>
	<div class="container">
		<div class="logistice">
			<img class="log_img" src="../../static/images/order/order1.jpg" alt="">
			<p class="log_p"><span>物流公司: </span><span class="sp_green">百世快递</span></p>
			<p class="log_p"><span>物流单号: </span><span><input id="copy-num" class="form-control" type="text" disabled="disabled" value="70776515265202"></span> <span class="fz"><button id='but' type="button" class="btn btn-sm">复制</button></span></p>
			<p class="log_p"><span>物流电话: </span><span class="sp_blue">95320</span></p>
		</div>
		<div class="div_list">
			<div class="list_title">物流状态</div>
		</div>
		<div class="log_detai">
			<div class="div_zi">
				<p class="p_map">深圳市【深圳市龙华利浦分部】，本人签收 已签收</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
			<div class="div_zi">
				<p class="p_map">深圳市【深圳市龙华利浦分部】，【温祥发/ <span class="sp_6a">18098960670</span>】正在派件</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
			<div class="div_zi">
				<p class="p_map">到深圳市【深圳市龙华利浦分部】</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
			<div class="div_zi">
				<p class="p_map">深圳市【深圳市转运中心】，正发往【深圳市龙华利浦分部】</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
			<div class="div_zi">
				<p class="p_map">到深圳市【深圳市转运中心】</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
			<div class="div_zi">
				<p class="p_map">泉州市【泉州运转中心】，正发往【深圳市转运中心】</p>
				<p class="p_time">2018-07-26 13:47:36</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container{margin: 0 auto;font-size: .3rem;}
	.logistice{background: #fff;padding:.3rem;height: 1.8rem;}
	.logistice .log_img{width: 1.8rem;height: 1.8rem;float: left;margin-right: .2rem;}
	.logistice .log_p{color: #9c9c9c;padding-bottom: .22rem;}
	.logistice .log_p .fz{}
	.logistice .log_p .sp_green{color: #31b268;}
	.logistice .log_p .sp_blue{color: #6ab1ff;}
	#copy-num{width: 37%;background: transparent;outline: none;border:none;}
	#but{border:1px solid #dfdfdf;background: #fff;padding:.1rem;border-radius:4px;}
	.div_list{background: #fff;margin-top:.3rem;border-bottom:1px solid #dfdfdf;}
	.div_list .list_title{padding-left: .3rem;color: #151516;height: 1.2rem;line-height: 1.2rem;}
	.log_detai{position: relative;background: #fff;padding:.4rem 0 0 1.4rem;margin-bottom: .5rem}
	.log_detai:after{content:'';position: absolute;width:2px;height: 88%;background: #ddd;left:9%;bottom:0;}
	.log_detai .div_zi{position: relative;padding-top:.3rem;border-bottom:1px solid #dfdfdf;}
	.log_detai .div_zi:after{content:'';position: absolute;width:.3rem;height:.3rem;background: #ddd;left:-14%;top:50%;border-radius: 50%;}
	/*.log_detai .div_zi{padding:.3rem 0 0 1.4rem;border-bottom:1px solid #dfdfdf;}*/
	.log_detai .div_zi:nth-of-type(1){color: #25ae5f;padding-top:0;}
	.log_detai .div_zi:last-child{border-bottom:0;}
	.log_detai .div_zi .p_map{padding-right: .2rem;}
	.log_detai .div_zi .p_time{padding:.2rem 0;}
	.log_detai .div_zi .p_map .sp_6a{color: #6ab1ff;}
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
			document.title = "查看物流"
			// function jsCopy(){
				$('#but').click(function(){
					var e=document.getElementById("copy-num");//对象是copy-num1
                    e.select(); //选择对象
                    document.execCommand("Copy"); //执行浏览器复制命令
                    alert("复制成功");
				})
                   
                // }
              !
              function() {
                try {
                  var t = "currentScript" in document ? document.currentScript: function() {
                    for (var t = document.getElementsByTagName("script"), e = t.length; e--;) if (t[e].getAttribute("data-cfhash")) return t[e]
                  } ();
                  if (t && t.previousSibling) {
                    var e, r, n, i, c = t.previousSibling,
                    a = c.getAttribute("data-cfemail");
                    if (a) {
                      for (e = "", r = parseInt(a.substr(0, 2), 16), n = 2; a.length - n; n += 2) i = parseInt(a.substr(n, 2), 16) ^ r,
                      e += String.fromCharCode(i);
                      e = document.createTextNode(e),
                      c.parentNode.replaceChild(e, c)
                    }
                    t.parentNode.removeChild(t);
                  }
                } catch(u) {}
              } ()
	    },
		// 在components字段中，包含导入的子组件
		components: {
			homeNav
			// swipe
		}
	}
</script>