const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')

/* craco.config.js */
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
      // options: { // 用于给antd 注入一些主题的; 暂时不用
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1DA57A' },
      //       javascriptEnabled: true
      //     }
      //   }
      // }
    }
  ]
}
