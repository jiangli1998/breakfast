<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="菜谱详情">
      <router-link to="/unique" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-tab-item slot="right">
        <img style="width:25px" src="../assets/xingxing.png">
      </mt-tab-item>
    </mt-header>
    <!-- 详情 -->
    <div class="container" >
      <!-- 图片 -->
      <div><img src="../assets/detaill.png" class="img1"></div>
      <!-- 菜名 -->
      <div class="container_txt">
        <div class="biaoti">小米山药粥</div>
        <div class="grey">已有<span>2</span>人点赞 <span>3</span>人收藏</div>
        <div>怪味喜</div>
      </div>
      <!-- 介绍 -->
      <div>
        <div><img src="../assets/sz.png" class="sz"></div>
        <div class="neirong">给每一个烦恼一个期限,在有限的时间内尽力解决,剩下的时间请还给快乐的自己</div>
        <div><img src="../assets/sy.png" class="sy"></div>
      </div> 
      <!-- 材料 -->
      <mt-cell title="材料" style="font-size:20px; margin-top:20px;" >
        <span style="color: orange">加入菜篮子</span>
      </mt-cell>        
      <!-- 配料 -->
      <ul class="dami">
        <li >大米<span>50g</span></li>
        <li >大米<span>50g</span></li>
        <li >大米<span>50g</span></li>
        <li >大米<span>50g</span></li>
        <li >大米<span>50g</span></li>
        <li >大米<span>50g</span></li>
      </ul> 
      <!-- 烹饪步骤 -->
      <div class="container_txt">
        <div><span>-</span>烹饪步骤<span>-</span></div>
        <div style="font-size:12px;margin: 5px;color:grey;">点击步骤进入烹饪模式</div>
      </div>
      <span>
        1.将山药先冲洗干净,然后用削皮刀将山药的皮刮掉,然后切成不规则的小段。
        2.将煮锅中放入半锅纯净水,然后开火,待水烧开后,将小米淘洗一下,然后倒在煮锅中。
        3.然后,待锅中小米煮10分钟左右时,将切好的山药放入锅中,然后大火煮开,再改成小火慢煮。
        4.当小火煮10分钟左右时,用勺子搅拌搅拌,然后继续盖上锅盖小火煮制。
        5.再继续煮10分钟后,再用勺子搅拌一下,盖上锅盖,然后关火,等5分钟后再启锅盖盛出食用。
      </span>
      <div><img src="../assets/detaill.png" class="img1"> </div>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      
    }
  },
  watch:{
    // 如果watch中只接受了一个参数，vue将会自动传入新值
    selected(newval){
      if(newval=='home'){
        Toast('收藏成功');
        // this.$router.push('/')
      }else if(newval=='me'){
          Toast('加入成功');
        // this.$router.push('/me')  // 需要新建Me.vue
      }
    }
  }
}
</script>
<style scoped>
  body{
    margin:0;
    padding: 0;
  }
  .container_txt{
    text-align: center;
  }
  .img1{
    width:100%;
  }
  .dami{
    margin-bottom: 15px;
  }
  .dami li{
    padding:10px 15px;
  }
  .dami span{
    margin-left: 250px;
  }
  .container{
    height: 380px; 
    margin: 0 auto;
    position: relative;
  }
  .container_txt{ 
    position: relative;
    margin-top: 2px; 
    width: 100%;
  }
  .desc{
    height:50px; 
    width:400px; 
    position: absolute;
    float: left;
  }
  .title{
    font-size: 1.0em; 
    color: #333;
    margin-right:50px;
  }
  .details{
    font-size: 12px;
    color: #666;
    margin-top: 4px;
    width: 200px;
  }
  .ms{
    float: right;
  }
  .img2{
    width: 45px;
    height: 45px;
    float: right;
    margin-right: 10px;
    margin-top: 0px;
  }
  .grey{
    color: grey;
    font-size: 14px;
    margin: 5px;
  }
  .sz{
    width: 20px;
    position: absolute; 
    left: 0;
  }
  .sy{
    width: 20px;
    float: right;
  }
  .neirong{
    width: 90%;
    margin-right: 30px;
    margin-left: 30px;
  }
</style>