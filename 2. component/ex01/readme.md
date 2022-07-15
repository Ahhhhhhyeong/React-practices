# ex01
## Property(props)
1. component의 데이터
2. 부모에서 자식으로 전달
  - Top -> Down
  - Component Communication(컴포넌트간의 통신), Data Flow
3. 자식 컴포넌트에서 변경 불가
4. 부모가 소유하는 데이터 
   
### src/01 : FoodList: 클래스 컴포넌트
### src/02 : FoodList: Data Flow(Top -> Down): 클래스 컴포넌트
### src/03 : FoodList: Data Flow(Top -> Down): 함수 컴포넌트
### src/04 : Validation


---

## 설정

1. 설치
   1. ```$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react```
   2.  ```$ npm i react react-dom ```  

2. 설정파일  
   1. babel.config.json
   2. webpack.config.js

3. npm scripting
4. 실행
   1. ```$ npm run debug src=(01|02|03|04|05|06|07|08) ```
