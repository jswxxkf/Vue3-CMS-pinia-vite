import { defineStore } from 'pinia'
// service
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

interface IMainState {
  // system
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  menuList: any[]
  menuCount: number
  departmentList: any[]
  departmentCount: number
  // product
  goodsList: any[]
  goodsCount: number
  categoryList: any[]
  categoryCount: number
  // story
  storyList: any[]
  storyCount: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export const useMainStore = defineStore('main', {
  state: (): IMainState => {
    return {
      // system
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      // product
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0,
      // story
      storyList: [],
      storyCount: 0,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
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
    menuPageDataSetting(menuList: any[], menuCount: number) {
      this.menuList = menuList
      this.menuCount = menuCount
    },
    departmentPageDataSetting(deptList: any[], deptCount: number) {
      this.departmentList = deptList
      this.departmentCount = deptCount
    },
    goodsPageDataSetting(goodsList: any[], goodsCount: number) {
      this.goodsList = goodsList
      this.goodsCount = goodsCount
    },
    categoryPageDataSetting(categoryList: any[], categoryCount: number) {
      this.categoryList = categoryList
      this.categoryCount = categoryCount
    },
    storyPageDataSetting(storyList: any[], storyCount: number) {
      this.storyList = storyList
      this.storyCount = storyCount
    },
    setInitialData(deptList: any[], roleList: any[], menuList: any[]) {
      this.entireDepartment = deptList
      this.entireRole = roleList
      this.entireMenu = menuList
    },
    async getPageList(pageName: string, queryInfo: any) {
      const pageUrl = `/${pageName}/list`
      const pageRes = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageRes.data
      const pageDataSetter = `${pageName}PageDataSetting`
      ;(this as any)[pageDataSetter].call(this, list, totalCount)
    },
    async deletePageData(pageName: string, id: number) {
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      // 重新请求最新的数据
      await this.getPageList(pageName, {
        offset: 0,
        size: 10
      })
    },
    async getInitialData() {
      const deptRes = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: deptList } = deptRes.data
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleRes.data
      const menuRes = await getPageListData('/menu/list', {})
      const { list: menuList } = menuRes.data
      this.setInitialData(deptList, roleList, menuList)
    },
    async createPageData(pageName: string, newData: any) {
      // 1.创建数据的请求
      const pageUrl = `/${pageName}`
      await createPageData(pageName, newData)
      // 2.请求最新的数据
      await this.getPageList(pageName, {
        offset: 0,
        size: 10
      })
    },
    async editPageData(pageName: string, editData: any, id: number) {
      // 1.编辑数据的请求
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 2.请求最新的数据
      await this.getPageList(pageName, {
        offset: 0,
        size: 10
      })
    }
  }
})

export async function setupMain() {
  const mainStore = useMainStore()
  await mainStore.getInitialData()
}
