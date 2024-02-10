import { BASE_URL, HEADERS, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: HEADERS
})

/**
 原来的config类型是:AxiosRequestConfig, 不支持传入拦截器对象
 */
export const hyRequest2 = new HYRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,
  headers: HEADERS,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('爱彼迎的请求成功的拦截')
      return config
    },
    requestFailureFn: (err) => {
      console.log('爱彼迎的请求失败的拦截')
      return err
    },
    responseSuccessFn: (res) => {
      console.log('爱彼迎的响应成功的拦截')
      return res
    },
    responseFailureFn: (err) => {
      console.log('爱彼迎的响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
