import { defineStore } from 'pinia'
import router from '@/router'
// utils
import localCache from '@/utils/cache'
// constants
import { TOKEN_KEY, USER_INFO_KEY, USER_MENUS_KEY } from '@/constants/cache_keys'
// types
import { IAccount } from '@/service/login/types'
// service
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'

interface UserState {
  token: string
  userInfo: any
  userMenus: any
}

export const useUserStore = defineStore({
  id: 'user',
  state(): UserState {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
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
    setUserMenus(userMenus: any) {
      this.userMenus = userMenus
      localCache.setCache(USER_MENUS_KEY, userMenus)
    },
    async accountLogin(account: IAccount) {
      // 1.实现登录逻辑
      const loginRes = await accountLoginRequest(account)
      const { id, token } = loginRes.data
      this.setToken(token)
      // 2.请求用户信息
      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      this.setUserInfo(userInfo)
      // 3.请求用户菜单
      const userMenusRes = await requestUserMenusById(id)
      const userMenus = userMenusRes.data
      this.setUserMenus(userMenus)
      // 4.跳转首页
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
}
