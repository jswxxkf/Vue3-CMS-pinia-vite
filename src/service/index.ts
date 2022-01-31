// service统一出口
import KfRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
// utils
import localCache from '@/utils/cache'
// constants
import { TOKEN_KEY } from '@/constants/cache_keys'

const kfRequest = new KfRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache(TOKEN_KEY)
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default kfRequest
