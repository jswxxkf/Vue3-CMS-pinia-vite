<template>
  <div class="app">
    <el-config-provider :locale="zhCN">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCN from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
