const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
const b = 'b';

//arrObj.b = '1234';
arrObj[b] = [];

console.log(arrObj['b']);
console.log(arrObj.b);

//const obj = {a: 1, b: 2, c: 3};
const obj = {
    Anna: 500,
    'Alice': 800
};

const storeName = 'Store';
const storeDescription = {
    budget: 1000,
    employees: ['Alex', 'Max', 'Sol'],
    products: {
        aggs: 80,
        meat: 170,
    },
    open: true
};