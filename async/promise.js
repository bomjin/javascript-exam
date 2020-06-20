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
