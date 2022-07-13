# ex06
### image 모듈 번들링 하기

1. 설치 패키지
    - ```$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader```

2. image webpack 설정(webpack.config.js)
```js
   output: {
        path: path.resolve('public'),
        filename: 'main.js',
        assetsModuleFilename: 'assets/images/[hash][ext]'
    },
```

3. 개발 서버 실행
    - ``` $ npm start ```