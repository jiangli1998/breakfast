<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="营养小贴士">
      <router-link to="/classify" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 文章列表 -->
    <div class="articleItem">
      <router-link to="/article">
        <!-- 文章标题 -->
        <div class="articleItem-header">健康饮食小贴士</div>
        <!-- 文章图文信息 -->
        <div class="articleItem-wrapper">
          <!-- 文章图像  -->
          <div class="articleImg">
            <img src="../assets/logo.png"/>
          </div>
          <!-- 文章简介 -->
          <div class="articleDes">我们吃什么、喝什么都会影响们身体抵御传染病的能力，也会影响日后出现包括肥胖、心脏病、糖尿病、癌症等健康问题的可能性。</div>
        </div>
      </router-link>
    </div>

    <div class="articleItem">
      <router-link to="/article">
        <!-- 文章标题 -->
        <div class="articleItem-header">营养小常识</div>
        <!-- 文章图文信息 -->
        <div class="articleItem-wrapper">
          <!-- 文章图像  -->
          <div class="articleImg">
            <img src="../assets/logo.png"/>
          </div>
          <!-- 文章简介 -->
          <div class="articleDes">樱桃和车厘子有区别 两者颜色不同,车厘子颜色偏黑紫,樱桃则比较红润通透。门感不同,樱桃口感偏硬带有明显果酸味,车厘子绵密一些而且非常甜。产地不同,一般把产丁美国、加拿大、智利等美洲国家的个大皮厚的进口樱桃叫做车厘子,现在市而上售卖的樱桃多是产于烟台的山东大樱桃。</div>
        </div>
      </router-link>  
    </div>

  </div>
</template>

<style scoped>
a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }

.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>