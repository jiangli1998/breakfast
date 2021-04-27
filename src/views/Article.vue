<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="营养美食">
      <router-link to="/list" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 文章列表 -->
    <div class="list">
      <!-- 标题 -->
      <div class="question-header">
        <!-- 文章题目 -->
        <div class="question-header-title">{{article.title}}</div>
        <!-- 文章作者 -->
        <div class="question-header-datetime">作者：{{article.writer}}</div>
      </div>
      <!-- 作者信息 -->
      <div class="author-info">
          <img :src="article.pic" class="author-info-avatar">
          <div class="author-info-detail">
              <!-- 发表时间 -->
              <div class="author-info-nickname">{{article.time}}</div>
              <div class="author-info-badge">
                  转载自 <mt-badge type="primary" size="small">{{article.turnload}}</mt-badge>
              </div>
          </div>
      </div>
      <!-- 内容 -->
      <div class="question-content">
          <!-- 内容图片 -->
          <img :src="article.pic" class="author-content-pic">
          <!-- 文章内容 -->
          <div class="rich-content" v-html="article.desc">{{article.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            article:{}//存放从服务器中获取的数据
        }
    },
    mounted() {
        // 获取地址栏中由List.vue传过来的lid参数
        let lid=this.$route.query.lid;
        console.log(lid);
        // 向服务器接口发送请求，访问请求的文章内容数据
        let url=`/article?lid=${lid}`;
        this.axios.get(url).then(result=>{
            console.log(result);
            // 把获取到的数据放到article中
            this.article=result.data.result;
            console.log(this.article);
            // 获取文章的图片地址
            this.article.pic=require(`../assets/list/${this.article.pic}`);
            console.log(this.article.pic);
        });
    },
}
</script>
<style>
.article{
    background: #f6f6f6;
    height: 100vh;
}
.question-header{
    margin-bottom: 5px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.question-header-title {
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.5;
}
.question-header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.author-info{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.author-info-avatar{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    margin-left:15px;
}
.author-info-nickname{
    font-size: 15px;
    margin-bottom:6px;
}
.author-info-badge{
    font-size: 14px;
}
.author-content-pic{
    width: 100%;
}
.question-content {
    padding: 10px;
    background-color:#fff;
}
.rich-content p{
    padding: 5px 0;
    line-height: 1.7;
}
.rich-content img{
    max-width:100%;
}
</style>
