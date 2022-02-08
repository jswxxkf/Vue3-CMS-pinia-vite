<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Card Title'
  }
)
</script>

<style scoped lang="less">
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
  .item {
    margin-bottom: 1px;
  }
}
</style>
