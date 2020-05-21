const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const utils = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css'),
    }),
    new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: './skeleton/entry-skeleton.js', // 这里的入口要符合 打包的入口名册，不能默认的 SkeletonWebpackPlugin 的 app
        },
      },
      quiet: true,
    }),
  ],
});
