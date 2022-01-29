import { defineStore } from 'pinia'
// utils
import localCache from '@/utils/cache'
// constants
import { TOKEN_KEY } from '@/constants/cache_keys'

interface UserState {
  username: string
  token?: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    username: 'Kaifeng Xue',
    token: undefined
  }),
  getters: {
    getToken(): string | null {
      return this.token || localCache.getCache(TOKEN_KEY)
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localCache.setCache(TOKEN_KEY, token)
    }
  }
})

export function setupUser() {
  const userStore = useUserStore()
  // 设置token
  const token = localCache.getCache(TOKEN_KEY)
  token && userStore.setToken(token)
}
