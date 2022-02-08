import kfRequest from '@/service'
import { IDataType } from '@/service/types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return kfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsFavor() {
  return kfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getCategoryGoodsSale() {
  return kfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getAddressGoodsSale() {
  return kfRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
