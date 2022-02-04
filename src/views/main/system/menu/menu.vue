<template>
  <div class="menu">
    <page-content :content-table-config="contentTableConfig" page-name="menu" />
  </div>
</template>

<script setup lang="ts">
// config
import { contentTableConfig } from './config/content.config'
// sub cpn
import PageContent from '@/components/page-content'
</script>

<style scoped lang="less"></style>
