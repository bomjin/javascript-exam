'use strict';

//async & await
//clear style of using promise

// ex

function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
console.log(user);

// Promise

function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('ellie');
  });
}

const user = fetchUser();
user.then(console.log);

// async

async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

//2. await

function delav(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delav(3000);
  return 'appple';
}

async function getBanana() {
  await delav(3000);
  return 'banana';
}

//function getBanana() {
// return delav(3000).then(() => 'banana');
//}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}+${banana}`);
  });
}

pickFruits().then(console.log);

// 순차적으로 진행되기 떄문에 코드에 비효율성 >> 병렬로 처리하기 위해??
async function pickFruits() {
  //
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  //  const apple = await getApple();
  // const banana = await getBanana();
  return `${apple}+ ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise ApIs all을 사용하여 가져오고 join을 통해 문자열로 변환
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join('+')
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
