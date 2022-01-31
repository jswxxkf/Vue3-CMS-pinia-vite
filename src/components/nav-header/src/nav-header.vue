<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="30" @click="handleFoldClick">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// sub cpn
import { ElIcon } from 'element-plus'
import { Fold, Expand } from '@element-plus/icons-vue'

const emit = defineEmits(['onFoldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('onFoldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    cursor: pointer;
  }
}
</style>
