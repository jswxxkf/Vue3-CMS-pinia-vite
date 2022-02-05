import kfRequest from '@/service'
// types
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return kfRequest.post<IDataType<any>>({
    url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return kfRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return kfRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return kfRequest.patch<IDataType>({
    url,
    data: editData
  })
}
