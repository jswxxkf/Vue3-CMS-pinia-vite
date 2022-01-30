import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { KfRequestConfig, KfRequestInterceptors } from './types'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = true

class KfRequest {
  instance: AxiosInstance
  interceptors?: KfRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: KfRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 各实例对应独有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.15)'
          })
        }
        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading状态移除
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~')
        }
        return data
      },
      (err) => {
        // 判断不同的errorCode来显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
  request<T>(config: KfRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求独有的请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 重新置showLoading为true,这样不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          // 将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: KfRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: KfRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  patch<T>(config: KfRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  delete<T>(config: KfRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default KfRequest
