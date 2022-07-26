import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 12,
            minutes: 12,
            seconds: 30,
            session: 'am',
            ticks: 0
        }
    }

    _getCurrentClockTime(){
        const now = new Date();
        const hours = now.getHours();

        return {
            hours: ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ('0' + now.getMinutes()).slice(-2),
            seconds: (('0')+now.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm': 'am',
            ticks: this.state ? this.state.ticks + 1 : 0
        }
    }

    render() {
        return (
            <div className='clock-display'>
                <span>{this.state.ticks}</span>
                <h2>ex05 - Class Component LifeCycle Practice</h2>
                    <Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} session={this.state.session}/>
            </div>
        );
    }

    componentDidMount(){
        setInterval(() => {
            this.setState(this._getCurrentClockTime());
            
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.setInterval);
    }

}