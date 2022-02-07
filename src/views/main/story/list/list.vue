<template>
  <div class="story-list">
    <page-content page-name="story" :content-table-config="contentTableConfig" />
  </div>
</template>

<script setup lang="ts">
// sub cpn
import PageContent from '@/components/page-content'
// configs
import { contentTableConfig } from './config/content.config'
</script>

<style scoped lang="less"></style>
