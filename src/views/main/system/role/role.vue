<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      @on-reset-btn-click="handleResetClick"
      @on-search-btn-click="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="role"
      @create-btn-clicked="handleCreateData"
      @edit-btn-clicked="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :default-info="defaultInfo"
      :modal-config="modalConfig"
      :other-info="otherInfo"
      page-name="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="entireMenu"
          node-key="id"
          show-checkbox
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
// sub cpn
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { ElTree } from 'element-plus'
// config
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
// hooks
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useMainStore } from '@/store'
// utils
import { mapMenusToLeafKeys } from '@/utils/map-menus'

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
// 编辑相关hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = mapMenusToLeafKeys(item.menuList)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const { defaultInfo, pageModalRef, handleCreateData, handleEditData } = usePageModal(
  undefined,
  editCallback
)
const otherInfo = ref({})
// 加载全部菜单项
const mainStore = useMainStore()
const entireMenu = computed(() => mainStore.entireMenu)
// 事件处理
const handleCheckChange = (data1: any, data2: any) => {
  const checkedIds = data2.checkedNodes.map((node: any) => node.id)
  const halfCheckedIds = data2.halfCheckedNodes.map((node: any) => node.id)
  const menuList = [...checkedIds, ...halfCheckedIds]
  otherInfo.value = { menuList: menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 60px;
}
</style>
