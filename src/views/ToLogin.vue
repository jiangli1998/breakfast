<template>
  <div id="color">
    <!-- 搜索框 -->
    <mt-search class="search"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <!-- 登录 注册 -->
    <div class="login classColor" >
      <div class="yuan"></div>
    <div class="mar">请登录/注册</div>
    </div>
    <!-- 菜篮子 -->
    <div class="classColor collect">
      <div class="bot hei">
        <img src="../assets/xingxing.png" class="img">
         菜谱收藏 
      </div>
      <div class="hei">
        <img src="../assets/cailanzi.png" class="img">
        菜篮子
      </div>
    </div>
    <!-- 好评 -->
    <div class="classColor good">
      <div class="bottom">
        <img src="../assets/shangchuan.png" class="img">
        菜谱达人
      </div>
      <div class="bottom">
        <img src="../assets/dianzan.png" class="img">
        赏个好评呗！
      </div>
      <div class="bottom">
        <img src="../assets/guanyuwomen.png" class="img">
        关于我们
      </div>
      <div>
        <img src="../assets/fankui.png" class="img">
        反馈
      </div>
    </div>
  </div>
</template>
<style>
*{
  margin:0px;
  padding: 0px;
}
#color{
  background-color: #e9e9e9;
}
.search{
  height: 55px !important;
}
.login{
  height: 100px;
  padding: 20px;

}
.mar{
  height: 20px;
  margin-top: -50px;
  }
.classColor{
  background-color: white;
  margin-top: 20px;
}
.yuan{
  height: 80px;
  width: 80px;
  background-color: #d9d9d9;
  border-radius: 50%;
    margin-top: 25px;
}
.collect{
  height: 120px;
  text-align: left;
}
.bot{
  border-bottom: 1px solid grey;
}
.hei{
  height: 60px;
 
}
.good{
  text-align: left;
  /* line-height: 20px; */
  /* padding: 10px; */
}
.bottom{
  margin-bottom: 10px;
}
.img{
  width:40px;
  height: 40px;
  vertical-align:middle;
  padding: 10px;
  /* text-align: center;; */
}
</style>