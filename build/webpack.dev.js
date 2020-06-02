const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    proxy: {
      '/innermanage': {
        target: 'http://192.168.2.104:8080',
      },
    },
  },
});
