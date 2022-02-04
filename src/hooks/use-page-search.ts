import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 事件处理
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleSearchClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return { pageContentRef, handleResetClick, handleSearchClick }
}
