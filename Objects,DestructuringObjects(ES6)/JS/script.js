"use strict";

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"] );

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i}, matters ${options[key][i]}`)
//             //counter++;
//         }
//     } else {
//         console.log(`Property ${key}, matters ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
