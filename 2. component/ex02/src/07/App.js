import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// addtional...

function App() {
    return (
        <div > 
            {/** Example */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />

            {/** solid */}

            {/** regular */}
            
            {/** brand */}
        </div>
    );
}

export default App;