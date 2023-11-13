"use strict";

// Constructor Functions and the new Operator

console.log(
  "----------------Constructor Functions and the new Operator----------------"
);
const Preson = function (firstName, birthYerar) {
  // Instance Propertise
  this.firstName = firstName;
  this.birthYerar = birthYerar;
};

const jonas = new Preson("jonas", 1996);
console.log(jonas);

// 1. New () is created
// 2. function is called, this ={}
// 3. {} linked to prototype
// 4. function automatically return{}

const matilda = new Preson("matilda", 2002);
const jack = new Preson("jack", 1997);
console.log(matilda, jack);

console.log(jack instanceof Preson);

// Prototypes
console.log(Preson.prototype);

Preson.prototype.calcaAge = function () {
  console.log(2037 - this.birthYerar);
};

jonas.calcaAge();
matilda.calcaAge();
jack.calcaAge();

// ------------------------------------------
// Prototypes

console.log("----------------Prototypes----------------");
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Preson.prototype);

console.log(Preson.prototype.isPrototypeOf(jack));

// prototypeOfLinkedObjects

Preson.prototype.species = "Homo Sapiens";
console.log(jonas);
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// ------------------------------------------
console.log(
  "----------------Prototypal Inheritance on Built-In Objects----------------"
);
console.log(jonas.__proto__);
// Object.Prototypal(top Prototypal chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Preson.prototype.constructor);

const arr = [1, 2, 5, 4, 5, 6, 6, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// ------------------------------------------

// ES6 Classes
console.log("----------------ES6 Classes----------------");

// class expression
// const PresonCl = class {};

// class Declaration

class PresonCl {
  constructor(firstName, birthYerar) {
    this.firstName = firstName;
    this.birthYerar = birthYerar;
  }
  calcaAge() {
    console.log(2037 - this.birthYerar);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const jessica = new PresonCl("Jessica", 1996);
console.log(jessica);
jessica.calcaAge();

console.log(jessica.__proto__ === PresonCl.prototype);
jessica.greet();

// 1. classes are NOT hoisted
// 2. class are first-class citizes
// 3. classes are executed in strict mode

// ------------------------------------------

console.log("----------------Setters and Getters----------------");
const account = {
  owner: "jonas",
  movement: [200, 530, 120, 300],
  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movement);

// ------------------------------------------

console.log(
  "----------------Inheritance Between Classes: Constructor Functions----------------"
);

const Student = function (firstName, birthYerar, course) {
  this.firstName = firstName;
  this.birthYerar = birthYerar;
  this.course = course;
};
// Linking prototype
Student.prototype = Object.create(Preson.prototype);

Student.prototype.introduce = function () {
  console.log(`My name ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcaAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Preson);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);

console.log(
  "----------------Inheritance Between Classes: ES6 Classes----------------"
);

var removeDuplicates = function (nums) {
  const x = new Set(nums);

  return x.Array[new Set([1, 2, 3, 4, 5, 5, 1])];
};

var longestStrChain = function (words) {
  var memory = {};
  words.sort().length;
  for (var word of words) {
    var longest = 0;
    for (var i = 0; i < word.length; i++) {
      var pre = word.slice(0, i) + word.slice(i + 1);
      longest = Math.max(longest, (memory[pre] || 0) + 1);
    }
    memory[word] = longest;
  }
  return Math.max(...Object.values(memory));
};

var join = function (arr1, arr2) {
  const storeValue = {};
  const concatArr = arr1.concat(arr2);
  for (let i = 0; i < concatArr.length; i++) {
    if (storeValue[concatArr[i].id]) {
      for (const key in concatArr[i])
        storeValue[concatArr[i].id][key] = concatArr[i][key];
    } else {
      storeValue[concatArr[i].id] = concatArr[i];
    }
  }
  return Object.values(storeValue);
};

var longestStrChain = function (words) {
  let storeValue = {};
  words.sort((a, b) => a.length - b.length);
  for (let currWord of words) {
    let largeLen = 0;
    for (let i = 0; i < currWord.length; i++) {
      let pre = currWord.slice(0, i) + currWord.slice(i + 1);
      largeLen = Math.max(largeLen, (storeValue[pre] || 0) + 1);
    }
    storeValue[currWord] = largeLen;
  }
  return Math.max(...Object.values(storeValue));
};

var join = function (arr1, arr2) {
  let obj = {};
  for (let currValue of arr1) {
    obj[currValue.id] = currValue;
  }
  for (let currValue of arr2) {
    obj[currValue.id] = currValue;
  }
  return Object.values(obj);
};

const user = {
  name: "namit",
  age: 20,
};
console.log(user);

let i = 1;
// while (i < 5) {
//   console.log(i);
//   // i++;
// }

// do {
//   console.log("hry", i);
//   i++;
// } while (i < 5);
