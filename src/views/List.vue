<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="营养小贴士">
      <router-link to="/classify" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 文章列表 -->
    <div v-for="(item,i) in list.length" :key="i" class="articleItem">
      <router-link :to="`/article?lid=${list[i].lid}`">
        <!-- 文章标题 -->
        <div class="articleItem-header">{{list[i].title}}</div>
        <!-- 文章图文信息 -->
        <div class="articleItem-wrapper">
          <!-- 文章图像  -->
          <div class="articleImg">
            <img :src="list_png[i]"/>
          </div>
          <!-- 文章简介 -->
          <div class="articleDes">{{list[i].desc}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:{},//文章列表搜索结果
      list_png:[],//文章列表推荐图片路径
    }
  },
  mounted() {
    // 发送HTTP请求，获取文章列表
    this.axios.get('/list').then(result=>{
      this.list=result.data.results;
      for(let i=0;i<this.list.length;i++){
        // 获取图片路径
        this.list.png=require(`../assets/list/${this.list[i].pic}`);
        // 把图片路径添加到png数组中
        this.list_png.push(this.list.png);
      }
    });
  },
}
</script>
<style scoped>
/* router-link的更改样式 */
a{
  text-decoration: none;
}
.router-link-active{
  text-decoration: none;
}
/* 文章列表 */
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