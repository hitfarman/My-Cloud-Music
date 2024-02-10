import { AxiosHeaders } from 'axios'

// 1. 手动切换环境配置
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.com.dev:9002'
// export const BASE_URL = 'http://codercba.prod:9002'

export const TIME_OUT = 10000
export const HEADERS = new AxiosHeaders({
  'Content-Type': 'application/json'
})

// 2.依赖于当前环境: development/production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.com.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中,加载变量
// console.log(process.env.REACT_APP_BASE_URL)
