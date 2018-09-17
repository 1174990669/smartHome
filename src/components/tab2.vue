<template>
  <div class="scroll-loadmore"
       >
    
  </div>
</template>


<style>
  .scroll-loadmore {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f4f4f4;
  }

  .scroll-loadmore .inner {
    position: absolute;
    top: 0;
    width: 100%;
    transition-duration: 300ms;
  }

  .scroll-loadmore .load-more {
    height: 1rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>