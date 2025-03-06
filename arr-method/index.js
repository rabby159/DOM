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



