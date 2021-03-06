# ex04
## State

1. 기본 개념
   1. state
      1. 컴포넌트 내부의 현재 상태를 나타낸 쓰기 가능한 데이터
      2. 컴포넌트 this.state 안에 여러 데이터(상태)를 가질 수 있다
      3. this.state 특정 컴포넌트 전용이다.
      4. 상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링의 트리거가 되고 컴포넌의와 자식 컴포넌트 다시 렌더링 된다.
      5. 클래스 컴포넌트에서는 constructor 안에서 상태를 초기화 한다.
      6. 클래스 컴포넌트에서는 상태 변경을 위해서 반드시 setState 함수를 사용한다.
      7. 함수 컴포넌트에서는 useState 후크(hook) 함수를 사용해서 초기화 한다
      8. 함수 컴포넌트에서는 상태 변경을 위해 userState 후크 함수에서 반환된 배열의 두번째 요소를 함수로 사용한다

   2. 예제 src/01

2. 제어 컴포넌트
   1. input, textarea, select 같은 폼(<form/>) 컴포넌트에서 사용자 입력에 따라 state값이 변경되고 렌더링하는 컴포넌트를
   2. 제어 컴포넌트
      1. 예제 src/02
      2. '컴포넌트의 UI를 외부에서 변경할 수 없고 내부의 상태 변경으로 가능하다' 라는 리액트 컴포넌트의 작성 원칙을 준수 할 수 있다.
      3. 사용자 입력 값을 제어(제한, 다양한 validation) 할 수 있다.
   3. 비제어 컴포넌트
      1. 예제 src/03
      2. 폼 컴포넌트를 반드시 제어 컴포넌트로 작성해야 하는 겅은 아니다.
      3. 상태를 제어하지 않는 비제어 컴포넌트를 만들 수 있다.

3. 상태 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
   1. 상태 컴포넌트
      1. 상태를 관리하는 컴포넌트
      2. 보통 상태 컴포넌트는 컴포넌트 계층의 상위에 있다
      3. 보통 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑할 수 있다
   2. 순수 컴포넌트
      1. 상태없이 속성(props)로 화면만 렌더링하는 컴포넌트
         1. 상태없이 속성(props)로 화면만 렌더링하는 컴포넌트
         2. 재사용성이 좋다. 테스트하기도 좋다.
   3. **애플리케이션의 컴포넌트 들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 개발하는 것이 좋다.**
   4. 어떤 컴포넌트가 상태 컴포넌트인가?
      1. 상태를 기반으로 렌더링하는 컴포넌트 ex) 제어컴포넌트
      2. 다수의 하위 컴포넌트를 가지고 있는 공통(하나)의 컴포넌트
      3. 컴포넌트 Hierachy에서 상위에 있는 상태를 가져야만 하는 컴포넌트
      4. 못 찾겠으면, 상태를 관리하는 컴포넌트를 만들고 하위(pure)컴포넌트를 래핑하도록 한다.
   -  예제: emaillist

4. Data Flow(Bottom -> Up)
   - 예제: emaillist

---

## 설정

1. 설치
   1. ```$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react prop-type @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons```
   2.  ```$ npm i react react-dom ```  

2. 설정파일  
   1. babel.config.json
   2. webpack.config.js

3. npm scripting
4. 실행
   1. ```$ npm run debug src=(01|02|03|04...) ```
