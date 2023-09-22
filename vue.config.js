const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  productionSourceMap:false,
  // 代理跨域 
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // target: '',
				pathRewrite:{'^/api':''},
      },
    }
  }
})
