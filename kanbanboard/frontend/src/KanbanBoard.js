import React, { useEffect, useState } from 'react';
import styles from './assets/css/KabanBoard.css';
import CardList from './CardList';

function KanbanBoard() {

const [cards, setCards] = useState([]);

useEffect(() => {
    fetchBoard();
}, []);

const fetchBoard = async () => {
    try{
        const response = await fetch('/api/card', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        if(json.result !== 'success'){
            throw new Error(`${json.result} ${json.message}`);
        }

        setCards(json.data);
        console.log(json.data);
    }catch(err) {
        console.error(err);
    }    
};



return (
        <div className={styles.KanbanBoard}>
            <CardList
                key='ToDo'
                title='ToDo'
                cards={cards.filter(card => card.status == 'ToDo')} />

            <CardList
                key='Doing'
                title='Doing'
                cards={cards.filter(card => card.status == 'Doing')} />

            <CardList
                key='Done'
                title='Done'
                cards={cards.filter(card => card.status == 'Done')} />
        </div>
    );
}

export default KanbanBoard;
