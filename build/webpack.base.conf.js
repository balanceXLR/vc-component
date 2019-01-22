const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/components/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // TODO:
      '@': path.resolve(__dirname, '../src'), // 解析@为src目录
    },
    extensions: ['*', '.js', '.json', '.vue']  // import可省略后缀
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader', // 解析js
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader' // 解析图片文件
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader' // 解析文字文件
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader' // 解析vue
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] // 解析vue
      }

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
};