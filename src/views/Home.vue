<template>
  <div>
    <!-- 搜索框 -->
    <mt-search fixed class="search" cancel-text="取消" placeholder=" 搜索 菜谱分类"></mt-search>

    <!-- 轮播图 -->
    <mt-swipe class="swipe" style="height:200px">
      <mt-swipe-item><img src="../assets/200.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/xing02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/200.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/uname.png"></mt-swipe-item>
    </mt-swipe>

    <!-- 每日推荐 -->
    <div class="tjtitle">每日推荐</div>
    <div class="tuijian">
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
    </div>

    <!-- 优秀菜谱 -->
    <div class="tjtitle">优秀菜谱</div>
    <div class="tuijian">
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
      <router-link to="/detail">
        <div class="tj">
          <img src="../assets/200.png">
          <p>家常鱼香肉丝</p>
        </div>
      </router-link>
    </div>

    <!-- 专辑推荐 -->
    <div class="tjtitle">专辑推荐</div>
    <div class="zj">
      <router-link to="/list">
        <div class="zhuanji">
          <img src="../assets/200.png">
          <div class="texts">一周热门菜谱</div>
        </div>
      </router-link>
      <router-link to="/list">
        <div class="zhuanji">
          <img src="../assets/200.png">
          <div class="texts">一周热门菜谱</div>
        </div>
      </router-link>
      <router-link to="/list">
        <div class="zhuanji">
          <img src="../assets/200.png">
          <div class="texts">一周热门菜谱</div>
        </div>
      </router-link>
      <router-link to="/list">
        <div class="zhuanji">
          <img src="../assets/200.png">
          <div class="texts">一周热门菜谱</div>
        </div>
      </router-link>
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
      <mt-tab-item id="me">
        <img v-if="selected=='me'" src="../assets/me_1.png" slot="icon">
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
      selected:'home', 
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
<style scoped>
a{
  text-decoration: none;
  color: black;
}
.router-link-active{
  text-decoration: none;
}
p{
  text-align: center;
  width: 170px;
}
/* 推荐标题 */
.tjtitle{
  border-top: 1px solid #ccc;
  padding-top: 8px;
  font-size: 20px;
  margin: 10px;
}
/* 推荐 */
.tuijian{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tj{
  background-color: red;
  width: 170px;
  height: 100px;
  margin: 0 8px 40px 8px;
}
.tj img{
  width: 170px;
  height: 100px;
}
/* 专辑 */
.zj{
  margin-bottom: 60px;
}
.zhuanji{
  position: relative;
  margin-bottom: 10px;
}
.zhuanji img,
.texts{
  width: 350px;
  height: 170px;
  margin: 0 12px;
}
.texts{
  position: absolute;
  top: 0%;
  left: 0%;
  color: white;
  font-size: 17px;
  background-color: rgba(75, 72, 72,0.3);
  text-align: center;
  line-height: 170px;
}
</style>