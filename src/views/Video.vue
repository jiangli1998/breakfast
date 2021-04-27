<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="菜谱详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 主体内容 -->
    <video class="video" src="../assets/003.mp4"
            width="100%"
            loop   
            muted
            autoplay
            controls
            poster="../assets/200.png"></video>   
    <div class="vjieshao">
      <p>菜名:</p>
      <p>作者:</p>
      <p>介绍:</p>
      <div class="d1">这里是介绍</div>
      <p>内容:</p>
      <div class="d2">这里是内容</div>
    </div>
  </div>
</template>
<style scoped>
    p {
      font-size:20px;
    }
    .d1{
      border: 1px solid #ccc;
      width:100%;
      height:80px;
    }
    .d2{
      border: 1px solid #ccc;
      width:100%;
      height:150px;
    }
    .vjieshao{
      padding: 10px;
    }
  </style>  
 