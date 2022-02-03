<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path ?? '' }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
// types
import { IBreadcrumb } from '../types'

const props = withDefaults(
  defineProps<{
    breadcrumbs: IBreadcrumb[]
  }>(),
  {
    breadcrumbs: () => []
  }
)
</script>

<style scoped lang="less"></style>
