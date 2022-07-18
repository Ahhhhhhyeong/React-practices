import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);
    // 이벤트 함수 만들기
    const onKeyPressInput = (e) => { 
        if(e.key === 'Enter'){
            console.log(e.target.value);
        }
     };
    const onFocusInput = (e) => { console.log('Focus Input') };
    const onBlurInput = (e) => { console.log('onBlurInput') };
    
    const onMouseOverImage = (e) => console.log('mouseover ', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseMoveImage = e => {
        console.log('mousemove ', `x=${e.clientX}, y=${e.clientY}`);
        
    }
    const onMouseOutImage = e => console.log('MouseOut ', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseDownImage =e => console.log('MouseDown ', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseUpImage = e => console.log('MouseUp ', `x=${e.clientX}, y=${e.clientY}`);

    const onClickImage = e => console.log('Click ');
    const onDoubleClickImage = e => console.log('DoubleClick ');

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }
                />
        </Fragment>
    );
}