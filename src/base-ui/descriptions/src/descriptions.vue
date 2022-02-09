<template>
  <div class="kf-descriptions">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="(item, index) in descData" :key="index">
        <el-descriptions-item>
          <template #label>{{ item.name }}</template>
          <el-tag size="small">{{ item.desc }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    column?: number
    descData?: any[]
  }>(),
  {
    title: '',
    column: 1,
    descData: () => []
  }
)
</script>

<style scoped lang="less"></style>
