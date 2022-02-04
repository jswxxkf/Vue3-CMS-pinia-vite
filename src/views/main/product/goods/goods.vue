<template>
  <div class="goods">
    <page-content :content-table-config="contentTableConfig" page-name="goods">
      <template #image="scope">
        <el-image style="width: 60px" :src="scope.row.imgUrl" fit="fill" />
      </template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
// config
import { contentTableConfig } from './config/content.config'
// sub cpn
import PageContent from '@/components/page-content'
</script>

<style scoped lang="less"></style>
