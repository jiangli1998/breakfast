<template>
  <div>
    <!-- 顶部 -->
    <mt-header class="top">
      <router-link to="/" slot="left">
        <mt-button icon="back" style="color:white;font-size:16px">返回首页</mt-button>
      </router-link>
    </mt-header>
    
    <!-- 列表 -->
    <div>
      <mt-field label="用户名：" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码：" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="昵称：" placeholder="请输入昵称"></mt-field>
      <mt-field label="手机号：" placeholder="请输入手机号" type="tel"></mt-field>
    </div>
    <mt-button class="reg" size="large" type="default">立即注册</mt-button>
    <mt-button class="toLogin" size="large" type="default" onclick="javascript:location.href='/login'">已有账号，直接登录</mt-button>
  </div>
</template>
<style scoped>
  .top{
    background-color: #4D4D4D;
  }
  .uname{
    height: 27px;
  }
  .reg,
  .toLogin{
    width: 86%;
    height: 47px;
    margin-left: 7%;
    border-radius: 7px;
    color:#fff;
    background-color: #aaa;
  }
  .toLogin{
    margin-top: 20px;
    color:#fff;
    background-color: #FFC125	;
  }
</style>