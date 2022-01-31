import kfRequest from '..'
// types
import type { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法 /users/1
  UserMenus = '/role/' // 用法: /role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return kfRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return kfRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return kfRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
