# ex04
### 번들링(webpack)

1. webpack은 작게 분리된 많은 애플리케이션의 모듈(js, css, images, font)들을 '의존성 분석' 

2. 최종 결과물인 하나의 JS파일을 번들(bundle)이라고 부르고 묶는 작업을 번들링 이라고 한다. 

3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업을 의미 하지 않는다.(build)

4. 빌드 작업
    1. linting(ESLint, 문법체크) 작업
    2. document 작업(JSDoc) 작업
    3. test(Mocha, jest) 작업
    4. 난독화/압축(uglify) 작업
    5. 번들링

5. js 모듈 뿐만 아니라 다양한 assets(image, css, sass/scss, font...)들도 모듈로 취급한다.

---

### 환경설정

1. 설치
    - ```$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader```

2. 설치 확인
    - ```$ node ./node_modules/webpack/bin/webpack --version ```
    - ```$ npx webpack --version ```

3. webpack 설정(webpack.config.js)

4. 스크립트링(package.json)

5. 애플리케이션 실행(테스트 서버 실행)
    - ```$ npm start ```

6. 빌드(번들링)
    - ```$ npm run build ```