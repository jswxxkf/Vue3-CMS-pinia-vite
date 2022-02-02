<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="30" @click="handleFoldClick">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div class="">
        <kf-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div class=""><user-info /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/store'
import { useRoute } from 'vue-router'
// sub cpn
import { ElIcon } from 'element-plus'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import KfBreadcrumb from '@/base-ui/breadcrumb'
// utils
import { mapPathToBreadcrumbs } from '@/utils/map-menus'

const userStore = useUserStore()
const route = useRoute()
const emit = defineEmits(['onFoldChange'])
// 菜单向左折叠处理
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('onFoldChange', isFold.value)
}
// 面包屑导航数据
const breadcrumbs = computed(() => {
  const userMenus = userStore.getUserMenus
  const currentPath = route.path
  return mapPathToBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  .fold-menu {
    height: 100%;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
}
</style>
