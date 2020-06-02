const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
<<<<<<< HEAD
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
=======
        test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|eot)$/,
        use: {
          loader: 'file-loader',
        },
>>>>>>> 761877a157605f5d8873638f881f5bee4bc4e753
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyCSS: true,
      },
      chunksSortMode: 'dependency',
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    alias: {
      '@': resolve('src/common/'),
    },
  },
};
