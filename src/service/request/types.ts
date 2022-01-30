import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface KfRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface KfRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KfRequestInterceptors<T>
  showLoading?: boolean
}
