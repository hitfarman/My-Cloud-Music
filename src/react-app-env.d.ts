/// <reference types="react-scripts" />

// 在系统文件 react-scripts 中有 ProcessEnv 的类型声明:
// declare namespace NodeJS {
//   interface ProcessEnv {
//     readonly NODE_ENV: 'development' | 'production' | 'test'
//     readonly PUBLIC_URL: string
//   }
// }
//在自己的文件,再定义一次 ProcessEnv, 就可以把自己定义的类型合并进ProcessEnv接口定义:
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
