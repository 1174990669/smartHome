<!-- Home.vue -->
<template>
  <div class="container">
    <!-- <home-header></home-header> -->
    <div class="content"> 
      goiuwuc
    </div>
    
    <homeNav></homeNav>
  </div>
</template>
<style>
  .container{max-width: 640px;margin: 0 auto;overflow-x: hidden;}
  .container .content{padding:.2rem;}
  
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

<!-- <template>
  <div  >
      <router-link to="/tab1" tag="h2">切换1</router-link>
      <router-link to="/tab1" tag="h2">切换2</router-link>
      <input type="text" v-model="a">
       
        <router-view></router-view>
       
  </div>
</template>   

<script>
 
export default {
  data () {
    return {
      a: '这个是a变量'
    }
  },
  methods:{
    printabcd(){
      console.log("方法abcd");
    }
  },
  // beforeCreate: function() {
  //   console.log("创建前")
  //   console.log(this.a)
  //   // console.log(this.$el)
  //   // this.printabcd()
  // },
  // created: function() {
  //   console.log("创建之后");
  //   console.log(this.a)
  //   console.log(this.$el)
  //   this.printabcd()
  // },
  // beforeMount: function() {
  //   console.log("mount之前")
  //   console.log(this.a)
  //   console.log(this.$el)
  // // this.printabcd()
  // },
  // mounted: function() {
  //   console.log("mount之后")
  //   console.log(this.a)
  //   console.log(this.$el);

  // // this.printabcd();
  // },
  beforeUpdate: function() {
    console.log("更新前");
    // alert(this.a);
    console.log(this.a)
    this.printabcd()
  },
  updated: function() {
    console.log("更新完成");
    console.log(this.a)
  // this.printabcd();
  },
  beforeDestroy: function() {
    console.log("销毁前");
    console.log(this.a)
    console.log(this.$el)
  // this.printabcd();
  },
  destroyed: function() { 
    console.log("已销毁");
    console.log(this.a)
    console.log(this.$el)
     
  // this.printabcd();
  }
}
</script>
<style >
  input{
    border: 1px solid red;
    height: 40px;
  }
</style>
 -->