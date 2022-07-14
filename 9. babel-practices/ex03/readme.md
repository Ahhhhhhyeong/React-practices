# 03 babel Plugin: 변환규칙

### 환경설정
1. 설치
   1. ```$ npm i -D @babel/core @babel/cli```
2. 플러그인 적용
   1. 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping)
      1. ```$ npm i -D @babel/plugin-transform-block-scoping```
      2. ```$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping```
   
   2. 객체분해 -  파라미터 플러그인(@bable/plugin-transform-parameters)
   3. 리터럴 문자열 플러그인(@babel/plugin-transform-literals)
   4. for..of 플러그인(@babel/plugin-transform-for-of)
   ```
   $ npm i -D  @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
   ```
      
   ```
   $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of
   ```

