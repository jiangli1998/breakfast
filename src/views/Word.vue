<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="菜谱详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 主体内容 -->
    <div class="wjieshao" fixed>
      <p class="p1">菜名</p>
      <img class="img1" src="../assets/200.png">
      <span class="span1">这里是介绍</span>
    </div>
  </div>
</template>
<style scoped>
.p1 {
  border-top: 1px solid #ccc;
  padding-top: 8px;
  font-size: 20px;
  margin: 10px;
  text-align: center;
}
.img1 {
  width:100%;
  height:300px;
}
.span1 {
  float: left;
  width:100%;
  height:200px;
  border: 1px solid #ccc;
  margin:5px 3px;
  
}
.wjieshao{
  padding: 10px;
}
</style>