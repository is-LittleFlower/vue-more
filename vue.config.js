// path是处理路径的
// path是vue的代码，跟node.js有什么关系？
// 因为项目是脚手架工具创建的，vue、cli、webpack... 都要在node环境中运行
const path = require('path')
// module.exports是在node中学的导出模块
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口, 修改原来的入口src为examples
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      // 配置别名，以前是：@ ---> src
      alias: {
        '@': path.resolve('./examples')
      }
    }
  }
}
