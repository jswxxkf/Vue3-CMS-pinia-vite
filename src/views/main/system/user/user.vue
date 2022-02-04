<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @on-reset-btn-click="handleResetClick"
      @on-search-btn-click="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
    />
  </div>
</template>

<script setup lang="ts">
// sub cpn
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
// config
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
// hooks
import { usePageSearch } from '@/hooks/use-page-search'

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
</script>

<style scoped lang="less"></style>
