import { defineStore } from 'pinia'
// network
import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'

interface IAnalysisState {
  categoryGoodsCount: any[]
  categoryGoodsFavor: any[]
  categoryGoodsSale: any[]
  addressGoodsSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  getters: {},
  actions: {
    async getDashboardDataAction() {
      const categoryCountRes = await getCategoryGoodsCount()
      this.categoryGoodsCount = categoryCountRes.data
      const categoryFavorRes = await getCategoryGoodsFavor()
      this.categoryGoodsFavor = categoryFavorRes.data
      const categorySaleRes = await getCategoryGoodsSale()
      this.categoryGoodsSale = categorySaleRes.data
      const addressSaleRes = await getAddressGoodsSale()
      this.addressGoodsSale = addressSaleRes.data
    }
  }
})

export { useAnalysisStore }
