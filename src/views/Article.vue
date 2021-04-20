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
        <div class="question-header-title">
          营养小常识
        </div>
        <div class="question-header-datetime">
          李艳鸣
        </div>
      </div>
      <!-- 作者信息 -->
      <div class="author-info">
          <img src="../assets/logo.png" class="author-info-avatar">
          <div class="author-info-detail">
              <div class="author-info-nickname">2021年4月20日</div>
              <div class="author-info-badge">
                  转载于<mt-badge type="primary" size="small">新闻网</mt-badge>
              </div>
          </div>
      </div>
      <!-- 内容 -->
      <div class="question-content">
          <div class="rich-content">
              一年之计在于春，一天之计在于晨，一天能量的摄入从早餐开始。随着现生活节奏的加快，夜生活的丰富，很多人的早餐就简单的对付一下，或者不吃，想减肥的朋友还说这样可以减肥呢。有条新闻大家应该还记着，一个女孩长期不吃早餐，最后得了胆结石，胆囊切除，取出了300多颗，数量相当的惊人，结果也是令人反省。我们的身体极其复杂，除了婴儿时期仅需要母乳外，没有任何单一的食物能包含人体所需最佳配比的全部营养。因此，我们的饮食应包括各种有营养的新鲜食物，才能保持身体健康。日常饮食中应含有小麦、玉米、大米、土豆等多种主食，外加不同的豆类、大量的新鲜水果和蔬菜以及肉类、鱼类、蛋类和奶类食品等动物来源的食品。尽量选择粗粮食品，如未经加工的玉米、小米、燕麦、小麦、糙米等。这些食物富含宝贵的纤维，能增加饱腹感。选择零食时，应以可生食的蔬菜、不加盐的干果和新鲜水果代替高糖、高脂、高盐食品。
          </div>
      </div>
    </div>


  </div>
</template>


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
