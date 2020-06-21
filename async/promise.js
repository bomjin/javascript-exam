'use strict';

//promise is a javacript object for asynchronous operation.
// 자바스크립트 내장되어 있는 object 비동기적 사용
// state : pending -> fulfilled or  rejected
//  상태 :               완료    or  x
// producer vs Consumer

//1.Producer
//when new Promise is created, the executo runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files) //무거운 것들
  console.log('doing somethinng');
  setTimeout(() => {
    resolve('bumjin'); //성공
    reject(new Error('no network')); //실패
  }, 2000);
});

//2. Consumers : then, catch, finally

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

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

// Error handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(` error : ${hen} => '달걀'`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => '병아리'`), 1000);
  });

getHen()
  .then(getEgg)
  .then(cook)
  .catch((error) => {
    return '소시지';
  })
  .then(console.log);

// .then((hen) => getEgg(hen))
// .then((egg) => cook(egg))
// .then((meal) => console.log(meal));
