<template>
  <div class="">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
  </div>
  <router-view></router-view>
  <div class="">{{ username }}</div>
  <el-button type="danger">危险按钮</el-button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
const username = useUserStore().username
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
