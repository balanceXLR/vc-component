# vc-component

## 用于vue组件开发的通用模板

## 建议结合[v-scofford](https://github.com/1465799166/vs-scaffold)使用 

# Build Step

``` bash
$ npm install
```

# 最佳实践
## init project
- 推荐使用[vs-scofford](https://github.com/1465799166/vs-scaffold)进行模板初始化
- 修改package.json中的相关信息
  
## 开发方式
- 你只需要关注src目录下的代码
- components下的每一个文件夹代表一个组件
- 在components/index.js进行组件注册，打包入口即为这个index.js文件

## 本地调试
- ssr
  ``` bash
  npm run dev
  ``` 
  与传统的vue-cli脚手架相同的开发模式，入口为src/index.js，支持vue-router
- html
  在components/index.js中注册组件后进行打包
  ``` bash
  npm run build
  ```
  然后直接在 components/dev.html中直接使用标签即可
 