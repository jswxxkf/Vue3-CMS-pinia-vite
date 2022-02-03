import { defineStore } from 'pinia'
// service
import { getPageListData } from '@/service/main/system/system'

interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
}

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
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
    async getPageList(pageName: string, offset = 0, size = 10) {
      const pageUrl = `/${pageName}/list`
      const pageRes = await getPageListData(pageUrl, { offset, size })
      const { list, totalCount } = pageRes.data
      const pageDataSetter = `${pageName}PageDataSetting`
      ;(this as any)[pageDataSetter].call(this, list, totalCount)
    }
  }
})
