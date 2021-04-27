<template>
  <div>
    <!-- 顶部 -->
    <mt-header class="top">
      <router-link to="/wode" slot="left">
        <mt-button icon="back" style="color:white;font-size:16px">返回</mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-field label="用户名：" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码：" placeholder="请输入密码" type="password"></mt-field>
    </div>
    <mt-button class="login1" size="large" type="primary">登录</mt-button>

  </div>
</template>
<style scoped>
  .top{
    background-color: #4D4D4D;
  }
  .login1{
    width: 86%;
    height: 47px;
    margin-left: 7%;
    border-radius: 7px;
    color:#fff;
    background-color: #FFC125;
  }
</style>