'use strict';

//javascript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting : var, function declartion
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printImmediately(() => console.log('async callback'), 2000);

//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
