import React, { Component } from 'react';
import FoodList from './FoodListItem'

class FoodList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Bread: 10</li>
                    <li>Milk: 5</li>
                    <li>Egg: 20</li>
                </ul>
            </div>
        );
    }
}

export default FoodList;