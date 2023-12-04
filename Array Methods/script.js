// Array Methods

let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];

// splice

console.log(arr.splice(2));

// reverse

console.log(arr2.reverse());

// concat

console.log(arr.concat(arr2));

// at

console.log(arr.at(0));

// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements){}
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew${Math.abs(movement)}`);
  }
}

console.log("----------FOREACH----------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew${Math.abs(mov)}`);
  }
});

// forEach With Maps and Sets

console.log("forEach With Maps and Sets ");
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// map

const eurToUsd = 1.1;
// const movementUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

// reduce()

console.log("---------------reduce Method---------------");
console.log(movements);

// accumulator -> SONWBALL

// function

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}:${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// --------------------------------------------------------------//

// use arrow function

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// use for of loop

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

// The Magic of Chaining Methods

// PIPELINE
const eurToUsd1 = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

//  The find Method
console.log("---------------find Method---------------");

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log("---------------sort Method---------------");

// String

const owner = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owner.sort());
// console.log(owner);

// Number

console.log(movements);
// return < 0, A, B (keep order)
// return < 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// descending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

// More Ways of Creating and Filling Arrays
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty array + fill method

const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr1.fill(23, 2, 6);

// Array.from()

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Swapping Array Element
let arrSwap = [1, 2];
// [arrSwap[0], arrSwap[1]] = [arrSwap[1], arrSwap[0]];
let temp = arrSwap[0];
arrSwap[0] = arrSwap[1];
arrSwap[1] = temp;
console.log(arrSwap);

// Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.
let firstEle = function (arr, n) {
  if (arr === null) return void 0;

  if (n == null) return arr[0];

  if (n < 0) return [];
  return arr.slice(0, n);
};
console.log(firstEle([7, 9, 0, -2]));
console.log(firstEle([], 3));
console.log(firstEle([7, 9, 0, -2], 3));
console.log(firstEle([7, 9, 0, -2], 6));
console.log(firstEle([7, 9, 0, -2], -3));

// Write a JavaScript function to get the last element of an array.
// Passing the parameter 'n' will return the last 'n' elements of the array.

let lastEle = function (arr, n) {
  if (arr == null) return void 0;

  if (n == null) return arr[arr.length - 1];

  return arr.slice(Math.max(arr.length - n, 0));
};
console.log(lastEle([7, 9, 0, -2]));
console.log(lastEle([], 3));
console.log(lastEle([7, 9, 0, -2], 3));
console.log(lastEle([7, 9, 0, -2], 6));
console.log(lastEle([7, 9, 0, -2], -3));

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
let color = ["Red", "Green", "White", "Black"];
console.log(color.join(", "));
console.log(color.join("+"));
console.log(color.join(","));

// let arrLeng = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;
// for (let i = 0; i < arrLeng.length; i++) {
//   for (let j = i; j < arrLeng.length; j++) {
//     if (arrLeng[i] == arrLeng[j]) m++;
//     if (mf < m) {
//       mf = m;
//       item = arrLeng[i];
//       console.log(mf);
//     }
//   }
//   m = 0;
// }

let counter = {
  count: 0,
  increment: () => {
    counter.count++;
  },
};
counter.increment();

async function* printNumbers(start) {
  let num = 0;
  while (num <= 10) {
    const value = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(start + num++);
      }, 1000);
    });
    yield;
  }
}
const generator = printNumbers(5);

(async () => {
  let result = await generator.next();
  console.log(result);

  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
  result = await generator.next();
  console.log(result);
})();
