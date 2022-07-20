import React, {useState} from 'react';

export default function TitelBar02() {
    const [stateNo, setStateNo] = useState(10);


    return (
        <h1 
            onClick={ e => {
                setStateNo(stateNo + 1);
                console.log('titleBar02 Click' + stateNo);
            } }
            style={{ cursor:'pointer' }}>
            ex03 Function Handler(Functional Component)
            <br/>
            {
                stateNo
            }
        </h1>
    );
}