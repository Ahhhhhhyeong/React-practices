import React from 'react';
import PropTypes from 'prop-types';
import TaskList from "./TaskList";
import Task from "./Task";
import styles from './assets/scss/Card.scss';

export default function Card({no, title, description, status, tasks}) {
    let stat = false;
    const openCard = e => {
        console.log(no);     
    }
   
    return (
        <div className={styles.Card}>
                <div 
                className={[styles.Card__Title, styles.Card__Title__Open].join(" ")}
                id={no}
                 onClick = {openCard.bind({no})}
                >
                    {title}                 
                </div>
                    <div class='Card__Details' >
                        {description}
                        <TaskList tasks={tasks} /> 
                    </div>
                    
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