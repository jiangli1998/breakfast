<template>
  <div id="color">
    <!-- 搜索框 -->
    <mt-search fixed class="search" cancel-text="取消" placeholder="搜索"></mt-search>
    
    <div class="container">
      <!-- 登录 注册 -->
      <div class="login classColor" >
        <div class="yuan"></div>
      <router-link to="/register"><div class="mar">用户嘻嘻嘻</div></router-link>
      </div>
      <!-- 菜篮子 -->
      <div class="classColor collect">
        <div class="bot hei">
          <img src="../assets/xingxing2.png" class="img">
          菜谱收藏 
        </div>
        <div class="hei">
          <img src="../assets/cailanzi1.png" class="img">
          菜篮子
        </div>
      </div>
      <!-- 好评 -->
      <div class="classColor good">
        <div class="bottom">
          <img src="../assets/shangchuan1.png" class="img">
          菜谱达人
        </div>
        <div class="bottom">
          <img src="../assets/dianzan1.png" class="img">
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
      <mt-button style="background-color: #ffc125;color:white;margin:10px 0" size="large">退出登录</mt-button>
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
      selected:'wode', 
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
  *{
    margin:0px;
    padding: 0px;
  }
  #color{
    background-color: #e9e9e9;
  }
  a{
  text-decoration: none;
  color: black;
}
.router-link-active{
  text-decoration: none;
}
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
  .container{
    margin: 55px 0;
  }
  .login{
    height: 100px;
    padding: 20px;
    margin-top: 55px;
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
  }
  .bottom{
    margin-bottom: 10px;
  }
  .img{
    width:40px;
    height: 40px;
    vertical-align:middle;
    padding: 10px;
  }
  
</style>