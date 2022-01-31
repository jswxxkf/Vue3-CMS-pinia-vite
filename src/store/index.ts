import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'

const store = createPinia()

export function setupStore() {
  setupUser()
}

export { useUserStore }

export default store
