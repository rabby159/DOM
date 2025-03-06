const myProduct = [
    {category: 'Watch', price: 1400, color: 'Ash'},
    {category: 'Phone', price: 10000, color: 'Blue'},
    {category: 'PC', price: 110000, color: 'Back & White'},
    {category: 'Laptop', price: 60000, color: 'Ash'}
];

const result = myProduct.map(product => product.category);
console.log(result);

const result2 = myProduct.map(product => product.color);
console.log(result2);

const result3 = myProduct.map(product => product.price);
console.log(result3);


