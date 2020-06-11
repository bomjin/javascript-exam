'use strict';

//JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'bumjin',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
// 제이슨에서는 object 새로 정의된 jump라는 함수는 쓰지 못한다 .

json = JSON.stringify(rabbit);
console.log(json);

//원하는 값만 가져 올 수 있다.
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// key와 value 값을 가져온다 .
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key} , value: ${value} `);
});
// key값에 이름을 ellie로 변경해주거나 아니면 value를 쓴다.
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key} , value: ${value} `);
  return key == 'name' ? 'ellie' : value;
});

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);

//return에 key 값을 통해 새로 new Date를 사용 할 수 있다.
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key} , value: ${value} `);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
