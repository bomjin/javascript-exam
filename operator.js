// Logical operators :  || or, && and, ! not
const value1 = true;
const value2 = 4 < 2;

//|| or, finds the first truthy value
// 맨 앞이 true니까 바로 true 출력
// 가벼운 요소부터 앞에다가 둔다.
console.log(`or: ${value1 || value2 || check()}`);

//&& and, finds the first truthy value
//
console.log(`and: ${value1 && value2 && check()}`);

function chek() {
  for (let i = 0; i < 10; i++) {
    Console.log('hi');
  }
  return true;
}

// Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// equality -puzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);

//  conditional operators : if
// if, else if, else

const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome');
} else if (name === 'coder') {
  console.log('you are coder');
} else {
  console.log('unkwnon');
}

//Swith statement

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all');
    break;
}

// for

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
