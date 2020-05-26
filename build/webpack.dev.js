const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    proxy: {
      '/innermanage': {
        target: 'http://192.168.1.155:9080',
      },
    },
  },
});
