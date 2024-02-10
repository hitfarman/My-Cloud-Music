import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 为了能支持在config中传入拦截器对象, 针对AxiosRequestConfig配置进行扩展(interface继承就支持扩展)
// export interface HYInterceptors<T = AxiosResponse> {
export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse>
  extends InternalAxiosRequestConfig {
  // 写成可选属性, 表示可传可不传
  interceptors?: HYInterceptors<T>
}
