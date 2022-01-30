// service统一出口
import KfRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const kfRequest = new KfRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default kfRequest
