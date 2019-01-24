const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseConfig, {
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
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'] // 解析css文件，postcss后处理器，需要在根目录下新建postcss.config.js
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 解析less文件
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 模块热更新
    
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dev-dist'),
    open: false, // 禁止自动开启浏览器
    hot: true, // 开启模块热更新
    clientLogLevel: "none", // 不在浏览器控制台打印
    quiet: true, // 配合FriendlyErrorsPlugin使用
    host: 'localhost',
    port: 8080
  },
});

module.exports = new Promise((resolve, reject) => { 
  portfinder.basePort = process.env.PORT || 8080
  portfinder.getPort((err, port) => {
    if(err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port // 端口自增
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({  // 优化compiler信息
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
      }))
      resolve(devWebpackConfig)
    }
  })
})