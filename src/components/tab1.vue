<template>
<div class="index-wrapper">

    <scroller :on-infinite="infinite" ref="myscroller">
        <div class="index-header">
            <div class="positionbar">
                <div class="position-box">
                    <i class="icon iconfont icon-dingwei"></i>
                    <span class="text">
        东城区北京市政府
      </span>
                </div>
                <div class="weather-box">
                    <div class="du">
                        <h2>28℃</h2>
                        <p>多云天</p>
                    </div>
                    <img class="could" src="//fuss10.elemecdn.com/2/52/5383cfd55c8ba454449f63f54ce2apng.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/" alt="">
                </div>
            </div>
            <div class="search-box">
                搜索商家、商品
            </div>
            <div class="swiper-box">
                <div class="swiper-container" id="line-slide">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="width:auto">煎饼</div>
                        <div class="swiper-slide" style="width:auto">虾饭先生</div>
                        <div class="swiper-slide" style="width:auto">蛋挞 </div>
                        <div class="swiper-slide" style="width:auto">立秋进补</div>
                        <div class="swiper-slide" style="width:auto">我的屏 </div>
                        <div class="swiper-slide" style="width:auto">鲜榨果汁</div>
                        <div class="swiper-slide" style="width:auto">石锅拌饭</div>
                        <div class="swiper-slide" style="width:auto">黄焖鸡</div>
                        <div class="swiper-slide" style="width:auto">虾</div>
                    </div>
                    <!-- 如果需要滚动条 -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>

        </div>
        <div class="slide-box">
            <div class="swiper-container" id="button-menu">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ul class="btn-group">
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>美食</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>甜品饮品</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>商超便利</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>预定早餐</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>果蔬生鲜</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>新店特惠</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>准时达</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>午餐</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul class="btn-group">
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>汉堡薯条</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>包子粥店</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>鲜花蛋糕</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>麻辣烫</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>地方菜系</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>披萨意面</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="//fuss10.elemecdn.com/6/d2/de0683a49a0655c728b70fdb344d5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                                    <span>异国料理</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="shop-box">
            <ul>
                <li v-for="m in movieList">
                </li>
            </ul>
        </div>
    </scroller>
</div>
</template>
<script>
    import Vue from 'vue'
    import VueScroller from 'vue-scroller'
    Vue.use(VueScroller);
    export default {
        data() {
            return {
                noData: '',
            moveList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            }
        },
        components: {
        },
        mounted() {
            var mySwiper = new Swiper('#line-slide', {
                slidesPerView: 6,
                scrollbar: '.swiper-scrollbar',
                slidesPerView: 'auto'
            })
            var menuSwiper = new Swiper('#button-menu', {
                direction: 'horizontal',
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',

                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            })
        },
        methods: {
            infinite(done) {
                console.log(this.noData)
                if(this.noData) {
                setTimeout(()=>{
                    this.$refs.myscroller.finishInfinite(2);
                })
                return;
                }
                let self = this;
                let start = this.moveList.length;

                setTimeout(() => {
                    for(let i = start + 1; i < start + 10; i++) {
                        self.moveList.push(i)
                    }
                    if(start > 30) {
                        self.noData = "没有更多数据"
                    }
                    self.$refs.myscroller.resize();
                    done()
                }, 1500)

            },
            refresh() {
                console.log('refresh')
            }

        }
    }
</script>
