<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" :class="isCollapsed ? 'img-collapsed' : 'img'" />
      <span v-if="!isCollapsed" class="title">Vue3+TS+Pinia+Vite</span>
    </div>
    <el-menu
      background-color="#0c2135"
      class="el-menu-vertical"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="false"
      :collapse="isCollapsed"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon"><component :is="getIconCpn(item.icon)" /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历二级菜单中的展开项 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                <el-icon v-if="subItem.icon"><component :is="getIconCpn(subItem.icon)" /></el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon v-if="item.icon"><component :is="getIconCpn(item.icon)" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, DefineComponent, ref } from 'vue'
// sub cpn
import { ElMenu, ElSubMenu, ElMenuItem, ElIcon } from 'element-plus'
import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons-vue'
// hooks
import { useUserStore } from '@/store'

const props = withDefaults(
  defineProps<{
    isCollapsed: boolean
  }>(),
  {
    isCollapsed: false
  }
)
const iconMapper = {
  'el-icon-monitor': Monitor,
  'el-icon-setting': Setting,
  'el-icon-goods': Goods,
  'el-icon-chat-line-round': ChatLineRound
} as { [k: string]: any }
const getIconCpn = (key: string) => iconMapper[key]
const userMenus = computed(() => useUserStore().getUserMenus)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px 10px;
    .img {
      height: 100%;
      margin: 0 10px 0 0;
    }
    .img-collapsed {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      line-height: 28px;
    }
  }
  .el-menu {
    border-right: none;
  }
  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单
  }
  &:deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }
  // hover 高亮
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
  .el-menu-item:hover {
    color: #ffffff !important; // 菜单
  }
  .el-menu-item.is-active {
    color: #ffffff !important;
    background-color: #0a60bd !important;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
