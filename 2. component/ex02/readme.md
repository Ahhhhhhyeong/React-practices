# ex02
## Component Styling

### 1. Inline Styling: src01
### 2. Normal CSS: src02
   - css-loader options: {module; false}
   - ```$ npm run debug src=02 css-module=false```
### 3. CSS Module I
   - css-loader options: {module; true}
   - ```$ npm run debug src=03 (css-module=true)```
### 4. CSS Module II
   - css-loader options: {module; true}
   - ```$ npm run debug src=03 (css-module=true)```
### 5. 
### 6. 
### 7. 


---

## 설정

1. 설치
   1. ```$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react prop-type```
   2.  ```$ npm i react react-dom ```  

2. 설정파일  
   1. babel.config.json
   2. webpack.config.js

3. npm scripting
4. 실행
   1. ```$ npm run debug src=(01|02|03|04...) ```