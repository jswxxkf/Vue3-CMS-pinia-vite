import { createPinia } from 'pinia'
import { setupUser, useUserStore } from './modules/user'

const store = createPinia()

export async function setupStore() {
  await setupUser()
}

export { useUserStore }

export default store
