<template>
  <div class="menu">
    <page-content
      :content-table-config="contentTableConfig"
      page-name="menu"
      @create-btn-clicked="handleCreateData"
      @edit-btn-clicked="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      v-model="modalFormData"
      page-name="menu"
      :modal-config="reactiveModalConfig"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// config
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
// sub cpn
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
// hooks
import { usePageModal } from '@/hooks/use-page-modal'

const { pageModalRef, defaultInfo, handleCreateData, handleEditData } = usePageModal()
const modalFormData = ref<any>({})
const reactiveModalConfig = computed(() => {
  const iconConfig = modalConfig.formItems.find((item) => item.field === 'icon')
  const permissionConfig = modalConfig.formItems.find((item) => item.field === 'permission')
  if (modalFormData.value.type === 1) {
    iconConfig!.disabled = false
    permissionConfig!.disabled = true
  } else if (modalFormData.value.type === 3) {
    iconConfig!.disabled = true
    permissionConfig!.disabled = false
  } else {
    iconConfig!.disabled = true
    permissionConfig!.disabled = true
  }
  return modalConfig
})
</script>

<style scoped lang="less"></style>
