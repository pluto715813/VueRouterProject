<template>
<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link class="nav-link" :to="{name:'homeLink'}">Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link class="nav-link" :to="{name:'downloadLink'}">下载</router-link></el-menu-item>
    <el-menu-item index="3" style="float:right;"><router-link class="nav-link" :to="{name:'loginLink'}">登录</router-link></el-menu-item>
    <el-menu-item index="4" style="float:right;"><router-link class="nav-link" :to="{name:'registerLink'}">注册</router-link></el-menu-item>
</el-menu>
</template>

<script>
  export default {

  }
</script>
