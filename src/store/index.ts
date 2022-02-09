import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'
import { setupMain, useMainStore } from './modules/main'
import { useAnalysisStore } from './modules/analysis'

const store = createPinia()

export function setupStore() {
  setupUser()
  setupMain()
}

export { useUserStore, useMainStore, useAnalysisStore }

export default store
