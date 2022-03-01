import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'
import { setupMain, useMainStore } from './modules/main'
import { useAnalysisStore } from './modules/analysis'
// utils
import localCache from '@/utils/cache'

const store = createPinia()

export function setupStore() {
  setupUser()
  const token = localCache.getCache('token')
  token && setupMain()
}

export { useUserStore, useMainStore, useAnalysisStore }

export default store
