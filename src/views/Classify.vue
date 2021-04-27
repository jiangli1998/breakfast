<template>
  <div>
    <!-- 搜索框 -->
    <mt-search fixed class="search" cancel-text="取消" placeholder=" 搜索 菜谱分类"></mt-search>

    <!-- 菜谱分类 -->
    <div class="classify">
      <!-- 热门分类 -->
      <div class="r1">
        <div class="hot_title">热门分类</div>
        <div class="hot">
          <div v-for="(item,i) in remen.length" :key="i">
            <router-link to="/list">
              <img :src="remen_png[i]">
            </router-link>
            <span class="title">{{remen[i].title}}</span>
          </div>
        </div>
      </div>
      <!-- 一日三餐 -->
      <div>
        <div class="hot_title">一日三餐</div>
        <div class="hot">
          <div v-for="(item,i) in sancan.length" :key="i">
            <router-link to="/list">
              <img :src="sancan_png[i]">
            </router-link>
            <span class="title">{{sancan[i].title}}</span>
          </div>
        </div>
      </div>
      <!-- 时令美食 -->
      <div>
        <div class="hot_title">时令美食</div>
        <div class="hot">
          <div v-for="(item,i) in meishi.length" :key="i">
            <router-link to="/list">
              <img :src="meishi_png[i]">
            </router-link>
            <span class="title">{{meishi[i].title}}</span>
          </div>
        </div>
      </div>
      <!-- 烘焙甜品 -->
      <div>
        <div class="hot_title">烘焙甜品</div>
        <div class="hot">
          <div v-for="(item,i) in hongbei.length" :key="i">
            <router-link to="/list">
              <img :src="hongbei_png[i]">
            </router-link>
            <span class="title">{{hongbei[i].title}}</span>
          </div>
        </div>
      </div>  
      <!-- 主食小吃 -->
      <div>
        <div class="hot_title">主食小吃</div>
        <div class="hot">
          <div v-for="(item,i) in zhushi.length" :key="i">
            <router-link to="/list">
              <img :src="zhushi_png[i]">
            </router-link>
            <span class="title">{{zhushi[i].title}}</span>
          </div>
        </div>
      </div> 
      <!-- 美容养生 -->
      <div>
        <div class="hot_title">美容养生</div>
        <div class="hot">
          <div v-for="(item,i) in meirong.length" :key="i">
            <router-link to="/list">
              <img :src="meirong_png[i]">
            </router-link>
            <span class="title">{{meirong[i].title}}</span>
          </div>
        </div>
      </div> 
      <!-- 奇趣发现 -->
      <div>
        <div class="hot_title">奇趣发现</div>
        <div class="hot">
          <div v-for="(item,i) in qiqv.length" :key="i">
            <router-link to="/list">
              <img :src="qiqv_png[i]">
            </router-link>
            <span class="title">{{qiqv[i].title}}</span>
          </div>
        </div>
      </div>    
    </div>
 
    <!-- 底部导航栏 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img v-if="selected=='home'" src="../assets/home_1.png" slot="icon">
        <img v-else src="../assets/home_0.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="unique">
        <img v-if="selected=='unique'" src="../assets/unique_1.png" slot="icon">
        <img v-else src="../assets/unique_0.png" slot="icon">
        独家菜谱
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img v-if="selected=='classify'" src="../assets/classify_1.png" slot="icon">
        <img v-else src="../assets/classify_0.png" slot="icon">
        菜谱分类
      </mt-tab-item>
      <mt-tab-item id="wode">
        <img v-if="selected=='wode'" src="../assets/me_1.png" slot="icon">
        <img v-else src="../assets/me_0.png" slot="icon">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected:'classify', 
      
      remen:{},//热门推荐搜索结果
      remen_png:[],//热门推荐图片路径

      sancan:{},//一日三餐搜索结果
      sancan_png:[],//一日三餐推荐图片路径

      meishi:{},//时令美食搜索结果
      meishi_png:[],//时令美食推荐图片路径

      hongbei:{},//烘焙甜品搜索结果
      hongbei_png:[],//烘焙甜品推荐图片路径

      zhushi:{},//主食小吃搜索结果
      zhushi_png:[],//主食小吃荐图片路径

      meirong:{},//美容养生搜索结果
      meirong_png:[],//美容养生推荐图片路径

      qiqv:{},//奇趣发现搜索结果
      qiqv_png:[],//奇趣发现推荐图片路径
    }
  },
  mounted() {
    // 发送HTTP请求，获取热门推荐类别列表
    this.axios.get('/classify/remen').then(result=>{
      this.remen=result.data.results;
      for(let i=0;i<this.remen.length;i++){
        // 获取图片路径
        this.remen.png=require(`../assets/classify/${this.remen[i].png}`);
        // 把图片路径添加到png数组中
        this.remen_png.push(this.remen.png);
      }
    });

    // 发送HTTP请求，获取一日三餐类别列表
    this.axios.get('/classify/sancan').then(result=>{
      this.sancan=result.data.results;
      for(let i=0;i<this.sancan.length;i++){
        // 获取图片路径
        this.sancan.png=require(`../assets/classify/${this.sancan[i].png}`);
        // 把图片路径添加到png数组中
        this.sancan_png.push(this.sancan.png);
      }
    });

    // 发送HTTP请求，获取时令美食类别列表
    this.axios.get('/classify/meishi').then(result=>{
      this.meishi=result.data.results;
      for(let i=0;i<this.meishi.length;i++){
        // 获取图片路径
        this.meishi.png=require(`../assets/classify/${this.meishi[i].png}`);
        // 把图片路径添加到png数组中
        this.meishi_png.push(this.meishi.png);
      }
    });

    // 发送HTTP请求，获取烘焙甜品类别列表
    this.axios.get('/classify/hongbei').then(result=>{
      this.hongbei=result.data.results;
      for(let i=0;i<this.hongbei.length;i++){
        // 获取图片路径
        this.hongbei.png=require(`../assets/classify/${this.hongbei[i].png}`);
        // 把图片路径添加到png数组中
        this.hongbei_png.push(this.hongbei.png);
      }
    });

    // 发送HTTP请求，获取主食小吃类别列表
    this.axios.get('/classify/zhushi').then(result=>{
      this.zhushi=result.data.results;
      for(let i=0;i<this.zhushi.length;i++){
        // 获取图片路径
        this.zhushi.png=require(`../assets/classify/${this.zhushi[i].png}`);
        // 把图片路径添加到png数组中
        this.zhushi_png.push(this.zhushi.png);
      }
    });

    // 发送HTTP请求，获取美容养生类别列表
    this.axios.get('/classify/meirong').then(result=>{
      this.meirong=result.data.results;
      for(let i=0;i<this.meirong.length;i++){
        // 获取图片路径
        this.meirong.png=require(`../assets/classify/${this.meirong[i].png}`);
        // 把图片路径添加到png数组中
        this.meirong_png.push(this.meirong.png);
      }
    });

    // 发送HTTP请求，获取奇趣发现类别列表
    this.axios.get('/classify/qiqv').then(result=>{
      this.qiqv=result.data.results;
      for(let i=0;i<this.qiqv.length;i++){
        // 获取图片路径
        this.qiqv.png=require(`../assets/classify/${this.qiqv[i].png}`);
        // 把图片路径添加到png数组中
        this.qiqv_png.push(this.qiqv.png);
      }
    });
  },
  watch:{
    // 页面跳转
    selected(newval ){
      if(newval=="home"){
        this.$router.push('/');
      }else if(newval=="unique"){
        this.$router.push('/unique');
      }else if(newval=="classify"){
        this.$router.push('/classify');
      }else if(newval=="wode"){
        this.$router.push('/wode');
      }
    }
  }
}
</script>
<style>
/* 搜索框 */
.search{
  height: 50px !important;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
/* 主体分类 */
.classify{
  padding: 10px;
  margin: 55px 0;
}
/* 分类标题 */
.hot_title{
  padding: 25px 0 10px 0;
  font-size: 17px;
  text-align: center;
}
/* 分类项 */
.hot{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hot div{
  position: relative;
  width: 23%;
  border-radius: 5px;
  margin-bottom: 30px;
}
/* 推荐图片 */
.hot div img{
  width: 82px;
  height: 60px;
}
/* 小标题 */
.title{
  position: absolute;
  left: 25px;
  bottom: -20px;
  font-size: 16px;
}
.r1{
  margin-top: -40px;
}
</style>
