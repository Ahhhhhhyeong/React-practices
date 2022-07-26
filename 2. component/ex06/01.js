// 비파괴 배열 예제
import fs  from 'fs';

// fs.readFile('./json/data.json', 'utf-8', (err, data) => {console.log(data)});
// console.log('1');
//const data = fs.readFileSync('./json/data.json', 'utf-8');
//console.log(data);


let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateProducts = state.order.products;
updateProducts.push({
    no: "c002-003",
    name: "블루양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("==================================================");
