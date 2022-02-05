import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(createCb?: CallbackFn, editCb?: CallbackFn) {
  const defaultInfo = ref<any>({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleCreateData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    createCb && createCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return {
    defaultInfo,
    pageModalRef,
    handleCreateData,
    handleEditData
  }
}
