const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    proxy: {
      '/carhailingService': {
        target: ' https://monitor.dongguantong.com.cn:18181',
      },
    },
  },
});
