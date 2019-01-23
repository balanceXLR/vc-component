const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // vue ES module版本，使webpack可以找到vue文件
      '@': path.resolve(__dirname, '../src'), // 解析@为src目录
    },
    extensions: ['*', '.js', '.json', '.vue'] // import可省略后缀
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
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'] // 解析css文件，postcss后处理器
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 解析less文件
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