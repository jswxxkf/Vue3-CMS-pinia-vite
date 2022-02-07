<template>
  <div class="department">
    <page-search
      :search-form-config="searchFormConfig"
      @on-reset-btn-click="handleResetClick"
      @on-search-btn-click="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      page-name="department"
      :content-table-config="contentTableConfig"
      @edit-btn-clicked="handleEditData"
      @create-btn-clicked="handleCreateData"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfig"
      page-name="department"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script setup lang="ts">
// sub cpn
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// config
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
// hooks
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageModalRef, defaultInfo, handleCreateData, handleEditData } = usePageModal()
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
</script>

<style scoped lang="less"></style>
