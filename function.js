'use strict';

//function

function log(message) {
  Console.log(message);
}
log('hello');

// Parameters

function ChangeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: 'ellie' };
ChangeName(ellie);
console.log(ellie);

// Default parameters(add in  ES6)
function showMessage(message, from = 'unknown') {
  //   if (from === undefined) ES5
  //     from = 'unknown';
  //   }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest parameters (add in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let ChildMessage = 'hello';
  }
  console.log(ChildMessage);
}
printMessage();

// return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// Early return, early exit

function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
}

//function expression

const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log('yes');
};
const printNo = function print() {
  console.log('no');
  print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simokeOrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE
(function hello() {
  console.log('IIFE');
})();
