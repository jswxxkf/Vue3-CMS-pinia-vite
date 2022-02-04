import { useUserStore } from '@/store'

export function usePermission(pageName: string, operName: string) {
  const userStore = useUserStore()
  const permissions = userStore.getPermissions
  const verifyPermission = `system:${pageName}:${operName}`
  return !!permissions.find((permission) => permission === verifyPermission)
}
