<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span>{{ username }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue/'
import { useUserStore } from '@/store'
import { computed } from 'vue'

const userStore = useUserStore()
const username = computed(() => userStore.getUserInfo.name)
</script>

<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    .avatar {
      width: 28px;
      height: 28px;
      margin-right: 5px;
    }
  }
}
</style>
