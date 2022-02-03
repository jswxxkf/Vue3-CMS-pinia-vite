import kfRequest from '@/service'
// types
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return kfRequest.post<IDataType<any>>({
    url,
    data: queryInfo
  })
}
