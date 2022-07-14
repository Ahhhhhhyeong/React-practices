# 04 env Preset: 변환규칙모음
1. env Preset
   1. 여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 미리 관련 플러그인을 모아 놓은 것 
   2. 종류
      1. ECMAScript 년도별(버전별)로 모아 놓은 것들
      2. ECMAScript stage(level)별로 모아 놓은 것들
      3. 3rd party(TypeScript, React) ...
   3. env Preset은 ECMAScript stage 3레벨 이상의 문법 플러그인들의 모음
   4. env Preset 뿐만 아니라 다양한 preset과 plugin 들을 babel 설정을 통해서 적용할 수 있다.(babel.config.json) 

### 환경설정
1. 설치
   1. ```$ npm i -D @babel/core @babel/cli @babel/preset-env```

2. env preset의 플러그인 확인
   1. ```$ npx list --depth=1 | grep```

3. env preset 설정
   1. 타겟 브라우저를 설정하는 방식
   2. 브라우저별 es6 호환성 테이블(https://kangax.github.io/compat-table/es6/)
4. 변환 하기
   1. ```$ npx babel src/ex.js -o dist/ex.js```