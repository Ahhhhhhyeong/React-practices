import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    
    const [currentTime, setcurrentTime] = useState(getCurrentClockTime());
    
    const getCurrentClockTime = () => {
        const now = new Date();
        const hours = now.getHours();

        return {
            hours: ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ('0' + now.getMinutes()).slice(-2),
            seconds: (('0')+now.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm': 'am'
        }
    }

    useEffect(() => {
        console.log('After Mount(componentDidMount)');

 
        return (() => {
            console.log('After Unmount(componentWillUnmount)');
        });       
    }, []);

   
    return (
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={hours}
                minutes={minutes}
                seconds={seconds}/>
    );
}