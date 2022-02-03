import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'
import { useSystemStore } from './modules/system'

const store = createPinia()

export async function setupStore() {
  await setupUser()
}

export { useUserStore, useSystemStore }

export default store
