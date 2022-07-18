import React from 'react';

export default function TitelBar02() {
    const onClickHandler = e => {
        console.log('titleBar02');
    }
    return (
        <h1 
        onClick={ onClickHandler }
        style={{
            cursor:'pointer'
        }}>
        ex03 Function Handler(Functional Component)
    </h1>
    );
}