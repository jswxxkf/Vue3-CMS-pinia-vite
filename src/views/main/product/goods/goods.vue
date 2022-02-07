<template>
  <div class="goods">
    <page-search
      :search-form-config="searchFormConfig"
      @on-search-btn-click="handleSearchClick"
      @on-reset-btn-click="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="goods"
      @edit-btn-clicked="handleEditData"
      @create-btn-clicked="handleCreateData"
    >
      <template #image="scope">
        <!-- mode="aspectFill" -->
        <el-image style="width: 60px" :src="scope.row.imgUrl" fit="fill" />
      </template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      page-name="goods"
      :default-info="defaultInfo"
      :modal-config="modalConfig"
    />
  </div>
</template>

<script setup lang="ts">
// config
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
// sub cpn
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// hooks
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleSearchClick, handleResetClick } = usePageSearch()
const { pageModalRef, defaultInfo, handleCreateData, handleEditData } = usePageModal()
</script>

<style scoped lang="less"></style>
