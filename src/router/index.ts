import { createRouter, createWebHistory } from 'vue-router'
// types
import type { RouteRecordRaw } from 'vue-router'
// utils
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
// constants
import { TOKEN_KEY } from '@/constants/cache_keys'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'init',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // 根据userMenus决定子路由需要注册哪些
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/error-page/error-page.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
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
  // 跳转至main，继续重定向到第一个菜单项对应子路由
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export const navigateToErrorPage = (msg: string) => {
  router.push(`/error?msg=${msg}`)
}

export default router
