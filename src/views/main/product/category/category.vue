<template>
  <div class="category">
    <page-search
      :search-form-config="searchFormConfig"
      @on-reset-btn-click="handleResetClick"
      @on-search-btn-click="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      page-name="category"
      :content-table-config="contentTableConfig"
      @create-btn-clicked="handleCreateData"
      @edit-btn-clicked="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      page-name="category"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script setup lang="ts">
// sub cpn
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// configs
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
//  hooks
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
const { pageModalRef, defaultInfo, handleCreateData, handleEditData } = usePageModal()
</script>

<style scoped lang="less"></style>
