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
<<<<<<< HEAD
        target: 'http://192.168.2.104:8080',
=======
        target: 'http://192.168.1.155:9080',
>>>>>>> 761877a157605f5d8873638f881f5bee4bc4e753
      },
    },
  },
});
