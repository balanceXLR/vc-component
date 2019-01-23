const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    bundle: path.resolve(__dirname, '../src/components/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // 解析css文件，postcss后处理器
      // },
      // {
      //   test: /\.less$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'] // 解析less文件
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    // new MiniCssExtractPlugin({  // 打包css为单一文件
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ]
});