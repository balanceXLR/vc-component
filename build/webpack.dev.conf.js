const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dev-dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'] // 解析css文件，postcss后处理器
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 解析less文件
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 模块热更新
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dev-dist'),
    open: false, // 禁止自动开启浏览器
    hot: true, // 开启模块热更新
    clientLogLevel: "none"
  }
});