import React from 'react';
import MyComponent from './MyComponent';

function App() {
    
    return(
        <div id='App'>
            <MyComponent
                /*props01={'문자열'}*/
                props02 = {200}
                props03 = {1-1 === 0}
                props04 = {{no:1, name:'둘리'}}
                props05 = {['Hello', 'World', 'ReactJS', 'ES6']}
                props06 = {() => '함수' }
                props07 = {'숫자나 글자만 들어가유'}
                props08 = {[true, false, true]}
                props09 = {{
                    no:1, 
                    name:'둘리', 
                    email:'dooly@gmail.com'
                }}
            />
            </div>
        );
    
}

export default App;