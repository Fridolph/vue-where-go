npm i postcss-px2rem -D
npm i px2rem-loader -D

配置 px2rem，打开 build 目录下的 vue-loader.conf.js

```js
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    /*因为我是以750px(iphone6)宽度为基准，所以remUnit为75*/
    require('postcss-px2rem')({ remUnit: 75, baseDpr: 2 })
  ] 
}
```

当然，现在 有`.postcssrc.js`文件可以把 postcss里的内容拿出来单独配置

```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem": {
      "remUnit": 75,
      "baseDpr": 2
    }
  }
}
```

这样就可以了~

然后在 index.html 添加 flexible 或 hotcss 的CDN，或者在main.js引用 assets里的脚本也行