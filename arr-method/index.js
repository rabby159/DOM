const myProduct = [
    {category: 'Watch', price: 1400, color: 'Ash'},
    {category: 'Phone', price: 10000, color: 'Blue'},
    {category: 'PC', price: 110000, color: 'Back & White'},
    {category: 'Laptop', price: 60000, color: 'Ash'}
];


// map
const result = myProduct.map(product => product.category);
console.log(result);

const result2 = myProduct.map(product => product.color);
console.log(result2);

const result3 = myProduct.map(product => product.price);
console.log(result3);


// filter
const price = myProduct.filter(product => product.price < 70000);
console.log(price);

const color = myProduct.filter(product => product.color === 'Ash');
console.log(color);

const specificPrice = myProduct.filter(product => product.category.includes('p'))
console.log(specificPrice);

// --------------------------------------


// JSON
const myInfo = [
    { name: 'Md Rabby'},{ age: 25},
    { course: ['Level 1', 'Level 2']}
];

const infoJson = JSON.stringify(myInfo);
console.log(infoJson);

const infoString = JSON.parse(infoJson);
console.log(infoString);

// fetch

fetch('URL')
    .then(res => res.json())
    .then(date => console.log(date))


// ternary

const money = 150;
const food = money > 100 ? 'biriyani' : 'cha';
console.log(food);