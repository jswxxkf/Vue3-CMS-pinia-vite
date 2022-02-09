import { defineStore } from 'pinia'
import router from '@/router'
import { useMainStore } from '..'
// utils
import localCache from '@/utils/cache'
import { getAllRoutes, filterOutValidRoutes, mapMenusToPermissions } from '@/utils/map-menus'
// constants
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  USER_MENUS_KEY,
  USER_PERMISSIONS_KEY
} from '@/constants/cache_keys'
// types
import { IAccount } from '@/service/login/types'
// service
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'

interface IUserState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

export const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {
    getToken(): string {
      return this.token || localCache.getCache(TOKEN_KEY)
    },
    getUserInfo(): any {
      return this.userInfo || localCache.getCache(USER_INFO_KEY)
    },
    getUserMenus(): any {
      return this.userMenus || localCache.getCache(USER_MENUS_KEY)
    },
    getPermissions(): any[] {
      return this.permissions || localCache.getCache(USER_PERMISSIONS_KEY)
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localCache.setCache(TOKEN_KEY, token)
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
      localCache.setCache(USER_INFO_KEY, userInfo)
    },
    setPermissions(permissions: string[]) {
      this.permissions = permissions
      localCache.setCache(USER_PERMISSIONS_KEY, permissions)
    },
    setUserMenus(userMenus: any) {
      this.userMenus = userMenus
      // 获取所有主页路由信息
      const allRoutes = getAllRoutes()
      // 根据当前用户权限对应的菜单，筛选出符合条件的路由
      const validRoutes = filterOutValidRoutes(userMenus, allRoutes)
      // 注入主页的子路由
      validRoutes.forEach((route) => router.addRoute('main', route))
      localCache.setCache(USER_MENUS_KEY, userMenus)
    },
    async accountLogin(account: IAccount) {
      // 1.实现登录逻辑
      const loginRes = await accountLoginRequest(account)
      const { id, token } = loginRes.data
      this.setToken(token)
      // 2.发送初始化信息请求(完整的role/department)
      useMainStore().getInitialData()
      // 3.请求用户信息
      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      this.setUserInfo(userInfo)
      // 4.请求用户菜单
      const userMenusRes = await requestUserMenusById(id)
      const userMenus = userMenusRes.data
      this.setUserMenus(userMenus)
      // 5.根据用户菜单获取用户按钮(增删改查)权限
      const permissions = mapMenusToPermissions(userMenus)
      this.setPermissions(permissions)
      // 6.跳转首页
      router.push('/main')
    },
    async phoneLogin(loginParams: any) {
      console.log(loginParams)
    }
  }
})

export function setupUser() {
  const userStore = useUserStore()
  // 设置token
  const token = localCache.getCache(TOKEN_KEY)
  token && userStore.setToken(token)
  // 设置userInfo
  const userInfo = localCache.getCache(USER_INFO_KEY)
  userInfo && userStore.setUserInfo(userInfo)
  // 设置userMenus
  const userMenus = localCache.getCache(USER_MENUS_KEY)
  userMenus && userStore.setUserMenus(userMenus)
  const permissions = localCache.getCache(USER_PERMISSIONS_KEY)
  permissions && userStore.setPermissions(permissions)
}
