module.exports = {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置著
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
        mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
      },
      "cssnano": {
        preset: "advanced", // 自动清理不需要的前缀
        autoprefixer: false,
        "postcss-zindex": false
      }

    }
  }
  