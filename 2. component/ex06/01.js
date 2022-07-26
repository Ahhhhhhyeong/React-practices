// 비파괴 배열 예제
import fs  from 'fs';

// fs.readFile('./json/data.json', 'utf-8', (err, data) => {console.log(data)});
// console.log('1');
//const data = fs.readFileSync('./json/data.json', 'utf-8');
//console.log(data);

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateProducts1 = state.order.products;
updateProducts1.push({
    no: "c002-003",
    name: "블루양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("==================================================");

const updateProducts2 = state.order.products.concat({
    no: "c002-003",
    name: "블루양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);

console.log("==================================================");

// concat 대신 사용 
const updateProducts3 = [...state.order.products,{
    no: "c002-003",
    name: "블루양말",
    price: 2000,
    amount: 1
}];

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);
