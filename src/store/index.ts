import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'
import { setupSystem, useSystemStore } from './modules/system'

const store = createPinia()

export async function setupStore() {
  await setupUser()
  await setupSystem()
}

export { useUserStore, useSystemStore }

export default store
