'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    onsole.log(num);
}

showFirstMessage("Hello Worls!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Expression

const logger = function () {
    console.log("Hello");
};

logger();

// Arrow

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

// Arguments

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

// About "return"

const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr) {
    return (curr * amount);
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() { };
console.log(doNothing() === undefined);

// Task 1

function sayHello(name) {
    return `Hello, ${name}!`;
}

sayHello('Max');

// Task 2

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
}

returnNeighboringNumbers(5);

// Task 3

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);