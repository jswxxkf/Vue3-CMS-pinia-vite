import { createRouter, createWebHistory } from 'vue-router'
// types
import type { RouteRecordRaw } from 'vue-router'
// utils
import localCache from '@/utils/cache'
// constants
import { TOKEN_KEY } from '@/constants/cache_keys'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = localCache.getCache(TOKEN_KEY)
    if (!token) {
      return '/login'
    }
  }
})

export default router
