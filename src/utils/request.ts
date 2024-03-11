import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type Method
} from 'axios'

import type { DataType } from '../utils/types'

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 相应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 200 && response.data.code === 20000) {
      return response.data
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

const request = <T = any>(
  url: string,
  method: Method = 'GET',
  data?: Object,
  options?: InternalAxiosRequestConfig
) => {
  return service.request<T, DataType<T>>({
    url,
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...options
    // data
  })
}

export const get = <T = any>(url: string, data: Object) => {
  return request(url, 'GET', data)
}
export const post = <T = any>(url: string, data: Object) => {
  return request(url, 'POST', data)
}
export const del = <T = any>(url: string, data: Object) => {
  return request(url, 'DELETE', data)
}
export const put = <T = any>(url: string, data: Object) => {
  return request(url, 'PUT', data)
}

export default request
