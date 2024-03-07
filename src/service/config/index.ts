import { AxiosHeaders } from 'axios'

// 1. 手动切换环境配置
export const BASE_URL = 'http://codercba.com:9002'
// // export const BASE_URL = 'http://codercba.com.dev:9002'
// // export const BASE_URL = 'http://codercba.prod:9002'

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

/** 第三种情况: 把环境变量的配置放到一个单独的配置文件中: .env.development .env.production
 * 3.从定义的环境变量的配置文件中,加载变量: 它也是放在:
 *    process.env 中的:
 *      process.env.NODE_ENV
 *      process.env.PUBLIC_URL
 *      process.env.TZ
 *      另外, 我们定义的环境配置文件中的变量,也会放到 process.env 里面:
 *      但是,它对在 .env.development .env.production 文件中配置的环境变量名字有要求:
 *      它要求,这些配置的变量名字必须以: REACT_APP_ 开头, 它才会加载进 process.env中
 *        比如: process.env.REACT_APP_BASE_URL
 *      (类似的,vite中, 配置的环境变量,必须以 VITE_ 开头)
 *      另外, 如果这里定义的变量要有类型提示, 还需要配置类型声明, 在 react-app-env.d.ts文件中增加:
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
 */
console.log(process.env.REACT_APP_BASE_URL)
