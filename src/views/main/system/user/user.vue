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
      @create-btn-clicked="handleCreateData"
      @edit-btn-clicked="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :default-info="defaultInfo"
      :modal-config="reactiveModalConfig"
      page-name="users"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
import { useMainStore } from '@/store'

const mainStore = useMainStore()
const reactiveModalConfig = computed(() => {
  const deptConfig = modalConfig.formItems.find((item) => item.field === 'departmentId')
  deptConfig!.options = mainStore.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })
  const roleConfig = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleConfig!.options = mainStore.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
// pageModal相关hook逻辑
// 以下属于页面独有逻辑，并非公共部分
const createCallback = () => {
  const pwConfig = modalConfig.formItems.find((item) => item.field === 'password')
  pwConfig!.isHidden = false
}
const editCallback = () => {
  const pwConfig = modalConfig.formItems.find((item) => item.field === 'password')
  pwConfig!.isHidden = true
}
const { pageModalRef, defaultInfo, handleCreateData, handleEditData } = usePageModal(
  createCallback,
  editCallback
)
</script>

<style scoped lang="less"></style>
