// 1. Use strict
// added in ES 5
// use this for Valina Javacript.
'use strict';

//2. Variable
// let (added in ES6)

let name = 'ellie';
console.log(name);
name = 'bumjin';
console.log(name);

//block scope
//global variable
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name); //ellie
  name = 'bumjin';
  console.log(name); //bumjin
  console.log(globalName); //global name
}
console.log(name); // x
console.log(globalName); //global name

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// hoisting : 어디에 선언하는지 상관없이 끌어올려줌
// has no block scope

// 3. Contants
// favor immutable data type always for a few reasons :
// - security > 보완
// - thread safety
// - reduce human mistakes > 실수를 방지
const daysInWeek = 7;

// 4. Varible types
// primitive, single item : number, string, boolean, null, undefiedn, symbol
// object, box container
// function, frist-class function > 변수에 사용가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type ${typeof count}`);
console.log(`value: ${size}, type ${typeof size}`);

//number - speicla numeric vaalues : infinity, -infinity,  Nan

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //temlate literals (string)

//null

let nothing = null;
console.log(`value: ${nothing}, typeL ${typeof nothing}`);

//undefined

let x;
console.log(`value: ${x}, type : ${typeof x}`);

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${sybol1.description}, type: ${typeof sybol1}`);
// description > 변환하여서 보내줌

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type : ${typeof text}`);
text = 1;
console.log(`value: ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);
console.log(text.charAt(0)); // 오류 발생 타입이 nubmer 이기 때문에
