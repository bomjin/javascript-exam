'use strict';

//Array 배열

//1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position 접근
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //사과
console.log(fruits[1]); //바나나
console.log(fruits[fruits.length - 1]); //마지막 인덱스

console.clear();
//3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. for Each
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// 이름이 없는 함수는 =>(에로함수) 사용가능
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

//한줄이면 괄호도 생략 가능
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion, deletion, copy
//push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift('딸기', '레몬');

//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push

//remove an item by index position  지정된 위치에 index을 삭제
// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1);
console.log(fruits); // 1부터 끝까지 삭제
fruits.splice(1, 1);
console.log(fruits); // 1만 삭제
fruits.splice(1, 1, '사과', '수박'); //딸기 삭제 사과, 수박 추가
console.log(fruits);

//combine two arrays // 두가지에 배열을 묶다
const fruits2 = ['키위', '망고'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
// find the index
console.clear();
console.log(fruits);
//indexOf > 위치 
console.log(fruits.indexOf('사과')); //0
console.log(fruits.indexOf('수박')); //2 
console.log(fruits.indexOf('코코넛')); // 없으면 -1 출력
//includes > 있는지 없는지 확인
console.log(fruits.includes('코코넛')); //false
console.log(fruits.includes('수박')); //true

// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); // 처음부터 찾음
console.log(fruits.lastIndexOf('사과')); //마지막 부터 찾음

