<template>
  <div>
    <!-- 搜索框 -->
    <mt-search fixed class="search" cancel-text="取消" placeholder=" 搜索 菜谱分类"></mt-search>

    <!-- 菜谱分类 -->
    <div class="classify">
      <!-- 热门分类 -->
      <div>
        <div class="hot_title">热门分类</div>
        <div class="hot">
          <div v-for="(i) in hot" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div>

      <!-- 一日三餐 -->
      <div>
        <div class="hot_title">一日三餐</div>
        <div class="hot">
          <div v-for="(i) in hot" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div>
      
      <!-- 时令美食 -->
      <div>
        <div class="hot_title">时令美食</div>
        <div class="hot">
          <div v-for="(i) in hot" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div>

      <!-- 烘焙甜品 -->
      <div>
        <div class="hot_title">烘焙甜品</div>
        <div class="hot">
          <div v-for="(i) in sweet" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div>  

      <!-- 主食小吃 -->
      <div>
        <div class="hot_title">主食小吃</div>
        <div class="hot">
          <div v-for="(i) in sweet" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div> 

      <!-- 美容养生 -->
      <div>
        <div class="hot_title">美容养生</div>
        <div class="hot">
          <div v-for="(i) in beau" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
          </div>
        </div>
      </div> 

      <!-- 奇趣发现 -->
      <div>
        <div class="hot_title">奇趣发现</div>
        <div class="hot">
          <div v-for="(i) in find" :key="i">
            <router-link to="/list">
              <img src="../assets/logo.png">
            </router-link>
            <span class="title">早餐</span>
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
      hot:4,
      sweet:5,
      beau:9,
      find:8
      // busy:false
    }
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
  /* 菜谱分类 */
  .classify{
    margin: 55px 0;
  }
  /* 热门分类 */
  .hot_title{
    padding: 10px 0;
    font-size: 14px;
  }
  .hot{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hot div{
    position: relative;
    width: 23%;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: lightblue;
  }
  .hot div img{
    width: 82px;
  }
  .title{
    position: absolute;
    left: 30px;
    bottom: 5px;
    font-size: 12px;
  }
</style>
