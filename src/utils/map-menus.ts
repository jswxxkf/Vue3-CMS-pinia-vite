import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function getAllRoutes(): RouteRecordRaw[] {
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.globEager('../router/main/**/*.ts')
  Object.keys(routeFiles).forEach(async (key, index) => {
    const route = routeFiles[key].default
    allRoutes.push(route)
  })
  console.log(allRoutes)
  return allRoutes
}

export function filterOutValidRoutes(userMenus: any[], allRoutes: RouteRecordRaw[]) {
  const validRoutes: RouteRecordRaw[] = []
  // userMenus:
  // type === 1: children
  // type === 2: url=>route
  function _recursiveGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          validRoutes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recursiveGetRoute(menu.children)
      }
    }
  }
  _recursiveGetRoute(userMenus)
  return validRoutes
}

export function mapPathToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapPathToBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  mapPathToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recursiveGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursiveGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recursiveGetPermission(userMenus)
  return permissions
}

export function mapMenusToLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recursiveGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recursiveGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recursiveGetLeaf(menuList)
  return leafKeys
}

export { firstMenu }
