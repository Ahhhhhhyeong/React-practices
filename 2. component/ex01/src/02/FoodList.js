import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const componets = [];
        // this.props.foods.forEach(function(food){
        //     componets.push(<FoodListItem name={food.name} quantity={food.quantity} />);
        // });
        return (
            <div>
                <ul>
                    {
                        this.props.foods.map((food) => <FoodListItem 
                                                        key={food.no}
                                                        name={food.name} 
                                                        quantity={food.quantity} />)
                    }
                </ul>
            </div>
        );
    }
}

export default FoodList;