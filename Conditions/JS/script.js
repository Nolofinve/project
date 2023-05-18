"use strict";

// if (1) {
//    console.log('Ok!');
// }else {
//    console.log('Error!');
// }

// if (num < 49) {
//    console.log('Error!');
// } else if (num > 100) {
//    console.log('Too much!');
// } else {
//    console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');

// const num = 50;

// switch (num) {
//    case 49: 
//        console.log('Wrong!');
//        break;
//    case 100: 
//        console.log('Wrong!');
//        break;
//    case 50:
//        console.log('Right!');
//        break;
//    default: 
//       console.log('Not this time!');
//       break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//    console.log(`I'm full!`);
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdfsdfs w s');

// if (hamburger === 3 && cola === 1 && fries) {
//    console.log(`All are full!`);
// } else {
//    console.log('We are going away.');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log(`All are full!`);
} else {
   console.log('We are going away.');
}

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);
