import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskList from "./TaskList";
import Task from "./Task";
import styles from './assets/scss/Card.scss';

export default function Card({no, title, description, status, tasks}) {
   const [showDetail, setShowDetail] = useState(false);

   return (
        <div className={styles.Card}>
                <div 
                className={!showDetail ? styles.Card__Title : [styles.Card__Title, styles.Card__Title__Open].join(" ")}
                id={no}
                 onClick = {e => setShowDetail(showDetail=>!showDetail) /* showDetail을 통해 true: 오픈, false: 닫음 */ }
                >
                    {title}                 
                </div>
                { showDetail ?
                    <div class='Card__Details' id={no} >
                        {description}
                        <TaskList tasks={tasks} /> 
                    </div> 
                    : false                    
                }
        </div>
    );
}

Card.propTypes = {
    // title: PropTypes.string.isRequired,
    title: (props, propName, componentName) => (!props[propName] || typeof props[propName] !== 'string' || props[propName].length > 50) ? new Error(`${propName} in ${componentName} is longer than 50 characters`) : null,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}