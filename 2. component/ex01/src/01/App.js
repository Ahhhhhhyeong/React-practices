//예제 1
import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class App extends Component {
    render() {
        return (
            <div id='App'>
                <FoodListItem name='Bread' quantity='10' />
                <FoodListItem name='Milk' quantity='5' />
                <FoodListItem name='Egg' quantity='20' />
            </div>
        );
    }
}

export default App;