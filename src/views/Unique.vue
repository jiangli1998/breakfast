<template>
  <div>
    <!-- 搜索框 -->
    <mt-search fixed class="search" v-model="value" cancel-text="取消" placeholder="搜索 独家菜谱"></mt-search>

    <!-- 中间图片 -->
    <div class="container" >
      <router-link to="/detail">
        <div><img src="../assets/200.png" class="img1"></div>
        <div class="desc">
          <div class="title1">双蛋爱心餐</div>
          <div class="details">有双蛋在的地方,不必勾芡也能有黏黏糊糊的节奏,拌面拌饭都在行</div>
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
      value:"",
      selected:'unique',
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
.search{
    height: 50px !important;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
  .container{
    margin: 55px 0;
  }
  a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
.img1{
 width:100%;
}
.desc{margin:5px auto;}
.title1{font-size: 1.2em;margin: 5px auto;

}
.details{font-size: 12px;
			    color: #666;
			    margin-top: 5px;
          width: 250px;}
</style>