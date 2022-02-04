import { defineStore } from 'pinia'
// service
import { getPageListData } from '@/service/main/system/system'

interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
}

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData() {
      return (pageName: string) => {
        return (this as any)[`${pageName}List`]
      }
    },
    pageListCount() {
      return (pageName: string) => {
        return (this as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    usersPageDataSetting(usersList: any[], usersCount: number) {
      this.usersList = usersList
      this.usersCount = usersCount
    },
    rolePageDataSetting(roleList: any[], roleCount: number) {
      this.roleList = roleList
      this.roleCount = roleCount
    },
    goodsPageDataSetting(goodsList: any[], goodsCount: number) {
      this.goodsList = goodsList
      this.goodsCount = goodsCount
    },
    menuPageDataSetting(menuList: any[], menuCount: number) {
      this.menuList = menuList
      this.menuCount = menuCount
    },
    async getPageList(pageName: string, queryInfo: any) {
      const pageUrl = `/${pageName}/list`
      const pageRes = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageRes.data
      const pageDataSetter = `${pageName}PageDataSetting`
      ;(this as any)[pageDataSetter].call(this, list, totalCount)
    }
  }
})
