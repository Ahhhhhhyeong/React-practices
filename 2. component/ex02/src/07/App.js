import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faR, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// addtional...
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';


function App() {
    library.add(faBell, far, fab);

    return (
        <div > 
            {/** Example */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />
            <br/>

            {/** solid */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <FontAwesomeIcon icon={"bell"} />
            <br/>
            {/** regular */}
            <FontAwesomeIcon icon={["far", "bell"]} />
            <br/>
            {/** brand */}
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            <FontAwesomeIcon icon={["fab", "twitter"]} />

        </div>
    );
}

export default App;