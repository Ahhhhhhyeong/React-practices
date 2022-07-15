import React from 'react';

function Clock(props) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        /**
           Comment01: JSX 밖은 JavaScript 구문(주석 구문)이 가능 하다.
         */
        <div 
        // Comment02: 여기서도 JavaScript 주석이 가능하다: 비추
        className='clock'
        title='시계'>            
            {/**
             * Comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 달아야한다: 강추
            */}
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {/**
             * Comment04: >>JSX는 HTML이 아니다<<
             * <!-- --> 는 주석이 아니다
             */}
            {('0' + minutes).slice(-2)}
            {' : '} 
            {(('0')+seconds).slice(-2)}
            {' '} 
            {hours > 12 ? 'PM': 'AM'}
        </div>
    );
}

export default Clock;