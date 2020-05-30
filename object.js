'use strict';

// objects

const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { naeme: 'ellie', age: 4 };
print(ellie);

//object 추가 가능
ellie.hasJob = true;
console.log(ellie.hasJob);

//  삭제 가능
delete ellie.hasJob;
console.log(ellie.hasJob);

// Computed properties
// 키의 값은 string만 가능 []
console.log(ellie.name); //undefined
console.log(ellie['name']); ///ellie
ellie['hasJob'] = true;
console.log(ellie.hasJob); //true

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

const person1 = { name: 'bob', age: 2 };
const person2 = { nmae: 'steve', age: 3 };
const person3 = makePerson('bumgin', 4);

function makePerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

// in operator : property existenc chek
// 키의 이름이 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

// for.. in
// for(key in obj)

for (key in ellie) {
  console.log(key);
}

// for (value of iterable)

const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// fun clonig
// object.assign

const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
// 값을 복사 해오는 방버
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
