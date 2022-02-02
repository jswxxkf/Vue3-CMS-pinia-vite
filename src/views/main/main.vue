<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapsed ? '60px' : '210px'">
        <nav-menu :is-collapsed="isCollapsed" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @on-fold-change="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// sub cpn
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

const isCollapsed = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapsed.value = isFold
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-content {
    height: 100%;
    .page {
      height: 100%;
      .page-content {
        height: calc(100% - 48px);
      }
    }
    .page-info {
      background-color: #fff;
    }
  }
}
.el-header {
  display: flex;
  align-items: center;
  height: 48px !important;
  color: #333;
  text-align: center;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  background-color: #001529;
  cursor: pointer;
  transition: width 0.3s linear;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
