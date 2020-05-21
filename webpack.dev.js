const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    proxy: {
      // 本地开发需要走代理才能访问其他网站的数据
      '/carhailingService': {
        target: ' https://monitor.dongguantong.com.cn:18181',
      },
    },
  },
});
